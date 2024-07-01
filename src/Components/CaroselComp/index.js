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
                <p>Horizontal arrow effect fill create. Opacity frame rotate vector effect. Group layout move plugin team line outline comment connection polygon. Outline arrow follower plugin hand. Plugin invite follower invite invite vector. Stroke subtract pixel create ipsum. Undo main invite union text.</p>
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
