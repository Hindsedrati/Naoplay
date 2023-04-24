import React from 'react'
import './proxi.scss'
import diagramme from '../../assets/diagramme.jpg'
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

function Proxisation() {
  return (
    <section id="proxi" className='proxi'>
      <h1 className='proxi__title'>L'URBANISATION<br /> PAR LA <br /> "PROXISATION"</h1>
      
      <a href="/" className="arrow_1"><BiRightArrowAlt /></a>

      <div className='proxi__content'>
        <article className='proxi__textes'>
        <p className='proxi__txt'>Dans l'urbanisation du Système d'Information, les API jouent un rôle clef puisqu'elles permettent de générer la couche d'abstraction entre les différents domaines métiers</p>
        <p className='proxi__txt'>Une proxisation réfléchie consiste à partager en un seul point tous les services et toutes les données d'une entité métier</p>
        </article>
      <article>
        <img id='' src={diagramme} className='proxi__diagramme' alt='diagramme'/>
        <a href="/" className="arrow_2"><BiLeftArrowAlt /></a>
      </article>
      </div>
    </section>
  )
}

export default Proxisation
