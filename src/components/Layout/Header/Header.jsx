import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div>
                <img className='header-logo' src={logo} alt="logo" />
            </div>

            <nav className='main-menu'>
                <Link to="/">Accueil</Link>
                <Link to="/">Profil</Link>
                <Link to="/">Réglage</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </div>
    );
}

export default Header;
