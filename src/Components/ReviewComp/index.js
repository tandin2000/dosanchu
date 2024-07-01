import React, { useState, useEffect } from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import { ThemeColor } from '../../Layout/style';

const ReviewCarousel = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 2));
        }, 5000); // Change review pair every 3 seconds

        return () => clearInterval(interval);
    }, [reviews.length]);

    const getStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <div className="stars">
                {Array.from({ length: fullStars }, (_, index) => (
                    <box-icon type='solid' key={index} name='star' style={{ fill: ThemeColor.primaryColor, height: '18px' }}></box-icon>
                ))}
                {halfStar && <box-icon name='star-half'  type='solid' style={{ fill: ThemeColor.primaryColor, height: '18px' }}></box-icon>}
                {Array.from({ length: 5 - fullStars - (halfStar ? 1 : 0) }, (_, index) => (
                    <box-icon name='star'key={index} style={{ fill: ThemeColor.primaryColor, height: '18px' }} ></box-icon>
                ))}
            </div>
        );
    };

    return (
        <div className="review-carousel">
            <div style={{display:'flex', alignItems:'flex-end', gap:64, justifyContent:'space-between'}}>
            <div><h2>How <br/><span>Customer Think</span></h2></div>
            <div className="bullets" style={{marginBottom:16}}>
                {Array.from({ length: Math.ceil(reviews.length / 2) }, (_, index) => (
                    <span key={index} className={currentIndex === index ? 'active' : ''}></span>
                ))}
            </div>
            </div>
            <div className="row" style={{marginTop:50}}>
                {reviews.slice(currentIndex * 2, currentIndex * 2 + 2).map((review, index) => (
                    <div key={index} className="col-lg-6 col-md-12 col-sm-12">
                        <div className="review-card">
                            <div className="reviewer-info">
                                <img src={review.image} alt="reviewer" />
                                <div>
                                    <h3>{review.name}</h3>
                                    <p>{review.text}</p>
                                    {getStarRating(review.rating)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
