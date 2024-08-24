import React from 'react'
import CardCategory from '../../Components/CategoryCard/CardCategory';
import CardBG from '../../Assets/Images/CardBG.png';
import DailySpecialCard from '../../Components/DailySpecialCard/DailySpecialCard';
import CarouselComponent from '../../Components/CaroselComp';

import CarouselImage from '../../Assets/Images/CaroselImg.png';
import CarouselImage2 from '../../Assets/Images/CaroselImg2.png';
 
import PartyHallComp from './../../Components/PartyHallComp/index';

const carouselImages = [
    CarouselImage,
    // CarouselImage2,
    // CarouselImage,
    // CarouselImage2,
];

export default function AboutUs() {

    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Who We Are</span>
            </div>
            <div className="container-fluid spacer"></div>
            <div className='container'>
            <CarouselComponent images={carouselImages} />
            </div>
        </>
    )
}
