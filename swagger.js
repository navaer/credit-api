// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Credit API',
      version: '1.0.0',
      description: 'A demo REST API to test CRUD operations for credit accounts.',
    },
    // Do not include servers here; it will be added dynamically at runtime
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Adjust this path as needed
};

export const swaggerSpec = swaggerJsdoc(options);
