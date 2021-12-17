import React from "react";
import Header from "./Header";
import './css/Body/body.css';


function Body () {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="apresentation">
        <h2>Olá, me chamo Filipe, Bem vindo(a) ao meu Portfólio!</h2>
      </section>
      <section className="buttons">
        <button type="button">
          Um pouco sobre mim
        </button>
        <button type="button">
          Meus conhecimentos
        </button>
      </section>
    </div>
  );
}

export default Body;