import React from 'react'
import CardCategory from '../../Components/CategoryCard/CardCategory';
import mondayBG from '../../Assets/Images/mondayBG.jpg';
import tuesdayBG from '../../Assets/Images/tuesdayBG.jpg';
import wednesdayBG from '../../Assets/Images/wednesdayBG.jpg';
import thursdayBG from '../../Assets/Images/thursdayBG.jpg';
import DailySpecialCard from '../../Components/DailySpecialCard/DailySpecialCard';

export default function DailySpecial() {
    const cardsData = [
        { day:'Monday', text: 'Biriyani Special', image: mondayBG, price:'12.99' },
        { day:'Tuesday', text: 'Kottu Special', image: tuesdayBG, price:'12.99' },
        { day:'Wednesday', text: 'Curry Special', image: wednesdayBG, price:'13.99' },
        { day:'Thursday', text: 'Dosa Special', image: thursdayBG, price:'6.99' },
    ];
    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Daily Special</span>
            </div>
            <div className="container-fluid spacer"></div>
            <div className='container'>
            <div className='row' style={{ marginTop: '80px' }}>
                    {cardsData.map((card, index) => (
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 col-md-12'>
                            <DailySpecialCard key={index} text={card.text} image={card.image} day={card.day} price={card.price} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
