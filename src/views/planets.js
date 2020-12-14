import { Fragment, useContext } from 'react';
import { Header } from '../Components/header';
import { InfoCard } from '../Components/infoCard';
import { NavBar } from '../Components/navbar';
import { Context } from "../store/appContext";
import '../Styles/peopleSection.css';


export const PlanetsSection = () => {
    const { store } = useContext(Context);

    return (
        <Fragment>
            <Header />
            <NavBar />
            <div className="full-list">
                {store.planets.map((item, index)=>{
                    return (
                        <div className="card-container-list">
                            <InfoCard  key={index} cardTitle={item.name} category="people" id={index} img="https://holacine.com.ar/wp-content/uploads/2020/06/El-mapa-oficial-de-Star-Wars-ofrece-una-nueva-visi%C3%B3n-de-esta-galaxia-muy-muy-lejana.jpg" />
                        </div>
                    )
                })
                }
            </div>
        </Fragment>
    )
}