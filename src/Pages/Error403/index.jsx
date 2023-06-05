import './Error403.scss';
import Douanier from '../../assets/Douanier.png';
import { Link } from "react-router-dom";

function Error() {
  const handleRedirect = () => {
    // Rediriger vers le début de la page d'accueil ("/")
    window.location.href = "/";
  };

  return (
    <main className='error1'>
      <div className='firstpart'>
        <img className='desktop' src={Douanier} alt="" />
      </div>
      
      <div className='secondpart'>
        <h1>ERREUR 403</h1>
        <p>Vous n’êtes pas autorisé•e à consulter cette page. Vérifiez vos droits auprès de l’administrateur.</p>
        <img className='mobile' src={Douanier} alt="" />
        <Link to="/" className="error1__bouton" onClick={handleRedirect}>RETOUR</Link>
      </div>
    </main>
  )
}

export default Error;
