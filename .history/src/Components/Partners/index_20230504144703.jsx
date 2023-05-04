import React from 'react';
import './partners.scss';
import Gravitoo from '../../assets/gravitoo.png';
import Salt from '../../assets/salt.png';
import Wib from '../../assets/wib.png';
import GSP from '../../assets/GSP.png';
import Apiida from '../../assets/apiida.png';
import Traefiklab from '../../assets/traefiklabs.png';
import Aws from '../../assets/aws.png';
import Microsoft from '../../assets/microsoft.png';
import Kong from '../../assets/kong.png';
import Apiable from '../../assets/apiable.png';
import Postman from '../../assets/postman.png';
import Softwareag from '../../assets/softwareag.png';



function Partners() {
  return (
    <section id='partenaires' className='partners'>

      <div className='partners__content'>
        <h3>Environnements techniques et partenaires</h3>
      </div>

      <div className='partners__image'>

        <div className='partners__icons'>
          <img src={GSP} alt='GSP'></img>
          <img src={Aws} alt='aws'></img>
          <img src={Microsoft} alt='microsoft'></img>
          <img src={Postman} alt='postman'></img>
          <img src={Gravitoo} alt='gravitoo'></img>
          <img src={Kong} alt='Kong'></img>
          <img src={Softwareag} alt='SWG'></img>
          <img src={Apiable} alt='APB'></img>
          <img src={Apiida} alt='apiida'></img>
          <img src={Salt} alt='salt'></img>
          <img src={Wib} alt='wib'></img>
          <img src={Traefiklab} alt='traefiklab'></img>
          
        </div>

      </div>

    </section>
  )
}

export default Partners