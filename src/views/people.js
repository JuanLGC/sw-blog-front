import { Fragment, useContext } from 'react';
import { Header } from '../Components/header';
import { InfoCard } from '../Components/infoCard';
import { NavBar } from '../Components/navbar';
import { Context } from "../store/appContext";
import '../Styles/peopleSection.css';


export const PeopleSection = () => {
    const { store } = useContext(Context);

    return (
        <Fragment>
            <Header />
            <NavBar />
            <div className="full-list">
                {store.people.map((item, index)=>{
                    return (
                        <div className="card-container-list">
                            <InfoCard  key={index} cardTitle={item.name} category="people" id={index} img="https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                    )
                })
                }
            </div>
        </Fragment>
    )
}