import React, { useState } from 'react';
import './management.scss';
import ApiManagement from '../../Components/ApiManagement/index';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';

function Management() {
  const [arrowDirection, setArrowDirection] = useState('right');

  return (
    <section id="management" className='management'>

      <h1 className='management__title'>
        API<br /> Management
      </h1>

      <div className='management__content'>
        
        <article id='p5' className='management__content__child'>
          {arrowDirection === 'right' ? (
            <button className="arrow_1" onClick={() => setArrowDirection(arrowDirection === 'right' ? 'left' : 'right')}>
              <BiRightArrowAlt />
            </button>
          ) : (
            <button className="arrow_1" onClick={() => setArrowDirection(arrowDirection === 'left' ? 'right' : 'left')}>
              <BiLeftArrowAlt />
            </button>
          )}
          <p>L'API Management est la tour de contrôle au-dessus de vos API Gateways</p>
          <p>C'est là où sont gérés les utilisateurs, les facturations et les données d'utilisation des services "APIsés".</p>
        </article>

        <article id='p6' className='management__content__child'>
          {arrowDirection === 'right' ? (
            <button className="arrow_2" onClick={() => setArrowDirection(arrowDirection === 'right' ? 'left' : 'right')}>
              <BiRightArrowAlt />
            </button>
          ) : (
            <button className="arrow_2" onClick={() => setArrowDirection(arrowDirection === 'left' ? 'right' : 'left')}>
              <BiLeftArrowAlt />
            </button>
          )}
          <p>Il offre également une sécurité accrue pour partager vos données et fonctionnalités en toute confiance avec des partenaires et des développeurs tiers.</p>
          <p>Faites passer votre entreprise à l'étape suivante avec l'API management.</p>
        </article>

      </div>


      <ApiManagement />
    </section>
  )
}




export default Management;