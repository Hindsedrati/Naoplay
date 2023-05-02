import './footer.scss';
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg--image"></div>

            <div className="footer__elements container">
                <div className="footer__titles">
                    <h1 className='footer__title'>Restons<br /> connectés</h1>
                    <h2 className='footer__soustitre'>Suivez-nous pour ne pas manquer notre actualité récente</h2>
                </div>
                <div className="footer__links">
                    <a href='/' className='footer__links__top'>Back to Top</a>
                    <Link to="/Contact" className="footer__btn">NOUS CONTACTER</Link>
                    <p>NAOPLAY SAS</p>
                    <p>13 rue de la Trémoille, 75008 Paris</p>


                    <div className="footer__icons">
                        <a href="https://www.linkedin.com/company/naoplay/" target="_blank" rel="noreferrer">
                            <RiLinkedinFill />
                        </a>
                        <a href="mailto:contact@naoplay.fr/" target="_blank" rel="noreferrer">
                            < FaEnvelope />
                        </a>
                    </div>

                </div>
            </div>

            <div className='informations'>
                <div className='mentions'>
                    <a className='footer__mentions' href='/'>Politique de confidentialité</a>
                    <a className='footer__mentions' href='/'>Mentions légales</a>
                </div>
                <div className="footer__copyright">
                    <small>&copy; 2023 All Rights Reserved.</small>
                    <small>Design & Coded BY Naoplay </small>
                </div>
            </div>


        </footer>
    )
}

export default Footer