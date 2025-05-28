// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiAccountsRouter from './routes/api/accounts.js';
import accountsRouter from './routes/accounts.js';
import { swaggerSpec } from './swagger.js';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.set('trust proxy', true); // 👈 Add this line


// Middleware
app.use(cors());               // Optional: allows cross-origin API testing
app.use(express.json());       // Parses incoming JSON requests

// Welcome page
app.get('/', (req, res) => {
  res.send(`
    <h1>Credit API Demo</h1>
    <p>This is a demo REST API built with Node.js, Express, and PostgreSQL.</p>
    <ul>
      <li>📄 <a href="/docs">View API Docs (Swagger)</a></li>
      <li>🔗 <a href="/accounts">/accounts endpoint (GET with token)</a></li>
    </ul>
    <p>Use this API to test CRUD operations with Bearer Token and PostgreSQL.</p>
  `);
});

// Swagger docs with dynamic server URL injection
app.use('/docs', swaggerUi.serve, (req, res) => {
  swaggerSpec.servers = [
    { url: `${req.protocol}://${req.get('host')}/api` },
  ];
  swaggerUi.setup(swaggerSpec)(req, res);
});

// Protected API routes
app.use('/api/accounts', apiAccountsRouter);

// Protected API routes
app.use('/accounts', accountsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
