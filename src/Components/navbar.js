import { Fragment } from 'react';
import '../Styles/navbar.css';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar-container">
                <Link to="/" className="navbar-section-button">Home</Link>
                <Link to="/people" className="navbar-section-button">People</Link>     
                <Link to="/planets" className="navbar-section-button">Planets</Link>
                <Link to="/forum" className="navbar-section-button">Forum</Link>
            </nav>
        </Fragment>
    );
} 