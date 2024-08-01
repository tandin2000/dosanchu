import React, { useState, useEffect } from 'react';
import './style.scss';

const CarouselComponent = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="row carousel">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-md-12">
                <h2>We Are <br /> <span>DOSA N CHUTNEY</span></h2>
                <p>We're your local spot in BC for amazing South Indian and Sri Lankan cuisine. Our menu is packed with flavorful dishes that bring the vibrant tastes of South Asia to your plate. From crispy dosas to rich curries, every meal is crafted with love and tradition. Come dine with us and enjoy a culinary experience that will leave you coming back for more!</p>
                <div className="bullets" style={{marginTop:40, marginBottom:40}}>
                    {images.map((_, index) => (
                        <span key={index} className={currentIndex === index ? 'active' : ''}></span>
                    ))}
                </div>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12 col-md-12 image-section">
                <img src={images[currentIndex]} alt="carousel" />
            </div>
        </div>
    );
};

export default CarouselComponent;
