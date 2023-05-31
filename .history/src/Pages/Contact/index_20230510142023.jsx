import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_44u8cjr', 'template_inhqe9s', form.current, 'wjf0yX9MR090F6maL')
        .then((result) => {
            console.log(result.text);
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
    <p>N'hésitez pas à nous contacter pour toute question ou demande d'information.</p>
    <form ref={form} onSubmit={sendEmail} class="form-control card flex-center dir-column">
      <input type="text" placeholder="Full Name" name="user_name" required />
      <input type="email" placeholder="Email" name="user_email" required />
      <input type="text" placeholder="Société" name="societe" required />
      <input type="text" placeholder="Subject" name="subject" required />
      <textarea name="message" cols="30" rows="10"></textarea>
      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</section>

  )
}

export default Contact;