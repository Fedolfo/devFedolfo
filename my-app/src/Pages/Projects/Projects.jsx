import React, { useState } from 'react';
import './projects.css';
import Header from '../../components/Header/Header';
import futebolClub from '../../assets/images/projects/futebolClub.png';
import futebolClubPanel from '../../assets/images/projects/futebolClubPainel.png';
import movieCrud from '../../assets/images/projects/moviecrud.png';
import recipesAppFoodPanel from '../../assets/images/projects/recipesAppFoodPanel.png';
import appRecipesFood from '../../assets/images/projects/app-recipes-food.png';
import movieCrudPanel from '../../assets/images/projects/movieCrudPanel.png';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import Panels from '../../components/Panels/Panels';
import Modal from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h2>Meus Projetos</h2>
        <div className="panel-container">
          <Panels
            title="App de Receitas"
            photo={recipesAppFoodPanel}
            descriptionPhoto="App de Receitas"
            onClick={() => setIsModalVisible(true)}
          />
          {isModalVisible && (
            <Modal onClose={() => setIsModalVisible(false)}>
              <ContentPanel
                title="App de Receitas"
                photo={appRecipesFood}
                descriptionPhoto="página recipes app"
                description="Desenvolvido um Aplicativo de Receitas em que podemos buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e bebidas."
                urlDeploy="https://recipes-app-blue.vercel.app/"
                urlGithub="https://github.com/Fedolfo/recipes-app"
              />
            </Modal>
          )}
          <Panels
            title="Movie Card Crud"
            photo={movieCrudPanel}
            descriptionPhoto="Movie Card Crud"
            onClick={() => setIsModalVisible2(true)}
          />
          {isModalVisible2 && (
            <Modal onClose={() => setIsModalVisible2(false)}>
              <ContentPanel
                title="Movie Card Crud"
                url="https://movie-card-library-crud-liart.vercel.app/"
                photo={movieCrud}
                descriptionPhoto="página de Movie Card Crud"
                description="Desenvolvido um Aplicativo de Movie Card Crud em que podemos criar novos filmes, ver detalhes sobre o filme, editar, excluir."
                urlDeploy="https://movie-card-library-crud-liart.vercel.app/"
                urlGithub="https://github.com/Fedolfo/movie-card-library-crud"
              />
            </Modal>
          )}
          <Panels
            title="Futebol Club"
            photo={futebolClubPanel}
            descriptionPhoto="Futebol Club"
            onClick={() => setIsModalVisible3(true)}
          />
          {isModalVisible3 && (
            <Modal onClose={() => setIsModalVisible3(false)}>
              <ContentPanel
                title="Futebol Club"
                photo={futebolClub}
                descriptionPhoto="Futebol Club"
                description="Desenvolvido uma API consumindo um banco de dados, utilizando principios SOLID e arquitetura MSC com TypeScript, POO e dockerização(dockerfile, docker-compose). Utilizando modelagem de dados através do Sequelize, onde tem a finalidade de ser consumida por um front-end, já construído pelo time da trybe nesse projeto."
                urlDeploy=""
                urlGithub="https://github.com/Fedolfo/Trybe-futebol-clube"
              />
            </Modal>
          )}
        </div>
        <Footer />
      </section>
    </main>
  );
}

export default Projects;
