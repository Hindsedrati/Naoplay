import './Error.scss';
import thinking from '../../assets/Thinking.png';
import { Link } from "react-router-dom";

function Error404() {
  return (
    <main className='error'>
      <div className='partiegauche'>
        <img className='desktop' src={ thinking} alt="" />
      </div>
      <div className="partiedroite">
        <img src={ thinking } alt="" />
        <h1>OUPS, 404</h1>
        <p>Vous n’êtes pas autorisé à consulter cette page. Cette page n’est pas disponible.</p>
        <Link to="/" className="error__btn">ACCUEIL</Link>
      </div>
      
    </main>
  )
}

export default Error404;
