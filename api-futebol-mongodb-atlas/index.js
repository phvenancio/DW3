// Importações
import express from "express";
import mongoose from "./config/db-connection.js";
import Time from "./models/Time.js";
const app = express();

// Importando as rotas (endpoints)
import timeRoutes from "./routes/timeRoutes.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", timeRoutes);

// Rota Principal
app.get("/", timeRoutes);

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});

