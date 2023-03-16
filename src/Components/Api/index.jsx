import React from 'react'
import './api.scss'
import { Link } from "react-router-dom";

function Api ()  {
  return (
    <section className='api'>
        <h1 className='api__title'>
          LES API ?
        </h1>
      <div className='api__content'>
          <article className='api__content__child'>
              <p >Les APIs (pour "Application Programming Interface")ont été introuduites il y a plusieurs décennies pour oermettre aux développeurs de connecter des applications entre elles.</p>
          </article>
          <article className='api__content__child'>
            <p>Offrant une plus grande flexibilité et une meilleure collaboration pour les développeurs et les utilisateurs, elles jouent aujourd'hui un rôle clef dans la transformation numérique.</p>
            <p>Avec l'augmentation de l'utilisation des API, les API gateways et les plateformes d'API Management sont devenus incontournables pour gérer efficacement les service et données "APIsés", et permettre aux entreprises de maximiser leurs utilisations</p>
          </article>  
      </div>
        <Link to="/Contact" className="footer__btn">NOUS CONTACTER</Link>
    
    </section>
  )
}

export default Api