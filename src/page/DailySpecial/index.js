import React from 'react'
import CardCategory from '../../Components/CategoryCard/CardCategory';
import CardBG from '../../Assets/Images/CardBG.png';
import DailySpecialCard from '../../Components/DailySpecialCard/DailySpecialCard';

export default function DailySpecial() {
    const cardsData = [
        { day:'Monday', text: 'Any Dosa Special Served With Dessert', image: CardBG, price:'7.99' },
        { day:'Monday', text: 'Any Dosa Special Served With Dessert', image: CardBG, price:'7.99' },
        { day:'Monday', text: 'Any Dosa Special Served With Dessert', image: CardBG, price:'7.99' },
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
