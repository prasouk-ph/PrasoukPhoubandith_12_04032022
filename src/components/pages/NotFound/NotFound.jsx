import { Link } from 'react-router-dom';
import './NotFound.css';

/**
 * Create a component
 * @returns { HTMLElement }
 */
function NotFound() {
    return (
        <div className='notfound'>
            <p>Erreur 404</p>
            <p>La page est introuvable !</p>
            <Link to='/' className='link'>Retour à la page d'accueil</Link>
        </div>
    );
}

export default NotFound;