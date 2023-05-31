import './footer.scss';
import { RiLinkedinFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section links">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
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
