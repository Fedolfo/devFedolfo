import React, { useState } from 'react';
import './css/project/projects.css';
import Header from './Header';
import Panels from './Panels';
// import pixelArt from '../images/projects/pixel-art.png';
// import licoesAprendidas from '../images/projects/licoes.png';
// import trybewarts from '../images/projects/trybewarts.png';
// import cartShop from '../images/projects/cartShop.png';
// import trivia from '../images/projects/trivia.png';
import movieCrud from '../images/projects/moviecrud.png';
import recipesAppFoodPanel from '../images/projects/recipesAppFoodPanel.png';
import appRecipesFood from '../images/projects/app-recipes-food.png';
import movieCrudPanel from '../images/projects/movieCrudPanel.png';
import Modal from './Modal';
import ContentPanel from './ContentPanel';

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

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
                description="Desenvolvido um Aplicativo de Movie Card Crud em que podemos buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e bebidas."
                urlDeploy="https://movie-card-library-crud-liart.vercel.app/"
                urlGithub="https://github.com/Fedolfo/movie-card-library-crud"
              />
            </Modal>
          )}
          {/*
           <Panels
            title="Trivia Redux"
            url="https://trivia-redux-roan.vercel.app/"
            photo={trivia}
            descriptionPhoto="página trivia redux"
          /> */}
          {/* <Panels
            title="Lições Aprendidas"
            url="https://lessons-learned.vercel.app/"
            photo={licoesAprendidas}
            descriptionPhoto="página de lições aprendidas"
          />
          <Panels
            title="Trybewarts"
            url="https://trybe-warts-khaki.vercel.app/"
            photo={trybewarts}
            descriptionPhoto="página de trybewarts"
          />
          <Panels
            title="Carrinho de compras"
            url="https://carrinho-compras-gamma.vercel.app/"
            photo={cartShop}
            descriptionPhoto="página de carrinho de compras"
          />
          <Panels
            title="App de Receitas"
            url="https://recipes-app-blue.vercel.app/ "
            photo={recipe}
            descriptionPhoto="página recipes app"
          /> */}
        </div>
      </section>
    </main>
  );
}

export default Projects;
