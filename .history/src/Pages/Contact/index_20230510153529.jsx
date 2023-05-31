import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_44u8cjr', 'template_inhqe9s', form.current, '8NxIleLNHSlKohwIe')
        .then((result) => {
            console.log(result.text);
            alert("Votre message a été envoyé avec succès !");
        }, (error) => {
            console.log(error.text);
        }
        );
        e.target.reset()
    };

  return (
    <section class="contact-form">
  <div class="container">
    <h2>Contactez-nous</h2>
    <p>Vous avez un projet de transformation digitale ? vous souhaitez échanger avec l’un de nos experts ? ou vous souhaitez voir comment notre mentorat peut booster votre carrière ? (si vous souhaitez nous rejoindre vous pouvez également envoyer votre CV à contact@naoplay.fr</p>
    <form ref={form} onSubmit={sendEmail} class="form-control card flex-center dir-column">
      <input classname = "contact-input" type="text" placeholder="Nom Prénom" name="user_name" required />
      <input classname = "contact-email" type="email" placeholder="Email" name="user_email" required />
      <input classname = "contact-input" type="text" placeholder="Société" name="societe" required />
      <input classname = "contact-input" type="text" placeholder="Sujet" name="subject" required />
      <textarea classname = "contact-input" placeholder="Message" name="message" cols="30" rows="10"></textarea>
      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</section>

  )
}

export default Contact;
