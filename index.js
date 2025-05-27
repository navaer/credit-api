// index.js
import express from 'express';
import dotenv from 'dotenv';
import accountsRouter from './routes/accounts.js';
import { swaggerSpec } from './swagger.js';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

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

// Swagger documentation with dynamic server URL
app.use('/docs', (req, res, next) => {
  swaggerSpec.servers = [
    { url: `${req.protocol}://${req.get('host')}` }
  ];
  swaggerUi.setup(swaggerSpec)(req, res, next);
}, swaggerUi.serve);

// Accounts API routes (protected by Bearer token inside the router)
app.use('/accounts', accountsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
