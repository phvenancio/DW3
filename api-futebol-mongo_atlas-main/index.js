// Importações
import express from "express";
import mongoose from "./config/db-connection.js";
import Time from "./models/Time.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./config/swagger-config.js";
const app = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Importando as rotas (endpoints)
import timeRoutes from "./routes/timeRoutes.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", timeRoutes);

// Rota Principal
app.get("/", timeRoutes);

// Rota para documentação do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
