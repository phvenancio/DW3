// Importações
import express from "express";
const timeRoutes = express.Router();
import timeController from "../controllers/timeController.js";

// Endpoint para listar todos os times
timeRoutes.get("/times", timeController.getAllTimes);

// Endpoint para cadastrar um time
timeRoutes.post("/times", timeController.createTime);

// Endpoint para excluir um time
timeRoutes.delete("/times/:id", timeController.deleteTime);

// Endpoint para alterar um time
timeRoutes.put("/times/:id", timeController.updateTime);

// Endpoint para listar um único time
timeRoutes.get("/times/:id", timeController.getOneTime)

export default timeRoutes;
