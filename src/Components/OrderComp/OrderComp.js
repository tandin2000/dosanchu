import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const OrderComp = ({ text, image, link, btnInfo }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-component-order">
            <div className="inner-card">
                <div className="top-left-corner">{text}</div>
                <div className="bottom-left-text">{btnInfo}</div>
                <div className="image-container">
                    <img src={image} alt="Order" />
                </div>
            </div>
        </a>
    );
};

OrderComp.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    btnInfo: PropTypes.string.isRequired,
};

export default OrderComp;
