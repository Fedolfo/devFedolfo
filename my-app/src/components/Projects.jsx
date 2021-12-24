import React from "react";
import Header from "./Header";
import "./css/project/projects.css";
import pixelArt from "../images/projects/pixel-art.png";

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
                <h3>Pixel Art</h3>
                  <li>
                    <a href="https://pixel-art-tan.vercel.app/" target="_blank" rel="noreferrer">
                      <img src={ pixelArt } alt="pagina do pixel art"  className="default-container-image"/>
                    </a>
                  </li>
                </ul>
            </div>
            <div className="control-panel">
                <ul>
                <h3>Pixel Art</h3>
                  <li>
                    <a href="https://pixel-art-tan.vercel.app/" target="_blank" rel="noreferrer">
                      <img src={ pixelArt } alt="pagina do pixel art"  className="default-container-image"/>
                    </a>
                  </li>
                </ul>
            </div>
            {/* <ul>
              <li>Venus</li>
              <li>Earth</li>
              <li>Mars</li>
            </ul> */}
        </div>
      </section>
    </main>
  );
}

export default Projects;