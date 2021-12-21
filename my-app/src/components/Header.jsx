import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header/header.css';

function Header() {
  return (
    <nav className='header'>
      <ul>
          <li>
            <Link to="/">Sobre mim</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
      </ul>
    </nav>
  );
}

export default Header;