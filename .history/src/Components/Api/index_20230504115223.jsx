import React from 'react'
import './api.scss'
import developer from '../../assets/Developer.png';
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

function Api() {

  const showFirst = () => {
    let contentArticle = document.getElementById('row__content')
    contentArticle.classList.remove("show__second")
    contentArticle.classList.add("show__first")
    console.log("show__first")
  };

  const showSecond = () => {
    let contentArticle = document.getElementById('row__content')
    contentArticle.classList.remove("show__first")
    contentArticle.classList.add("show__second")
    console.log("show__second")
  };

  return (
    <section id='api' className='api'>

      <div className='api__content'>
        <div id='row__content' className='row__content show__first'>
          <div className='row__1'>
            <h2 className='api__title'>LES API ?</h2>
            <article className='first__child'>
              <p>
                Les APIs (pour "Application Programming Interface")ont été introduites il y a plusieurs décennies pour permettre aux développeurs
                de connecter des applications entre elles.
              </p>
            </article>

            <div className="arrow_button">
              <button className="arrow_1" onClick={showSecond}><BiRightArrowAlt /></button>
            </div>

          </div>

          <div className='row__2'>
            <article className='second__child'>
              <p>
                Offrant une plus grande flexibilité et une meilleure collaboration pour les développeurs et les utilisateurs,
                elles jouent aujourd'hui un rôle clef dans la transformation numérique.
              </p>
              <p>
                Avec l'augmentation de l'utilisation des API, les API gateways et les plateformes d'API Management sont devenues incontournables
                pour gérer efficacement les services et données "APIsés", et permettre aux entreprises de maximiser leurs utilisations.
              </p>
            </article>

            <div className="arrow_button">
              <button className="arrow_2" onClick={showFirst}><BiLeftArrowAlt /></button>
            </div>

          </div>
        </div>

        <div className='row__button'>
          <Link to="/Contact" className="api__btn">NOUS CONTACTER</Link>
        </div>

      </div>

      <div className='api__image'>
        <img className='api__image__img' src={developer} alt='developer' />
      </div>





    </section>

  )
}

export default Api
