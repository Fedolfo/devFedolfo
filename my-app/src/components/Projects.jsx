import React from "react";
import "./css/project/projects.css";
import Header from "./Header";
import Panels from "./Panels";
import pixelArt from "../images/projects/pixel-art.png";
import licoesAprendidas from "../images/projects/licoes.png";
import trybewarts from "../images/projects/trybewarts.png";
import cartShop from "../images/projects/cartShop.png";
import movieCrud from "../images/projects/moviecrud.png";
import trivia from "../images/projects/trivia.png";

function Projects () {
  return (
    <main>
       <header>
        <Header />
      </header>
      <section>
        <h2>Meus Projetos</h2>
          <div className="panel-container">
            <Panels
              title="Pixel art"
              url="https://pixel-art-tan.vercel.app/"
              photo={ pixelArt }
              descriptionPhoto="pagina do pixel art"
            />
            <Panels
              title="Lições Aprendidas"
              url="https://lessons-learned.vercel.app/"
              photo={ licoesAprendidas }
              descriptionPhoto="página de lições aprendidas"
            />
            <Panels
              title="Trybewarts"
              url="https://trybe-warts-khaki.vercel.app/"
              photo={ trybewarts }
              descriptionPhoto="página de trybewarts"
            />
            <Panels
              title="Carrinho de compras"
              url="https://carrinho-compras-gamma.vercel.app/"
              photo={ cartShop }
              descriptionPhoto="página de carrinho de compras"
            />
            <Panels
              title="Movie Card Crud"
              url="https://movie-card-library-crud-liart.vercel.app/"
              photo={ movieCrud }
              descriptionPhoto="página de movie crud"
            />
            <Panels
              title="Trivia Redux"
              url="https://trivia-redux-roan.vercel.app/"
              photo={ trivia }
              descriptionPhoto="página trivia redux"
            />
        </div>
      </section>
    </main>
  );
}

export default Projects;