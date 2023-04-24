import React from 'react'
import './api.scss'
import developer from '../../assets/Developer.png';
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

function Api() {
  return (
    <section id='api' className='api'>
      <h1 className='api__title'>
        LES API ?
      </h1>
      <div className='api__image'>
        <img className='api__image__img' src={developer} alt='developer' />
      </div>
      
      <div className='api__content'>
        <article id='p3' className='api__content__child'>
          <a href="#p4" className="arrow_1"><BiRightArrowAlt /></a>
          <p>Les APIs (pour "Application Programming Interface")ont été introuduites il y a plusieurs décennies pour permettre aux développeurs de connecter des applications entre elles.</p>
        </article>
        <article id='p4' className='api__content__child'>
          <a href="#p3" className="arrow_2"><BiLeftArrowAlt /></a>
          <p>Offrant une plus grande flexibilité et une meilleure collaboration pour les développeurs et les utilisateurs, elles jouent aujourd'hui un rôle clef dans la transformation numérique.</p>
          <p>Avec l'augmentation de l'utilisation des API, les API gateways et les plateformes d'API Management sont devenues incontournables pour gérer efficacement les services et données "APIsés", et permettre aux entreprises de maximiser leurs utilisations</p>
        </article>
      </div>

      <Link to="/Contact" className="api__btn">NOUS CONTACTER</Link>
      
    </section>
    
  )
}

export default Api
