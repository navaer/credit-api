// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Credit Account API',
      version: '1.0.0',
      description: 'REST API to manage credit accounts',
    },
    servers: [
      {
        url: 'https://credit-api-rmvv.onrender.com', // Replace with your Render URL after deployment
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs in your routes
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerUiMiddleware = swaggerUi.serve;
export const swaggerUiHandler = swaggerUi.setup(swaggerSpec);

