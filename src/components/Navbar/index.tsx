import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-md bg-secondary main-nav">
            <div className="container-fluid text-primary">
                <NavLink to="/" className="nav-logo-text">
                    <h4>Carros Top</h4>
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#jopaulocar-navbar"
                    aria-controls="jopaulocar-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id='jopaulocar-navbar'>
                    <ul className="navbar-nav offset-md-2 ul-style">
                        <li>
                            <NavLink to="/" activeClassName='active' exact>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalogo" activeClassName='active'>CATÁLAGO</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;