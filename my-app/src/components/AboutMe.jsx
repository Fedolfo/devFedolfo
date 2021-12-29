import React from 'react';
import './css/Body/aboutMe.css';
import filipe from '../images/filipe.jpeg';

const AboutMe = () => {
  return (
    <article className="container-about-me">
        <img
          src={ filipe }
          alt="Foto do filipe"
          width="200px"
          className="photo-perfil"
        />
      <div className="container-text">
        <p>É um prazer conhecê-lo(s), me chamo Filipe Cândido estudo na
          <a href="https://www.betrybe.com/"><strong> Trybe</strong></a> a 6 meses
          onde estou abordando sobre estudos de fundamentos de
          desenvolvimento web, desenvolvimento, <strong>Front-end, Back-end,</strong> ciência da
          computação, engenharia de software, <strong> metodologias ágeis e habilidades
          comportamentais.</strong>
        </p>
        <p>Moro em Minas Gerais, na cidade de Vespasiano e
          minha idade é de 20 anos.
        </p>
        <p>Sintam-se a vontade em dar uma olhada no meu portfólio!</p>
      </div>
    </article>
  );
};

export default AboutMe;