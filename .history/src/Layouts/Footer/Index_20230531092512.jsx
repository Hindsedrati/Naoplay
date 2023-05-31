import './footer.scss';
import { RiLinkedinFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section links">
          <a href="/">Home</a>
          <a href="../../Pages/Login">Login</a>
          <a href="../../Pages/Contact">Contact</a>
        </div>

        <div className="footer__icons">
          <a c href="https://www.linkedin.com/company/naoplay/" target="_blank" rel="noreferrer">
            <RiLinkedinFill />
          </a>
          <a  href="mailto:contact@naoplay.fr/" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <small>&copy; 2023 All Rights Reserved.</small>
        <small>Design & Coded BY Naoplay </small>
      </div>

      <div className="footer-legal">
        <a href='/'>Politique de confidentialité</a>
        <a href='/'>Mentions légales</a>
      </div>
    </footer>
  );
}

export default Footer;
