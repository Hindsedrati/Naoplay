import React from 'react'
import './mentorat.scss'
import blanc from '../../assets/blanc.webp';
import jaune from '../../assets/jaune.webp';
import orange from '../../assets/orange.webp';
import vert from '../../assets/vert.webp';

function Mentorat() {
    return (

        <section id='mentorat' className='mentorat'>

            <div className='first'>
                <h2 className='mentorat__title__mobile'>Le Montorat NAOPLAY</h2>

                <div className='first__content__child'>
                    <img src={blanc} alt='blanc' />
                    <img src={jaune} alt='jaune' />
                    <img src={orange} alt='orange' />
                    <img src={vert} alt='vert' />
                </div>
            </div>

            <article className='second'>
                <div className='second__content__child'>
                    <h2>Le Montorat NAOPLAY</h2>
                    <h3>Le mentorat Naoplay poursuit différents objectifs:</h3>
                    <p>- que nos consultant•e•s soient exposé•e•s à l'ensemble de l'écosystème API et pas uniquement « super experts » de la solution utilisée chez leur client </p>
                    <p>- que nos consultant•e•s soient accompagné•e•s dans leurs missions</p>
                    <p>- une certification interne récompense les consultants au cours de leurs programme et leur permet de mettre en avant facilement leurs compétences</p>
                </div>
            </article>

        </section>
    )
}

export default Mentorat