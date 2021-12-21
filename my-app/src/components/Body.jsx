import React, { useState } from "react";
import Header from "./Header";
import './css/Body/body.css';
import Modal from "./Modal";
import AboutMe from "./AboutMe";
import MyKnowledge from "./MyKnowledge";

function Body() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false)
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="apresentation">
        <h2>Olá, me chamo Filipe, Bem vindo(a) ao meu Portfólio!</h2>
      </section>
      <section className="container-buttons">
        <button
          type="button"
          onClick={() => setIsModalVisible(true)}
          className="buttons">
            Um pouco sobre mim
        </button>
        {isModalVisible
          && <Modal onClose={() => setIsModalVisible(false)}>
            <AboutMe />
        </Modal>}

        <button
          type="button"
          className="buttons"
          onClick={() => setIsModalVisibleTwo(true)}>
            Meus conhecimentos
        </button>
        {isModalVisibleTwo
          && <Modal onClose={() => setIsModalVisibleTwo(false)}>
            <MyKnowledge />
        </Modal>}

      </section>
    </div>
  );
}

export default Body;