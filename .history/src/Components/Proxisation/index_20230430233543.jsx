import React, { useState } from 'react'
import './proxi.scss'
import diagramme from '../../assets/diagramme.jpg'
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

function Proxisation() {

  const openDiagramme = () => {
    let diagramme = document.getElementById('diagramme')
    diagramme.classList.remove("closed")
    diagramme.classList.add("opened")
  };

  const closeDiagramme = () => {
    let diagramme = document.getElementById('diagramme')
    diagramme.classList.remove("opened")
    diagramme.classList.add("closed")
  };

  return (
    <section id="proxi" className='proxi'>
      <h2 className='proxi__title'>L'URBANISATION<br /> PAR LA "PROXISATION"</h2>

      <div className='proxi__content'>
        <p className='proxi__txt'>Dans l'urbanisation du Système d'Information, les API jouent un rôle clef puisqu'elles permettent de générer la couche d'abstraction entre les différents domaines métiers</p>
        <p className='proxi__txt'>Une proxisation réfléchie consiste à partager en un seul point tous les services et toutes les données d'une entité métier</p>
      </div>

      <div className="proxi__button">
        <button className="arrow_button button__next" onClick={openDiagramme}><BiRightArrowAlt /></button>
      </div>

      <div id='diagramme' className="proxi__diagramme closed">
        <button className="arrow_button button__prev" onClick={closeDiagramme}><BiLeftArrowAlt /></button>
        <img src={diagramme} alt="diagramme" />
      </div>

    </section>
  )
}

export default Proxisation
