import React from "react";
import Header from "./Header";
import "./css/project/projects.css";
import pixelArt from "../images/projects/pixel-art.png";
import licoesAprendidas from "../images/projects/licoes.png";
import trybewarts from "../images/projects/trybewarts.png";
import cartShop from "../images/projects/cartShop.png";

function Projects () {
  return (
    <main>
       <header>
        <Header />
      </header>
      <section>
        <h2>Meus Projetos</h2>
          <div className="panel-container">
            <div className="control-panel">
                <ul>
                    <h3>Pixel art</h3>
                  <li>
                    <a href="https://pixel-art-tan.vercel.app/" target="_blank" rel="noreferrer">
                      <img src={ pixelArt } alt="pagina do pixel art"  className="default-container-image"/>
                    </a>
                  </li>
                </ul>
            </div>
            <div className="control-panel">
                <ul>
                    <h3>Lições Aprendidas</h3>
                  <li>
                    <a href="https://lessons-learned.vercel.app/" target="_blank" rel="noreferrer">
                      <img src={ licoesAprendidas } alt="página de lições aprendidas"  className="default-container-image"/>
                    </a>
                  </li>
                </ul>
            </div>
            <div className="control-panel">
                <ul>
                    <h3>Trybewarts</h3>
                  <li>
                    <a href="https://trybe-warts-khaki.vercel.app/" target="_blank" rel="noreferrer">
                      <img src={ trybewarts } alt="página de lições aprendidas"  className="default-container-image"/>
                    </a>
                  </li>
                </ul>
            </div>
            <div className="control-panel">
                <ul>
                    <h3>Carrinho de compras</h3>
                  <li>
                    <a href="https://carrinho-compras-gamma.vercel.app/" target="_blank" rel="noreferrer">
                      <img src={ cartShop } alt="página de lições aprendidas"  className="default-container-image"/>
                    </a>
                  </li>
                </ul>
            </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;