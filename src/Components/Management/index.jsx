import React from 'react';
import './management.scss';

function Management() {
  return (
    <section className='management'>
      <h1 className='management__title'>
          API<br /> MANAGEMENT
        </h1>
      <div className='management__content'>
        <article className='management__content__child'>
          <p>L'API Management est la tour de contrôle au-dessus de vos API Gateways</p>
          <p>C'est là où sont gérés les utilisateurs, les facturation et les données d'utilisation des services "APIsés".</p>
        </article>

        <article className='management__content__child'>    
            <p>Il offre également une sécurité accrue pour partager vos données et fonctionnalités en toute confiance avec des partenaires et des développeurs tiers.</p>
            <p>Faites passer votre entreprise à l'étape suivante avec l'API management.</p>
        </article>
      </div>
    </section>
  );
}

export default Management;
