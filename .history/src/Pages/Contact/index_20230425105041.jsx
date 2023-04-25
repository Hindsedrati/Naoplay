// Import des styles Sass
import './Contact.scss';
import { useState } from 'react';


function Contact() {
  // Déclaration des états pour chaque champ de formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
    <form className='contact__content__child' onSubmit={handleSubmit}>
    
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom"/>
    <label htmlFor="name"></label>
    
    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone"/>
    <label htmlFor="phone"></label>
    
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mail"/>
    <label htmlFor="email"></label>
    
    <input className='contact__message' type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message"></input>
    <label htmlFor="message"></label>
    
    <button className='contact__btn' type="submit">Envoyer</button>
    </form>

    </article>
    <article id='p2' className='contact__desktop'>
    <form className='contact__content__child' onSubmit={handleSubmit}>
    
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom complet*"/>
    <label htmlFor="name"></label>
    
    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone"/>
    <label htmlFor="phone"></label>
    
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail*"/>
    <label htmlFor="email"></label>
    
    <input className='contact__message' type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message*"></input>
    <label htmlFor="message"></label>
    
    <button className='contact__btn' type="submit">Envoyer</button>
    </form>

    </article>

    </div>

    </section>
    );
  }
  
  export default Contact
