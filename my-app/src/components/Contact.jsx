import React from 'react';
import Header from './Header';

function Contact() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <h2>Meu Contato</h2>
        <ul>
          <li style={{ listStyle: 'none' }}>
            <a
              class="button"
              href="https://www.linkedin.com/in/filipe-c%C3%A2ndido/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li style={{ listStyle: 'none' }}>
            <a
              class="button"
              href="https://github.com/Fedolfo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
