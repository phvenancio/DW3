import mongoose from "mongoose";

const titularSchema = new mongoose.Schema({
  nome: String,
  numero: Number
});

const timeSchema = new mongoose.Schema({
  nome: String,
  pais: String,
  campeonato: String,
  estadio: String,
  tecnico: String,
  titulares: [titularSchema]
});

const Time = mongoose.model("Time", timeSchema);

export default Time;
