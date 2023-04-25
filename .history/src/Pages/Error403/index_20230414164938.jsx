import './Error403.scss';
import Douanier from '../../assets/Douanier.png';
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className='error1'>
      <img className='desktop' src={ Douanier } alt="" />
      <div>
      <h1>ERREUR 403</h1>
      <p>Vous n’êtes pas autorisé•e à consulter cette page. Vérifiez vos droits auprès de l’administrateur.</p>
      <img className='mobile' src={ Douanier } alt="" />
      <Link to="/" className="error1__bouton">ACCUEIL</Link>
      </div>
    </main>
  )
}

export default Error;