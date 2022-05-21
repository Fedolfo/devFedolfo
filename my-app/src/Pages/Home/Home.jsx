import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './home.css';
import AboutMe from '../../components/AboutMe/AboutMe';
import Modal from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import MyKnowledge from '../../components/MyKnowledge/MyKnowledge';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);

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
      <Footer />
    </div>
  );
}

export default Home;
