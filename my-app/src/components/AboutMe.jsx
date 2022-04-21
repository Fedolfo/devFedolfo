import React from 'react';
import './css/Body/aboutMe.css';

const AboutMe = () => {
  return (
    <article className="container-about-me">
      <div className="container-text">
        <p>
          É um prazer conhecê-lo(s), me chamo Filipe Cândido e sou <strong>Desenvolvedor Web Júnior. </strong>
          Sou uma pessoa apaixonado desde a minha infância e adolescência com a computação,
          onde me divertia e me divirto até hoje jogando com os meu melhores amigos virtuais
          como o League of Legends, Valorant e o Counter Strike.
        </p>
        <p>
          É agora a computação faz parte de um novo <strong>caminho</strong> pra mim que é seguir <strong>carreira</strong> na área de desenvolvimento web.
          E nesse caminho tenho sempre um objetivo, <strong>aprender</strong> e desenvolver novas habilidades,
          sempre procurando novas tecnologias e novas ferramentas para melhorar minhas habilidades.
        </p>
        <p>
          Atualmente estou cursando o curso da <a href="https://www.betrybe.com/"><strong>Trybe</strong></a> que aborda fundamentos de
          desenvolvimento web, desenvolvimento, <strong>Front-end, Back-end</strong>, ciência da
          computação, engenharia de software, metodologias ágeis e habilidades
          comportamentais.
        </p>
        <p>
          É esse portfolio foi feito para você pode ver algumas das minhas
          <strong> habilidades</strong> e <strong>experiências</strong> que venho adquirindo.
        </p>
      </div>
    </article>
  );
};

export default AboutMe;