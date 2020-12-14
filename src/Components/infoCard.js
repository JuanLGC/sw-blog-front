import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Fragment } from 'react';
import { CardLearnMoreButton } from './card-learn-more-button';

export const InfoCard = (props) => {
    return (
        <Fragment>
            <div className="info-card-container">
                <div className="info-card-img">
                    <img alt="card-img" className="card-image" src={props.img}/>
                </div>
                <div className="info-card-body-title">
                    <h3 className="info-card-body-title-text">{props.cardTitle}</h3>
                </div>
                <div className="info-card-body-button">
                    <Link to={"/"+ props.category + "/" + props.id}>
                        <CardLearnMoreButton /> 
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

InfoCard.propTypes = {
    cardTitle: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    img: PropTypes
}