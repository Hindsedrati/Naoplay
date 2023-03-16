import React from 'react'
import './const.scss'
import { Link } from "react-router-dom";

function Const ()  {
  return (
    <section className='section'>
        <h1>CONSTRUISONS VOTRE AVENIR,<br/>ENSEMBLE</h1>
        <h2>En tant que société de conseil en technologies d'intégration de services, NAOPLAY travaille sur des projets aussi variés que le choix d'une plateforme d'intégration de services ou son intégration, le développement et le support d'un portail développeurs API, la sécurisation des microservices ou encore le move to cloud.</h2>
        <Link to="/Contact" className="section__btn">NOUS CONTACTER</Link>
    </section>
  )
};

export default Const