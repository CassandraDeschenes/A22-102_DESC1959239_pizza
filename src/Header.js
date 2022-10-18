import {NavLink} from 'react-router-dom';
import './css/Header.css';

const Header = (props) => (
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">La Vieille Croute</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
                <NavLink className={({isActive}) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/" end>Accueil</NavLink>
                <NavLink className={({isActive}) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/login">Connexion</NavLink>
                <NavLink className={({isActive}) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/listePizza">Liste Pizza</NavLink>
                <NavLink className={({isActive}) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/creer">Créer une pizza</NavLink>
                <NavLink className={({isActive}) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/commande">Panier</NavLink>
            </nav>
        </div>
    </header>
);
export default Header;