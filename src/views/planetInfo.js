import { Fragment, useEffect, useState, useContext } from 'react';
import '../Styles/planetInfo.css';
import { Context } from "../store/appContext";
import { Header } from '../Components/header';
import { NavBar } from '../Components/navbar';
import { useParams, Link } from 'react-router-dom';

export const PlanetView = () => {
    const { store } = useContext(Context);
    let params = useParams();
    const [planet, setPlanet] = useState(store.planets[params.id]);

    useEffect(()=>{
        if (planet !== store.planets[params.id]) {
            setPlanet(store.planets[params.id]);
        }
    }, [store.planets])

    return(
        <Fragment>
            <Header />
            <NavBar />
            <div className="person-info-container">
                <div className="person-info-card">
                    {planet !== undefined ?
                        <> 
                        <ul className="planet-info-list">
                            <li className="planet-info-item-list">Name: <b>{planet.name}</b></li>
                            <li className="planet-info-item-list">Rotation period: <b>{planet.rotation_period}</b></li>
                            <li className="planet-info-item-list">Diameter: <b>{planet.diameter}</b></li>
                            <li className="planet-info-item-list">Climate <b>{planet.climate}</b></li>
                            <li className="planet-info-item-list">Gravity: <b>{planet.gravity}</b></li>
                            <li className="planet-info-item-list">Terrain: <b>{planet.terrain}</b></li>
                            <li className="planet-info-item-list">Surface water: <b>{planet.surface_water}</b></li>
                            <li className="planet-info-item-list">Population: <b>{planet.population}</b></li>
                            <Link to="/">
                                <button className="planet-info-button-bh">Back home</button>
                            </Link>
                        </ul>
                        <img alt="prop-img" className="planet-info-picture" src="https://holacine.com.ar/wp-content/uploads/2020/06/El-mapa-oficial-de-Star-Wars-ofrece-una-nueva-visi%C3%B3n-de-esta-galaxia-muy-muy-lejana.jpg" />
                        </>
                     : "Loading..."}
                    
                </div>
            </div>
        </Fragment>
    )
}