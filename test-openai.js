const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function testOpenAI() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Hello!' }],
      model: 'gpt-3.5-turbo',
    });
    console.log('OpenAI API successful:', completion.choices[0].message.content);
  } catch (err) {
    console.error('OpenAI API error:', err);
  }
}

testOpenAI();