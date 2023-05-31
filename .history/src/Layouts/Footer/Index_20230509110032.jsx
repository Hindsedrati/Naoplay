import './footer.scss';
import { RiLinkedinFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";


function Footer() {
    return (
        <footer>

            <div class="footer-content">
                <div class="footer-section links">
                    <a href="/">Home</a>
                    <a href="/">Login</a>
                    <a href="/">Contact</a>
                </div>
                
                <div className="footer__icons">
                    <a href="https://www.linkedin.com/company/naoplay/" target="_blank" rel="noreferrer">
                        <RiLinkedinFill />
                    </a>
                    <a href="mailto:contact@naoplay.fr/" target="_blank" rel="noreferrer">
                        < FaEnvelope />
                    </a>
            </div>
            </div>

            <div class="footer-bottom">
                &copy; 2023 MyWebsite.com
            </div>
        </footer>

    )
}

export default Footer