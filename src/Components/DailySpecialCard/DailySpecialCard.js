import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DailySpecialCard = ({ text, image, price, day }) => {
    return (
        <div className="card-component-daily-special" style={{ backgroundImage: `url(${image})` }}>
            <div className="inner-card">
                <div className="top-left-corner"> ${price} </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignContent:'center'}}>
                <div className="day">{day}</div>
                <div className="text">{text}</div>
                </div>
            </div>
        </div>
    );
};

DailySpecialCard.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default DailySpecialCard;
