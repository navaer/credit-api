import express from 'express';
import dotenv from 'dotenv';
import accountsRouter from './routes/accounts.js';
import { swaggerUiMiddleware, swaggerUiHandler } from './swagger.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/accounts', accountsRouter);

// Swagger docs at /docs
app.use('/docs', swaggerUiMiddleware, swaggerUiHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

