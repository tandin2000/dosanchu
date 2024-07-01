import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { ThemeColor } from '../../Layout/style';

const OrderComp = ({ text, image }) => {
    return (
        <div className="card-component-order">
            <div className="inner-card">
                <div className="top-left-corner">{text}</div>
                <div className="bottom-left-text">Order Now</div>
                <div className="image-container">
                    <img src={image} alt="Order" />
                </div>
            </div>
        </div>
    );
};

OrderComp.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default OrderComp;
