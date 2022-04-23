import React from 'react';
import Header from './Header';
import './css/Contact/contact.css';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container-contact">
        <h2>Contato</h2>
        <form
          action="https://formsubmit.co/dev-filipe@hotmail.com"
          method="POST"
          class="form"
        >
          <input type="hidden" name="_captcha" value="false"></input>
          <label htmlFor="name">
            Nome
            <input type="text" name="name" id="name" required />
          </label>
          <label htmlFor="email">
            E-mail
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea
              name="message"
              id="contact"
              cols="30"
              rows="10"
              placeholder="Digite aqui sua mensagem"
              required
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
