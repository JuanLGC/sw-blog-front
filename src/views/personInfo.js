import { Fragment, useEffect, useState, useContext } from 'react';
import '../Styles/personInfo.css';
import { Context } from "../store/appContext";
import { Header } from '../Components/header';
import { NavBar } from '../Components/navbar';
import { useParams, Link } from 'react-router-dom';

export const PersonView = () => {
    const { store } = useContext(Context);
    let params = useParams();
    const [person, setPerson] = useState(store.people[params.id]);

    useEffect(()=>{
        if (person !== store.people[params.id]) {
            setPerson(store.people[params.id]);
            console.log("useEffect")
        }
    }, [store.people])

    return(
        <Fragment>
            <Header />
            <NavBar />
            <div className="person-info-container">
                <div className="person-info-card">
                    {person !== undefined ?
                        <> 
                        <ul className="person-info-list">
                            <li className="person-info-item-list">Name: <b>{person.name}</b></li>
                            <li className="person-info-item-list">Height: <b>{person.height !== 'unknown' ? person.height + "cm": person.height}</b></li>
                            <li className="person-info-item-list">Mass: <b>{person.mass !== 'unknown' ? person.mass + "kg": person.mass}</b></li>
                            <li className="person-info-item-list">Hair color: <b>{person.hair_color}</b></li>
                            <li className="person-info-item-list">Skin color: <b>{person.skin_color}</b></li>
                            <li className="person-info-item-list">Eye color: <b>{person.eye_color}</b></li>
                            <li className="person-info-item-list">Birth year: <b>{person.birth_year}</b></li>
                            <li className="person-info-item-list">Gender: <b>{person.gender}</b></li>
                            <Link to="/">
                                <button className="person-info-button-bh">Back home</button>
                            </Link>
                        </ul>
                        <img alt="prop img" className="person-info-picture" src="https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </>
                     : "Loading..."}
                    
                </div>
            </div>
        </Fragment>
    )
}