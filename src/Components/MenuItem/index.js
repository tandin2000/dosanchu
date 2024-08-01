import React from 'react';
import './style.scss';

export default function MenuItem({ image, title, description, price, onClick }) {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            {/* <div className='menu-item-wrapper' onClick={onClick}>
                <div className='menu-item-image'>
                    <img src={image} alt={title} />
                </div>
                <div className='menu-item-content-wrapper'>
                    <div className='menu-item-content'>
                        <span className='menu-item-title'>{title}</span> <br />
                        <span className='menu-item-description'>{description}</span>
                    </div>
                    <p className='item-price'>{price}.<span>99$</span></p>
                </div>
            </div> */}
            <div className='menu-item-wrapper' onClick={onClick}>
                <div className='menu-item-content-wrapper'>
                    <div className='menu-item-content'>
                        <span className='menu-item-title'>{title}</span> <br />
                        <span className='menu-item-description'><i><small>{description}</small></i></span>
                    </div>
                    <p className='item-price'>{price.split(".")[0]}.<span style={{ fontSize: 'xx-small' }}>{price.split(".")[1]}</span></p>
                </div>
            </div>
        </div>
    );
}
