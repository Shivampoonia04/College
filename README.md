# Email Aggregator

![Architecture Diagram](./docs/architecture.png)

## Project Overview
Centralized email aggregation system with AI-powered processing for sales teams. Built with Node.js, Elasticsearch, and OpenAI integrations.

## Key Features
- Multi-account IMAP synchronization
- AI-powered email categorization
- Sentiment analysis & reply suggestions
- Elasticsearch indexing
- REST API endpoints

## Development Setup
```bash
# Clone repository
git clone https://github.com/Shivampoonia04/email-aggregator.git

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
```

## Environment Variables
```ini
EMAIL=your@email.com
EMAIL_PASSWORD=app_password
IMAP_HOST=imap.example.com
IMAP_PORT=993
OPENAI_API_KEY=sk-your-key
ELASTICSEARCH_URL=http://localhost:9200
```

## Deployment
```bash
# Start Elasticsearch
docker-compose up -d elasticsearch

# Run application
npm start

# Run development mode
npm run dev
```

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/emails` | GET | Retrieve paginated emails |
| `/similar-emails` | GET | Find semantically similar emails |
| `/suggest-reply` | POST | Generate AI-powered email reply |

## License
MIT Licensed. See [LICENSE](LICENSE) for details.