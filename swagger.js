// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Art Portfolio API',
    version: '1.0.0',
    description: 'API documentation for the Art Portfolio project',
  },
  servers: [
    {
      url: 'http://localhost:8000',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};


const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // 👈 Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
