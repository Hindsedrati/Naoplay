import React from 'react'
import './Contact.scss'

function contact () {
  return (
    <section class="contact-form">
  <div class="container">
    <h2>Contactez-nous</h2>
    <p>N'hésitez pas à nous contacter pour toute question ou demande d'information.</p>
    <form class="form-control card flex-center dir-column">
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

export default contact;