import './footer.scss';
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const handleRedirectHome = () => {
    // Rediriger vers le début de la page d'accueil ("/")
    window.location.href = "/";
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section links">
          <Link to="/" onClick={handleRedirectHome}>Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div className="footer__icons">
          <a href="https://www.linkedin.com/company/naoplay/" target="_blank" rel="noreferrer">
            <RiLinkedinFill />
          </a>
          <a href="https://www.facebook.com/Naoplay" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <small className='footer-rights'>&copy; Naoplay, 2023 all rights reserved</small>
      </div>

      <div className="footer-legal">
        <a href='/'>Mentions légales</a>
      </div>
    </footer>
  );
}

export default Footer;
