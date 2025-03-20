const Imap = require('imap');
require('dotenv').config();

const imap = new Imap({
  user: process.env.EMAIL,
  password: process.env.EMAIL_PASSWORD,
  host: process.env.IMAP_HOST,
  port: parseInt(process.env.IMAP_PORT),
  tls: true,
  tlsOptions: {
    rejectUnauthorized: false
  }
});

imap.once('ready', () => {
  console.log('IMAP connection successful!');
  imap.end();
});

imap.once('error', (err) => {
  console.error('IMAP error:', err);
});

imap.connect();