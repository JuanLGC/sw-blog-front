import { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../Styles/infoSection.css';


export const InfoSectionTitle = (props) => {
    return (
        <Fragment>
            <h2 className="info-section-title">{props.title}</h2>
        </Fragment>
    )
}

InfoSectionTitle.propTypes = {
    title: PropTypes.string,
}