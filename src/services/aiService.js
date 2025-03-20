const { OpenAI }

const { OpenAI } = require('openai');
const axios = require('axios');

class AIService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    this.vectorStore = [];
  async categorizeEmail(emailContent) {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'system',
          content: 'Classify this email into one category: \
            Urgent, Important, Newsletter, Social, Promotions, Spam. \
            Respond ONLY with the category name.'
        }

, {
          role: 'user',
          content: emailContent
        }

],
        temperature: 0.2
      });
      
      return response.choices[0].message.content.trim();
    }

 catch (error) {
      console.error('AI categorization failed:', error);
      return 'Uncategorized';
    }


  }



  async notifyViaSlack(category, email) {
    try {
      await axios.post(process.env.SLACK_WEBHOOK_URL, {
        text: `New ${category}

 email: ${email.subject}

\nFrom: ${email.from}

\nPreview: ${email.text.slice(0,100)}

...`
      });
    }

 catch (error) {
      console.error('Slack notification failed:', error);
    }


  }


}



  async getEmbedding(text) {
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: text
    });
    return response.data[0].embedding;
  }



  // Removed duplicate categorizeEmail method
    const prompt = `Categorize this email into one of: Interested, Meeting Booked, Not Interested, Spam, Out of Office\n\nEmail: ${email.subject}

\n${email.text}

`;
    
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompt
      }

],
      temperature: 0.2
    });
    
    const category = response.choices[0].message.content.trim();
    await this.triggerNotifications(category, email);
    return category;
  }



  async triggerNotifications(category, email) {
    const notifyCategories = ['Interested', 'Meeting Booked', 'Urgent'];
    
    if (notifyCategories.includes(category)) {
      await this.notifyViaSlack(category, email);
      await this.sendToWebhook(category, email);
    }


  }



  async sendToWebhook(category, email) {
    if (!process.env.WEBHOOK_URL) return;
    
    try {
      await axios.post(process.env.WEBHOOK_URL, {
        event: 'new_email',
        category,
        subject: email.subject,
        from: email.from,
        preview: email.text.slice(0, 140)
      });
    }

 catch (error) {
      console.error('Webhook notification failed:', error);
    }


  }



  async suggestReply(email) {
    const prompt = `Generate a professional and concise reply to the following email:\n\nEmail Subject: ${email.subject}

\nEmail Body: ${email.text}

`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompt
      }

],
      temperature: 0.7,
    });

    return response.choices[0].message.content.trim();
  }



  async addEmailToVectorStore(email, id) {
    const text = `${email.subject}

\n${email.text}

`;
    const embedding = await this.getEmbedding(text);
    this.vectorStore.push({ id, embedding, email }

);
  }



  async findSimilarEmails(email, k = 5) {
    const text = `${email.subject}

\n${email.text}

`;
    const queryEmbedding = await this.getEmbedding(text);
    
    // Calculate cosine similarity with all stored embeddings
    const similarities = this.vectorStore.map(item => ({
      id: item.id,
      email: item.email,
      similarity: this.cosineSimilarity(queryEmbedding, item.embedding)
    }

));

    // Sort by similarity and return top k results
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, k);
  }



  cosineSimilarity(a, b) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (normA * normB);
  }



  async analyzeEmailSentiment(email) {
    const prompt = `Analyze the sentiment and tone of the following email. Provide a brief analysis:\n\nEmail Subject: ${email.subject}

\nEmail Body: ${email.text}

`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompt
      }

],
      temperature: 0.3,
    });

    return response.choices[0].message.content.trim();
  }



  async generateReply(email, category) {
    if (category !== 'Interested') return null;

    const prompt = `Generate a professional reply for this email. The person is interested in our services.\n\nOriginal Email: ${email.text}

`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompt
      }

],
      temperature: 0.7,
    });

    return response.choices[0].message.content.trim();
  }



  async storeEmailVector(email, category) {
    const embedding = await this.getEmbedding(email.text);
    const metadata = {
      subject: email.subject,
      category,
      date: email.date,
    }

;

    this.vectorStore.push({
      id: this.vectorStore.length,
      embedding,
      metadata
    });
  }


}