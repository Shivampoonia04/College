const express = require('express');
const cors = require('cors');
require('dotenv').config();
const EmailSyncService = require('./services/emailSync');
const AIService = require('./services/aiService');
const { Client } = require('@elastic/elasticsearch');

const app = express();

// Initialize Elasticsearch client
const esClient = new Client({
  node: process.env.ELASTICSEARCH_URL
});
app.use(cors());
app.use(express.json());

const accounts = [
  {
    email: process.env.EMAIL,
    password: process.env.EMAIL_PASSWORD,
    imapHost: process.env.IMAP_HOST,
    imapPort: parseInt(process.env.IMAP_PORT, 10)
  },
  {
    email: process.env.EMAIL_2,
    password: process.env.EMAIL_PASSWORD_2,
    imapHost: process.env.IMAP_HOST,
    imapPort: parseInt(process.env.IMAP_PORT, 10)
  }
];
const emailSync = new EmailSyncService(accounts);

async function main() {
  const aiService = new AIService();
  
  // Initialize the vector store
  await aiService.initializeVectorStore();

  // Example email
  const testEmail = {
    subject: "Meeting Request",
    text: "Hi, I would like to schedule a meeting to discuss your services. Are you available next week?",
    date: new Date()
  };

  try {
    // Test various functionalities
    const category = await aiService.categorizeEmail(testEmail);
    console.log('Email Category:', category);

    const sentiment = await aiService.analyzeEmailSentiment(testEmail);
    console.log('Email Sentiment:', sentiment);

    const reply = await aiService.suggestReply(testEmail);
    console.log('Suggested Reply:', reply);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Initialize services after server starts
  main().catch(console.error);
  emailSync.connect();
});

// API Endpoints
app.get('/emails', async (req, res) => {
  try {
    const { query, folder } = req.query;
    const searchResult = await emailSync.elasticsearch.search({
      index: 'emails',
      query: {
        bool: {
          must: [
            query ? { match: { text: query } } : { match_all: {} },
            folder ? { term: { folder: folder } } : { match_all: {} }
          ]
        }
      },
      sort: [{ date: 'desc' }]
    });

    res.json(searchResult.hits.hits);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to search emails' });
  }
});

app.get('/similar-emails', async (req, res) => {
  try {
    const { text } = req.query;
    const similarEmails = await aiService.findSimilarEmails(text);
    res.json(similarEmails);
  } catch (error) {
    console.error('Similar emails error:', error);
    res.status(500).json({ error: 'Failed to find similar emails' });
  }
});

app.post('/suggest-reply', async (req, res) => {
  try {
    const { email, category } = req.body;
    const suggestedReply = await aiService.generateReply(email, category);
    res.json({ reply: suggestedReply });
  } catch (error) {
    console.error('Reply suggestion error:', error);
    res.status(500).json({ error: 'Failed to generate reply' });
  }
});



// Graceful shutdown
process.on('SIGTERM', () => {
  emailSync.disconnect();
  process.exit(0);
});