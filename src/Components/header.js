import { Fragment } from 'react';
import '../Styles/header.css';


export const Header = () => {
    return (
        <Fragment>
            <header className="header-container">
                <img
                    className="header-logo-sw"
                    alt="Star Wars logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"/>
            </header>
        </Fragment>
    )
}