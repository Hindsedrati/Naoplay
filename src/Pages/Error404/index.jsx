import './Error.scss';
import thinking from '../../assets/Thinking.png';
import { Link } from "react-router-dom";

function Error404() {
  const handleRedirect = () => {
    // Rediriger vers le début de la page d'accueil ("/")
    window.location.href = "/";
  };

  return (
    <main className='error'>
      <div className='partiegauche'>
        <img className='officiel' src={thinking} alt="" />
      </div>
      <div className="partiedroite">
        <img className='pc' src={thinking} alt="" />
        <h1 className='error__title'>OUPS, 404</h1>
        <p className='texte'>Vous n’êtes pas autorisé à consulter cette page. Cette page n’est pas disponible.</p>
        <Link to="/" className="error__btn" onClick={handleRedirect}>RETOUR</Link>
      </div>
    </main>
  )
}

export default Error404;
