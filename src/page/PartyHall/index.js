import React from 'react'
import CardCategory from '../../Components/CategoryCard/CardCategory';
import CardBG from '../../Assets/Images/CardBG.png';
import DailySpecialCard from '../../Components/DailySpecialCard/DailySpecialCard';
import CarouselComponent from '../../Components/CaroselComp';

import partyHallImg1 from '../../Assets/Images/partyHall1.png'
import partyHallImg2 from '../../Assets/Images/partyHall2.png'
 
import PartyHallComp from './../../Components/PartyHallComp/index';

const carouselImages = [
    partyHallImg1,
    partyHallImg2
];

export default function PartyHall() {

    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Party Hall</span>
            </div>
            <div className="container-fluid spacer"></div>
            <div className='container'>
            <PartyHallComp images={carouselImages} />
            </div>
        </>
    )
}
