import { useState } from "react";
import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {

const [title, setTitle] = useState("");
const [platform, setplatform] = useState("");
const [genre, setGenre] = useState("");
const [rating, setRating] = useState("");
const [year, setYear] = useState("");
const [price, setPrice] = useState("");

// Tratando a submissão do formulário 
const handleSubmit = async (event) => {
  event.preventDefault();
  // Validação do Formulário (CAMPOS VAZIOS)
  if(title && platform && genre && rating && year && price != ""){
    const game = {
      title: title,
      year: year,
      price: price,
      descriptions: {
        platform: platform,
        genre: genre,
        rating: rating,
      },
    };
    console.log(game)
  } else {
    alert("Por favor, preencha todos os campos.")
  }
}
  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
        />
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Insira o genero do jogo"
          className="inputPrimary"
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
        />
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira a nota do jogo do jogo"
          className="inputPrimary"
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
      <div style={{color: "white"}}>
        {title}<br />
        {year}<br />
        {price}<br />
        {genre}<br />
        {platform}<br />
        {rating}<br />
      </div>
    </div>
  );
};

export default CreateContent;
