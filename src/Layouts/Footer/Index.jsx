import './footer.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
      });
      
      function handleMouseMove(event) {
        setMousePosition({
          left: event.pageX,
          top: event.pageY
        });
      }
    
      
      return (
        <footer className="footer" onMouseMove={handleMouseMove}
        style={{
          backgroundPositionX: `${MousePosition.left}px`,
          backgroundPositionY: `${MousePosition.top}px`
        }}>
            
            <div className="container footer__container">
                <div className="footer__address">
                    <h1>RESTONS CONNECTÉS</h1>
                    <h2>Suivez-nous pour ne pas manquer notre actualité récente</h2>
                    <Link to="/Contact" className="footer__btn">NOUS CONTACTER</Link>
              
                    <div className="footer__icons">
                        <a href="https://www.linkedin.com/company/naoplay/" target="_blank" rel="noreferrer">
                            <RiLinkedinFill />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <BsGithub />
                        </a>
                        <a className='icons__enveloppe' href="mailto:contact@naoplay.fr/" target="_blank" rel="noreferrer">
                            < FaEnvelope/>
                        </a>
                    </div>
                    <div>
                        <a className='footer__mentions' href='/'>Politique de confidentialité</a>
                        <a className='footer__mentions' href='/'>Mentions légales</a>
                    </div>
                </div>
                <div className="footer__contact">
                        <small>&copy; 2023 All Rights Reserved</small>
                        <small>Design & Coded By Naoplay </small>
                </div>
            </div>    
        </footer>
    )
}

export default Footer