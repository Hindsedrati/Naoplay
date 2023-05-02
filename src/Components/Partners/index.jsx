import React from 'react';
import './partners.scss';
import Gravitoo from '../../assets/gravitoo.png';
import Apiida from '../../assets/apiida.png';
import Apigee from '../../assets/apigee.png';
import Traefiklab from '../../assets/traefiklabs.png';
import Aws from '../../assets/aws.png';
import Microsoft from '../../assets/microsoft.png';
import Apiable from '../../assets/apiable.png';
import Postman from '../../assets/postman.png';
import Wib from '../../assets/wib.png';



function Partners() {
  return (
    <section id='partenaires' className='partners'>

      <div className='partners__content'>
        <h3>Environnements techniques et partenaires</h3>
      </div>

      <div className='partners__image'>

        <div className='partners__icons'>
          <img src={Apiida} alt='apiida'></img>
          <img src={Apigee} alt='apigee'></img>
          <img src={Traefiklab} alt='traefiklab'></img>
          <img src={Gravitoo} alt='gravitoo'></img>
          <img src={Aws} alt='aws'></img>
          <img src={Microsoft} alt='microsoft'></img>
          <img src={Postman} alt='postman'></img>
          <img src={Apiable} alt='apiable'></img>
          <img src={Wib} alt='wib'></img>
        </div>

      </div>

    </section>
  )
}

export default Partners