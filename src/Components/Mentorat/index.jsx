import React from 'react'
import './mentorat.scss'
import blanc from '../../assets/blanc.webp';
import jaune from '../../assets/jaune.webp';
import orange from '../../assets/orange.webp';
import vert from '../../assets/vert.webp';



function Mentorat () {
  return (
    <section className='mentorat'>
        <h1 className='mentorat__title'>LE MENTORAT NAOPLAY</h1>
        <article className='mentorat__content'>
            <div className='mentorat__content__child'>
                <img src={blanc} alt='blanc' />
                <img src={jaune} alt='jaune' />
                <img src={orange} alt='orange' />
                <img src={vert} alt='vert' />
            </div>
        </article>
        <article>
            <div className='mentorat__content__child'>
                <h2>Le mentorat Naoplay poursuit différents objectifs:</h2>
                <p>que nos consultant•e•s soient exposé•e•s à l'ensemble de l'écosystème API et pas uniquement « super experts » de la solution utilisée chez leur client </p>
                <p>que nos consultant•e•s soient accompagné•e•s dans leurs missions</p>
                <p>une certification interne récompense les consultants au cours de leurs programme et leur permet de mettre en avant facilement leurs compétences</p>
            </div>
        </article>
    </section>
  )
}

export default Mentorat