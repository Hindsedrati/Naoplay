import React from 'react'
import './gateway.scss'

function Gateway() {
    return (
        <section id="gateway" className='Gateway'>

            <div className='partone Gateway__content'>
                <div className='Gateway__content__child'>
                    <p >SÉCURITÉ RÉSEAU</p>
                    <p>POLICES DE SÉCURITÉ </p>
                    <p>AUTHENTIFICATION</p>
                    <p>AUTORISATIONS</p>
                    <p>ANNUAIRES</p>

                </div>
            </div>

            <div className='parttwo Gateway__content__child'>
                <h2 className='Gateway__title'>API <br /> GATEWAY </h2>

                <div className='Gateway__items'>
                    <p className='G1'>INFRASTRUCTURES CLOUD</p>
                    <p className='G2'>SERVICES SAAS/PAAS</p>
                    <p className='G3'>INTERNET</p>
                    <p className='G4'>UTILISATEURS INTERNES</p>
                    <p className='G5'> INFRASTRUCTURES ON-PREMISE</p>
                </div>
            </div>

        </section>
    )
}

export default Gateway
