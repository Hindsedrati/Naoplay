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
    <section className='api__management'>
        
        <div className='api__management__left'>
        <a className='link__left api__management__link' href='/'><img src={panier} className='api__management__logo' alt='panier' />MONÉTISATION</a>
        <a className='link__left api__management__link' href ='/'><img src={user} className='api__management__logo' alt='user' />SUIVI DES UTILISATEURS-CONSOMMATEURS API</a>
        <a className='link__left api__management__link' href ='/'><img src={cadena} className='api__management__logo' alt='cadena' />AUTHENTIFICATIONS</a>
        </div>
          <div className='cercle'></div>
          <h1 className='api__management__title'> API <br /> MANAGEMENT</h1>
          <p className='api__management__vision'>VISION D’ENTREPRISE</p>

        <div className='api__management__right'>
        <a className=' api__management__link' href='/'><img src={cloud} className='api__management__logo' alt='maison' />SERVICES & PLATEFORMES CLOUD</a>
        <a className=' api__management__link' href='/'><img src={bdd} className='api__management__logo' alt='maison' />INFRASTRUCTURES CLOUD</a>
        <a className=' api__management__link' href='/'><img src={maison} className='api__management__logo' alt='maison' />INFRASTRUCTURES APPLICATIONS ON-PREMISE</a>
        </div>

    </section>
  );
}

export default api__management
