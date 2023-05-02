import React from 'react'
import './api_m.scss'
import panier from '../../assets/panier.png'
import user from '../../assets/user.png'
import cadena from '../../assets/cadena.png'
import cloud from '../../assets/cloud.webp'
import bdd from '../../assets/bdd.webp'
import maison from '../../assets/maison.png'
function api__management() {
  /*const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return null; // Si l'appareil est un mobile, on retourne null pour ne rien afficher
  }*/

  return (
    <div className='api__management'>

      <div className='api__management__left'>

        <a className='api__management__link' href='/'>
          <span>MONÉTISATION</span>
          <div className='api__management__logo'>
            <img src={panier} alt='panier' />
          </div>
        </a>

        <a className='api__management__link' href='/'>
          <span>SUIVI DES UTILISATEURS-CONSOMMATEURS API</span>
          <div className='api__management__logo'>
            <img src={user} alt='user' />
          </div>
        </a>

        <a className='api__management__link' href='/'>
          <span>AUTHENTIFICATIONS</span>
          <div className='api__management__logo'>
            <img src={cadena} alt='cadena' />
          </div>
        </a>

      </div>

      <div className='api__management__center'>
        <h2 className='api__management__title'> API <br /> MANAGEMENT</h2>
        <h2 className='api__management__title'> VISION DE L'ENTREPRISE</h2>
        <div className='cercle'></div>
      </div>


      <div className='api__management__right'>

        <a className=' api__management__link' href='/'>
          <div className='api__management__logo'>
            <img src={cloud} alt='PLATEFORMES CLOUD' />
          </div>
          <span>SERVICES & PLATEFORMES CLOUD</span>
        </a>

        <a className='api__management__link' href='/'>
          <div className='api__management__logo'>
            <img src={bdd} alt='cloud' />
          </div>
          <span>INFRASTRUCTURES CLOUD</span>
        </a>

        <a className='api__management__link' href='/'>
          <div className='api__management__logo'>
            <img src={maison} alt='application' />
          </div>
          <span>INFRASTRUCTURES APPLICATIONS ON-PREMISE</span>
        </a>

      </div>

    </div>

  );
}

export default api__management
