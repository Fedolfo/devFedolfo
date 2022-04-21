import React, { useState } from "react";
import "./css/project/projects.css";
import Header from "./Header";
import Panels from "./Panels";
import pixelArt from "../images/projects/pixel-art.png";
import licoesAprendidas from "../images/projects/licoes.png";
import trybewarts from "../images/projects/trybewarts.png";
import cartShop from "../images/projects/cartShop.png";
import movieCrud from "../images/projects/moviecrud.png";
import trivia from "../images/projects/trivia.png";
import recipe from "../images/projects/recipe.png";
import Modal from "./Modal";
import ContentPanel from "./ContentPanel";

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h2>Meus Projetos</h2>
        <div className="panel-container">
          <Panels
            title="Lições Aprendidas"
            photo={licoesAprendidas}
            descriptionPhoto="conteúdo de lições aprendidas"
            onClick={() => setIsModalVisible(true)}
          />
          {isModalVisible
            && (
              <Modal onClose={() => setIsModalVisible(false)}>
                <ContentPanel
                  title="Lições Aprendidas"
                  photo={licoesAprendidas}
                  descriptionPhoto="página de lições aprendidas"
                  description="Aqui você encontra todas as lições aprendidas durante o curso Full Stack Developer"
                  urlDeploy="https://lessons-learned.vercel.app/"
                  urlGithub="https://lessons-learned.vercel.app/"
                />
              </Modal>
            )}
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
            title="Movie Card Crud"
            url="https://movie-card-library-crud-liart.vercel.app/"
            photo={movieCrud}
            descriptionPhoto="página de movie crud"
          />
          <Panels
            title="Trivia Redux"
            url="https://trivia-redux-roan.vercel.app/"
            photo={trivia}
            descriptionPhoto="página trivia redux"
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