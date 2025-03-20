const Imap = require('imap');
const { simpleParser } = require('mailparser');
const { Client } = require('@elastic/elasticsearch');

class EmailSyncService {
  constructor(accounts, esClient) {
    this.esClient = esClient;
    this.connections = accounts.map(account => new Imap({
      user: account.email,
      password: account.password,
      host: account.imapHost,
      port: account.imapPort,
      tls: true,
      tlsOptions: {
        rejectUnauthorized: true,
        secureProtocol: 'TLSv1_2_method',
        ciphers: 'HIGH:!aNULL:!MD5:!RC4'
      },
      authTimeout: 10000,
      connTimeout: 30000,
      keepAlive: {
        interval: 300000,
        idleInterval: 60000
      },
      debug: process.env.NODE_ENV === 'development' ? console.log : undefined
    }));

    this.aiService = new (require('./aiService'))();
    this.connections.forEach(conn => this.setupListeners(conn));
  }

  async categorizeAndNotify(email) {
    try {
      const category = await this.aiService.categorizeEmail(email);
      console.log(`Categorized email as: ${category}`);
      
      if (['Interested', 'Meeting Booked'].includes(category)) {
        await this.aiService.notifyViaSlack(category, email);
        await this.aiService.sendToWebhook(category, email);
      }
    } catch (error) {
      console.error('Categorization failed:', error);
    }
  }

  async processEmail(conn, uid) {
    try {
      const email = await this.fetchEmail(conn, uid);
      await this.indexEmail(email);
      await this.categorizeAndNotify(email);
    } catch (error) {
      console.error('Email processing failed:', error);
    }
  }

  setupListeners(conn) {
    conn.on('ready', () => this.onImapReady(conn));
    conn.on('error', (err) => {
      console.error(`IMAP error for ${conn.user}:`, err);
      console.error('IMAP error:', err);
      if (err.source === 'timeout') {
        console.log('Attempting to reconnect...');
        setTimeout(() => this.connect(), 5000);
      }
    });
    conn.on('end', () => {
      console.log(`IMAP connection ended for ${conn.user}`);
      setTimeout(() => conn.connect(), 5000);
    })
  }

  connect() {
    this.connections.forEach(conn => conn.connect());
  }

  async onImapReady(conn) {
    try {
      await this.openInbox(conn);
      this.startIdleMode(conn);
      console.log('Successfully connected to IMAP server');
    } catch (error) {
      console.error('Error in onImapReady:', error);
      setTimeout(() => this.connect(), 5000);
    }
  }

  async openInbox(conn) {
    return new Promise((resolve, reject) => {
      conn.openBox('INBOX', false, (err, box) => {
        if (err) reject(err);
        resolve(box);
      })
    })
  }

  startIdleMode(conn) {
    conn.on('mail', () => this.fetchNewEmails(conn));
  }

  async fetchNewEmails(conn) {
    const messages = await this.fetchLastNDays(conn, 30);
    for (const message of messages) {
      await this.processEmail(conn, message);
    }
  }
  async fetchLastNDays(conn, days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    const searchCriteria = ['ALL', ['SINCE', date]];

    return new Promise((resolve, reject) => {
      conn.search(searchCriteria, (err, results) => {
        if (err) reject(err);
        resolve(results);
      })
    })
  }


  

  async fetchEmail(conn, uid) {
    return new Promise((resolve, reject) => {
      const fetch = conn.fetch(uid, { bodies: '' })
      
      fetch.on('message', (msg) => {
        msg.on('body', async (stream) => {
          try {
            const { simpleParser } = require('mailparser');
    const parsed = await simpleParser(stream);
            parsed.uid = uid;
            resolve(parsed);
          } catch (error) {
            reject(error);
          }
        })
      })

      fetch.on('error', reject);
    })
  }

  async indexEmail(email) {
    try {
      await this.esClient.index({
        index: 'emails',
        body: {
          subject: email.subject,
          from: email.from,
          to: email.to,
          date: email.date,
          text: email.text,
          html: email.html,
          folder: 'INBOX'
        }
      });
      console.log('Email indexed successfully:', email.subject);
    } catch (error) {
      console.error('Failed to index email:', error);
    }
  }


}

EmailSyncService.prototype.connect = function() {
  this.connections.forEach(conn => conn.connect());
};

EmailSyncService.prototype.disconnect = function() {
  this.connections.forEach(conn => conn.end());
};

module.exports = EmailSyncService;