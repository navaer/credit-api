import express from 'express';
import dotenv from 'dotenv';
import accountsRouter from './routes/accounts.js';
import { swaggerUiMiddleware, swaggerUiHandler, swaggerSpec } from './swagger.js';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Credit API Demo</h1>
    <p>This is a demo REST API built with Node.js, Express, and PostgreSQL.</p>
    <ul>
      <li>📄 <a href="/docs">View API Docs (Swagger)</a></li>
      <li>🔗 <a href="/accounts">/accounts endpoint (GET only)</a></li>
    </ul>
    <p>Use this API to test CRUD operations with a PostgreSQL backend.</p>
  `);
});

app.use('/accounts', accountsRouter);

// Swagger docs at /docs
app.use('/docs', (req, res, next) => {
  // Dynamically set servers based on current request
  swaggerSpec.servers = [
    { url: `${req.protocol}://${req.get('host')}` }
  ];
  swaggerUi.setup(swaggerSpec)(req, res, next);
}, swaggerUi.serve);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

