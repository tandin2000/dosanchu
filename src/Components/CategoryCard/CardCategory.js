import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CardCategory = ({ text, image, props }) => {
    return (
        <div className="card-component" style={{ backgroundImage: `url(${image})` }}>
            <div className="inner-card" onClick={() => props.setComponent('Menu')}>
                <div className="top-left-corner"></div>
                <div className="bottom-left-text">{text}</div>
            </div>
        </div>
    );
};

CardCategory.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default CardCategory;
