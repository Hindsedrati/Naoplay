import "./header.scss"
import { useState } from "react"
import LOGO from "../../assets/logo.webp"
import DESKTOP from "../../assets/logodekstop.png"
import USER from "../../assets/user.png"
import { Link } from "react-router-dom";

const Header = () => {

    const [attribut, setAttribut] = useState("false")

    /**
     * Use to set aria value that allow to show/don't show the menu and scroll to the top
     * @param {NavList ariaExpended value} value 
     */
    const ariaExpanded = (value) => {
        if (value === "false") {
            setAttribut("true")
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        } else {
            setAttribut("false")
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    }



    return (
        <header className="header home__header">
            
            <nav className="nav container1">
                
                <Link to="/" className="nav__logo" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>
                    <img className="nav__logo__mobile" src={LOGO} alt="Logo Naoplay" />
                    <img className="nav__logo__desktop" src={DESKTOP} alt="Logo Naoplay" />
                </Link>

                
                   

                <div className="nav__menu">
                <div className="nav__user">
                        <img className="nav__user-image" src={USER} alt="User" />
                    </div>
                    <div className="nav__list" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                        <ul className="nav__list--first">
                            <li>
                                <a href='#apropos' className="nav__item" id="Home" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                    NAOPLAY
                                </a>
                            </li>

                            <li>
                                <a href='#digital' className="nav__item" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                    NOTRE EXPERTISE
                                </a>
                                <ul>
                                    <li >
                                        <a href='#api' className="ecart nav__item" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                            API
                                        </a>
                                    </li>
                                    <li >
                                        <a href='#api' className="ecart nav__item" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                            API Gateway
                                        </a>
                                    </li>
                                    <li >
                                        <a href='#management' className="ecart nav__item" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                            API Management
                                        </a>
                                    </li>
                                    <li >
                                        <a href='#proxi' className="ecart nav__item" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                            PROXISATION
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <a href='#mentorat' className="nav__item" aria-expanded={attribut} onClick={() => ariaExpanded(`${attribut}`)}>
                                    Le mentorat naoplay
                                </a>
                            </li>
                            <Link className="btn" to="/">Nous contacter</Link>
                        </ul>
                        
                        
                        <ul className="nav__list--second">
                            <Link to="/Login" className="nav__item">
                                Connexion
                            </Link>
                            <Link to="/Contact" className="nav__btn">
                                NOUS CONTACTER
                            </Link>
                        </ul>
                    </div>
                    
                    

                    <div className="nav__toggle" aria-expanded={attribut}
                        onClick={() => ariaExpanded(`${attribut}`)}>
                            
                        <span className="bar"></span>
                        <span className="bar bar__second"></span>
                        <span className="bar"></span>
                    </div>
                    
                </div>
            </nav>
                    
        </header>
    )
}
export default Header
