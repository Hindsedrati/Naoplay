// Import des styles Sass
import './Contact.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Contact() {
  // Déclaration des états pour chaque champ de formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [message, setMessage] = useState('');

  // Fonction de gestionnaire d'événements pour la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire via une requête HTTP, puis afficher le message de confirmation

  };
  
  return (
    <section id="contact" className='contact'>

      <div className='contact__content'>
        <article id='p1' className='contact__content__child'>

          <p>Vous avez un projet de transformation digitale ? vous souhaitez échanger avec l’un de nos experts ? ou vous souhaitez voir comment notre mentorat peut booster votre carrière ? (si vous souhaitez nous rejoindre vous pouvez également envoyer votre CV à contact@naoplay.fr</p>

        </article>

        <article id='p2' className='contact__mobile contact__content__child'>

          <form onSubmit={handleSubmit}>

            <div className='contact__mobile__box'>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
              <label htmlFor="name"></label>

              <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Société" />
              <label htmlFor="company"></label>

              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" />
              <label htmlFor="phone"></label>

              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mail" />
              <label htmlFor="email"></label>

              <input className='contact__message' type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message"></input>
              <label htmlFor="message"></label>

              <button href = "/*" className='contact__btn' type="submit">Envoyer</button>
            </div>

          </form>

        </article>

        <form className='contact__desktop__form' onSubmit={handleSubmit}>
          <div className='contact__desktop'>

            <div className='contact_desktop_box'>
              <div className='name__message'>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom complet*" />
                <label htmlFor="name"></label>
              </div>

              <div className='row'>
                <div className='col-50'>
                  <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Société" />
                  <label htmlFor="company"></label>
                </div>
                <div className='col-50'>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail*" />
                  <label htmlFor="email"></label>
                </div>
              </div>

              <div className='row'>
                <div className='col-50'>
                  <input type="text" id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="Profil LinkedIn" />
                  <label htmlFor="linkedin"></label>
                </div>
                <div className='col-50'>
                  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" />
                  <label htmlFor="phone"></label>
                </div>
              </div>

              <input className='name__message' type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message*"></input>
              <label htmlFor="message"></label>
            </div>
          </div>

          <button href= '/Error403' className='contact__btn' type="submit">Envoyer</button>
        </form>

      </div>

    </section >
  );
}

export default Contact
