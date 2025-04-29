const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API de Futebol",
        description: "API para cadastro de times",
        version: "1.0.0",
        contact: {
          name: "Pedro Venâncio e Ricardo",
        },
        servers: [{ url: "http://localhost:4000" }],
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT", 
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./routes/timeRoutes.js", "./docs/swaggerDocs.yaml"], 
  };
  
  export default swaggerOptions;