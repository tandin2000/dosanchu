import React, { useState } from 'react';
import 'boxicons';

import './style.scss';
import { ThemeColor } from './style';

import CardBG from '../../Assets/Images/CardBG.png';
import HeroImage from '../../Assets/Images/heroImage.png';
import CarouselImage from '../../Assets/Images/CaroselImg.png';
import CarouselImage2 from '../../Assets/Images/CaroselImg2.png';
import ReviewDp from '../../Assets/Images/ReviewDP.png'
import CardCategory from '../../Components/CategoryCard/CardCategory';
import CarouselComponent from '../../Components/CaroselComp';
import ReviewCarousel from '../../Components/ReviewComp';
import ContactInfo from '../../Components/ContactComp';




export default function HomePage(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const cardsData = [
        { text: 'South Indian Curries', image: CardBG },
        { text: 'Dosa Specials', image: CardBG },
        { text: 'Indo-Chinese', image: CardBG },
    ];
    const carouselImages = [
        // CarouselImage,
        CarouselImage2,
        // CarouselImage,
        // CarouselImage2,
    ];

    const reviews = [
        {
            name: "John Doe",
            text: "Horizontal arrow effect fill create. Opacity frame rotate vector effect. Group layout move plugin team line outline comment connection polygon. Outline arrow follower plugin hand.",
            rating: 4.5,
            image: ReviewDp
        },
        {
            name: "Jane Smith",
            text: "Horizontal arrow effect fill create. Opacity frame rotate vector effect. Group layout move plugin team line outline comment connection polygon. Outline arrow follower plugin hand.",
            rating: 4,
            image: ReviewDp
        },
        {
            name: "Alice Johnson",
            text: "Horizontal arrow effect fill create. Opacity frame rotate vector effect. Group layout move plugin team line outline comment connection polygon. Outline arrow follower plugin hand.",
            rating: 5,
            image: ReviewDp
        },
        {
            name: "Bob Brown",
            text: "Horizontal arrow effect fill create. Opacity frame rotate vector effect. Group layout move plugin team line outline comment connection polygon. Outline arrow follower plugin hand.",
            rating: 3.5,
            image: ReviewDp
        }
    ];


    return (
        <>
            <div className='container' >
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='hero-content'>
                            <h1 className='hero-title'><span>SOUTH INDIAN </span>& <br /> 
                             SRI LANKAN CUISINE</h1>
                            <p>
                            Welcome to Dosa N Chutney in BC!
                            <br/>We specialize in serving mouth watering South Indian and Sri Lankan cuisine. Whether you're craving a classic dosa or a delectable Sri Lankan curry, our menu is brimming with flavors that will entice you to return. Join us for a meal and savor the vibrant tastes of South Asia.</p>
                            <button onClick={() => props.setComponent('Order Now')}>
                                <div className='text-icon-container-2 item-1'>
                                    <box-icon type='solid' name='cart-alt' style={{ fill: ThemeColor.darkColor, height: '18px' }}></box-icon>
                                    <span>Order Now</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-0 col-xs-0'>
                        <div className='hero-image-wrapper'>
                            <img src={HeroImage} alt='hero' className='hero-image' />
                        </div>
                    </div>
                </div>
                <div className='row' style={{ marginTop: '80px' }}>
                    {cardsData.map((card, index) => (
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 col-md-12'>
                            <CardCategory key={index} text={card.text} image={card.image} />
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '80px' }}>
                    <CarouselComponent images={carouselImages} />
                </div>
                {/* <div style={{ marginTop: '80px' }}>
                    <ReviewCarousel reviews={reviews} />
                </div> */}
                <div style={{ marginTop: '80px' }}>
                    <ContactInfo />
                </div>
            </div>
        </>
    )
}
