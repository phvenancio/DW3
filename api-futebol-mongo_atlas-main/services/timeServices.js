import Time from "../models/Time.js";

class timeService {
  async getAll() {
    try {
      const times = await Time.find();
      return times;
    } catch (error) {
      console.log(error);
    }
  }
    
  // Função para cadastrar times
  async Create(logo, nome, descricao, pais, campeonato, estadio, camisa, tecnico, titulares) {
    try {
      const newTime = new Time({
        logo,
        descricao,
        nome, 
        pais, 
        campeonato, 
        estadio, 
        camisa,
        tecnico, 
        titulares
      });
      await newTime.save();
    } catch (error) {
      console.log(error);
    }
  }
    
  // Função para deletar times
  async Delete(id) {
    try {
      await Time.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`);
    } catch (error) {
      console, log(error);
    }
  }
    
  // Função para alterar times
  async Update(id, logo, nome, descricao, pais, campeonato, estadio, camisa, tecnico, titulares) {
    try {
      await timeService.findByIdAndUpdate(id, {
        logo,
        nome, 
        descricao,
        pais, 
        campeonato, 
        estadio, 
        camisa,
        tecnico, 
        titulares
      });
      console.log(`Dados do game com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
    
  // Função para listar um único time
  async getOne(id) {
    try {
      const time = await Time.findOne({ _id: id });
      return time;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new timeService();