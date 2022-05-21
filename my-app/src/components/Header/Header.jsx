import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import linkedin from '../../assets/images/header/icons8-linkedin-circundado.svg';
import github from '../../assets/images/header/icons8-github.svg';

function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <a
            className="button"
            href="https://www.linkedin.com/in/filipe-c%C3%A2ndido/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <Link to="/">Sobre mim</Link>
        </li>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <a
            className="button"
            href="https://github.com/Fedolfo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
