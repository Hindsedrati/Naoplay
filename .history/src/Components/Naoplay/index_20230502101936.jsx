import React, { useState } from 'react'
import './naoplay.scss'
import { Link } from "react-router-dom";
import image from '../../assets/VR.png';
//import { BiRightArrowAlt } from 'react-icons/bi';
//import { BiLeftArrowAlt } from 'react-icons/bi';
import Partners from '../../Components/Partners/index';


function Naoplay() {


    const [ButtonStyle, setStyle] = useState("naoplay__button__default");

    const changeStyle = () => {
        let buttoClass = document.getElementById('naoplay__toggler').classList
        let naoplayContent = document.getElementById('naoplay__content')

        if(buttoClass.contains("naoplay__button__default") || buttoClass.contains("naoplay__button__next")) {
            setStyle("naoplay__button__prev");
            naoplayContent.classList.remove("show__first")
            naoplayContent.classList.add("show__second")

        }else {
            setStyle("naoplay__button__next");
            naoplayContent.classList.remove("show__second")
            naoplayContent.classList.add("show__first")
        }
    };
    
    return (
        <div className='naoplay-container '>
            <section id='apropos' className='naoplay main-container'>

                <div className='naoplay__intro'>
                    <h2 className='naoplay__title'>NAOPLAY</h2>
                    <Link to="/Contact" className="naoplay__btn">NOUS CONTACTER</Link>
                </div>

                <div className='naoplay__image'>
                    <img src={image} alt='VR' />
                </div>

                <div id='naoplay__content' className='naoplay__content show__first'>

                    <article className='first__child'>
                        <p className='naoplay__soustitres'>
                            Naoplay est une entreprise de services numériques née en 2011 et spécialisée sur les projets digitaux, avec une expertise particulière
                            sur les stratégies d’API Management et leurs implémentations. Forte de son expérience sur les infrastructures multi-plateformes
                            et les API les liant, acquise aussi bien dans la réalisation de jeux vidéo que dans le cadre de chantiers d’urbanisation SI
                            de grands groupes, Naoplay propose ses services aux entreprises désireuses de moderniser leur SI pour promouvoir l’innovation.
                        </p>
                    </article>

                    <article className='second__child'>
                        <p className='naoplay__txt'>
                            Depuis ses origines, Naoplay est profondément attachée à ses valeurs de mentorat et d'indépendance.Ses consultants bénéficient à la fois
                            de programmes de formation guidés les aidant à atteindre le niveau d'expertise visé, mais aussi d'un mentorat personnalisé pour développer
                            leurs savoir-être et leurs confiance en soi.
                        </p>
                    </article>

                    <a href="#p2" id='naoplay__toggler' className={"naoplay__button " + ButtonStyle} onClick={changeStyle}><BiRightArrowAlt /></a>

                </div >

            </section >

            <Partners />
        </div >
    )
}

export default Naoplay