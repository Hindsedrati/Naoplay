import React from 'react'
import './naoplay.scss'
import image from '../../assets/VR.png';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';


function Naoplay () {
  return (
    <section id='apropos' className='naoplay'>
      <div className='naoplay__intro'>
        <h1 className='naoplay__title'>
          NAOPLAY
        </h1>
        <img className='naoplay__image' src={image} alt='VR' />
      </div>

      <div className='naoplay__content'>
      
        <article id='p1' className='naoplay__content__child'>
        <a href="#p2" className="arrow_1"><BiRightArrowAlt /></a>
          <h3 className='naoplay__soustitres'>Naoplay est une entreprise de services numériques née en 2011 et spécialisée sur les projets digitaux, avec une expertise particulière sur les stratégies d’API Management et leurs implémentations. Forte de son expérience sur les infrastructures multi-plateformes et les API les liant, acquise aussi bien dans la réalisation de jeux vidéo que dans le cadre de chantiers d’urbanisation SI de grands groupes, Naoplay propose ses services aux entreprises désireuses de moderniser leur SI pour promouvoir l’innovation.</h3>
        </article>
        <article id='p2' className='naoplay__content__child'>
        <a href="#p1" className="arrow_2"><BiLeftArrowAlt /></a>
          <p className='naoplay__txt'>Depuis ses origines, Naoplay est profondément attachée à ses valeurs de mentorat et d'indépendance.Ses consultants bénéficient à la fois de programmes de formation guidés les aidant à atteindre le niveau d'expertise visé, mais aussi d'un mentorat personnalisé pour développer leurs savoir-être et leurs confiance en soi.</p>
        </article>
      
      </div>
      
    </section>
  )
}

export default Naoplay