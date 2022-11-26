import React from "react";
import MinhaFoto from "../imagem/minhaFoto.jpg";
import './css/Perfil.css'

class Perfil extends React.Component {
  render() {
    return (
      <section className="perfil">
        <h2>Quem sou eu?</h2>
        <img src={MinhaFoto} alt="Minha foto" className="minha-foto" />
        <h4>Vitor Samuel Leonel Nogueira</h4>
        <p>
          Eu tenho 25 anos, sou mineiro e atualmente moro na cidade de Cristiano
          Otoni. Sou estudante de desenvolvimento web full stack na Trybe. Me 
          arrisco na cozinha as vezes, gosto da natureza e sou bem família. Constante aprendiz, fascinado em contribuir para o desenvolvimento de pessoas.
        </p>
      </section>
    );
  }
}

export default Perfil;
