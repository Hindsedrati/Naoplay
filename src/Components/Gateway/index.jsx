import React from 'react'
import './gateway.scss'

function Gateway () {
  return (
    <section  className='Gateway'>
            
            <article className='partone article1 Gateway__content'>
                <div className='Gateway__content__child'>
                <p >SÉCURITÉ RÉSEAU</p>
                    <p>POLICES DE SÉCURITÉ </p>
                    <p>AUTHENTIFICATION</p>
                    <p>AUTORISATIONS</p>
                    <p>ANNUAIRES</p>
                    
                </div>
            </article>
            <article className='article2'>
            
                <div className='parttwo Gateway__content__child'>
                    <p className='G1'>INFRASTRUCTURES CLOUD</p>
                    <p className='G2'>SERVICES SAAS/PAAS</p>
                    
                    <p className='G3'>INTERNET</p>
                    <h1 className='Gateway__title'>API <br/> GATEWAY </h1>
                    <p className='G4'>UTILISATEURS INTERNES</p>
                    <p className='G5'> INFRASTRUCTURES ON-PREMISE</p>
                </div>
            </article>
        </section>
    )
}

export default Gateway
