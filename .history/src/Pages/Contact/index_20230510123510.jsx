import React from 'react'
import './Contact.scss'

function contact () {
  return (
    <section>
        <div className="container">
          <h2 className= "--text-center">Contactez-nous</h2>
          <p> Vous avez un projet de transformation digitale ? vous souhaitez échanger avec l’un de nos experts ? ou vous souhaitez voir comment notre mentorat peut booster votre carrière ? (si vous souhaitez nous rejoindre vous pouvez également envoyer votre CV à contact@naoplay.fr</p>
          <form className= "--formm-control --card" >
              <input type="text" placeholder= 'Full Name' name= 'user_name' required/>
              <input type="email" placeholder= 'Email' name= 'user_email' required/>
              <input type="text" placeholder="Société" name="societe" required />
              <input type="text" placeholder= 'Subject' name= 'subject' required/>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button type= "submit" className= "--btn --btn-primary">Envoyer</button>


          </form>
        </div>
    </section>
  )
}

export default contact;