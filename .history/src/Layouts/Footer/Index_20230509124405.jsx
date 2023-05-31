import './footer.scss';
import { RiLinkedinFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section links">
          <a href="/">Home</a>
          <a href="/">Login</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer__icons">
          <a className="footer__icons" href="https://www.linkedin.com/company/naoplay/" target="_blank" rel="noreferrer">
            <RiLinkedinFill />
          </a>
          <a className="footer__icons" href="mailto:contact@naoplay.fr/" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div >
        <small className="footer-bottom" >&copy; 2023 All Rights Reserved.</small>
        <small className="footer-bottom" >Design & Coded BY Naoplay </small>
      

     
        <a className="footer-legal" href='/'>Politique de confidentialité</a>
        <a className="footer-legal" href='/'>Mentions légales</a>
      </div>
    </footer>
  );
}

export default Footer;
