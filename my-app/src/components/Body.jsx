import React, { useState } from 'react';
import Header from './Header';
import './css/Body/body.css';
import Modal from './Modal';
import AboutMe from './AboutMe';
import MyKnowledge from './MyKnowledge';

function Body() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);

  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="apresentation">
        <span>[Em construção]</span>
        <h2>Olá, me chamo Filipe, Bem vindo(a) ao meu Portfólio!</h2>
      </section>
      <section className="container-buttons">
        <button
          type="button"
          onClick={() => setIsAboutMeVisible(true)}
          className="buttons"
        >
          Um pouco sobre mim
        </button>
        {isAboutMeVisible && (
          <Modal onClose={() => setIsAboutMeVisible(false)}>
            <AboutMe />
          </Modal>
        )}
        <button
          type="button"
          className="buttons"
          onClick={() => setIsModalVisible(true)}
        >
          Meus conhecimentos
        </button>
        {isModalVisible && (
          <Modal onClose={() => setIsModalVisible(false)}>
            <MyKnowledge />
          </Modal>
        )}
      </section>
    </div>
  );
}

export default Body;
