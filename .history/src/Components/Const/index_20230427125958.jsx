import React from 'react'
import './const.scss'
import { Link } from "react-router-dom";

function Const() {
  return (
    <section id='apropos' className='home'>
      <div className="home__container">
        <h1 className='home__title'>CONSTRUISONS VOTRE AVENIR,<br />ENSEMBLE</h1>
        <h1 className='home__title__mobile'>CONSTRUISONS VOTRE AVENIR,<br />ENSEMBLE</h1>
        <h2>Société de conseil en technologies d'intégration de services, NAOPLAY intervient sur des projets aussi variés que le choix d'une plateforme d'intégration de services ou son intégration, le développement et le support d'un portail développeurs API, la sécurisation des microservices ou encore le move to cloud.</h2>
        <Link to="/Contact" className="home__btn">NOUS CONTACTER</Link>
      </div>
    </section>
  )
};

export default Const