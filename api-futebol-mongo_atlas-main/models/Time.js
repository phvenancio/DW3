import mongoose from "mongoose";

const titularSchema = new mongoose.Schema({
  nomeJogador: String,
  numeroJogador: Number
});

const camisa = new mongoose.Schema({
  camisaGoleiro: String,
  camisaLinha: String
});

const tecnico = new mongoose.Schema({
  fotoTecnico: String,
  nomeTecnico: String
});

const timeSchema = new mongoose.Schema({
  logo: String,
  nome: String,
  descricao: String,
  pais: String,
  campeonato: String,
  estadio: String,
  tecnico: [tecnico],
  camisa: [camisa],
  titulares: [titularSchema]
});

const Time = mongoose.model("Time", timeSchema);

export default Time;
