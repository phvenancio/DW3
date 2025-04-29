// Importações 
import timeService from "../services/timeServices.js";
import { ObjectId } from "mongodb";

// Função para listar os times
const getAllTimes = async (req, res) => {
  try {
    const times = await timeService.getAll();
    res.status(200).json({ times: times });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar times
const createTime = async (req, res) => {
  try {
    const { nome, pais, campeonato, estadio, tecnico, titulares } = req.body;
    await timeService.Create(nome, pais, campeonato, estadio, tecnico, titulares);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para deletar times
const deleteTime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      timeService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para alterar um time
const updateTime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { nome, pais, campeonato, estadio, tecnico, titulares } = req.body;
      timeService.Update(id, nome, pais, campeonato, estadio, tecnico, titulares);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para buscar um único time
const getOneTime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const time = await timeService.getOne(id);
      if (!time) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ time });
      }
    } else {
      res.sendStatus(400) 
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { getAllTimes, createTime, deleteTime, updateTime, getOneTime };
