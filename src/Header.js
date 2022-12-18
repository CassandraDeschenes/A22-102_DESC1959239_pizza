import { Link} from 'react-router-dom';
import './css/Header.css';

const Header = (props) => {

    return (
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">La Vieille Croute</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <Link className={({ isActive }) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/pizza">Liste Pizza</Link>
                    <Link className={({ isActive }) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/pizza/creer">Créer une pizza</Link>
                    <Link className={({ isActive }) => isActive ? 'mdl-navigation__link is-active' : 'mdl-navigation__link'} to="/commande">Panier</Link>
                    <Link>
                        <img className="iconePanier" src="./images/panier.png" alt="icone_panier" />

                        <aside className="cache">
                            <fieldset>
                                <h2 className='h2Panier'>Items du panier</h2>
                                    <div>
                                        <p className='p-panier'>Le panier est vide!</p>
                                    </div>
                            </fieldset>
                        </aside>
                    </Link>
                </nav>
            </div>
        </header>
    )
};
export default Header;