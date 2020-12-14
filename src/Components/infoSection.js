import { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext";
import { InfoCard } from './infoCard';
import { InfoSectionTitle } from './infoSectionTitle';

export const InfoSection = (props) => {
    const { store } = useContext(Context);
    
    if (props.section === "people"){

        return (
            <Fragment>
                <div className="info-section-container">
                    <InfoSectionTitle title="People"/>
                    <div className="info-section-scrollable-container">
                        {store.people.map((item, index) => {
                            return (
                                <InfoCard key={index} cardTitle={item.name} category="people" id={index} img="https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            )
                        })}
                    </div>                
                </div>
            </Fragment>
        )
    } else if (props.section === "planets") {
        return (
            <Fragment>
                <div className="info-section-container">
                    <InfoSectionTitle title="Planets"/>
                    <div className="info-section-scrollable-container">
                        {store.planets.map((item, index) => {
                            return (
                                <InfoCard key={index} cardTitle={item.name} category="planets" id={index} img="https://holacine.com.ar/wp-content/uploads/2020/06/El-mapa-oficial-de-Star-Wars-ofrece-una-nueva-visi%C3%B3n-de-esta-galaxia-muy-muy-lejana.jpg"/>
                            )
                        })}
                    </div>                
                </div>
            </Fragment>
        )
    }
}

InfoSection.propTypes = {
    section: PropTypes.string,
}