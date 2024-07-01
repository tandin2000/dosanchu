import React from 'react'
import OrderComp from './../../Components/OrderComp/OrderComp';

import uberImg from '../../Assets/Images/uber.png'
import doordash from '../../Assets/Images/doordash.png'
import skipthedishes from '../../Assets/Images/skipthedisshes.png'

export default function OrderNow() {
    const cardsData = [
        { text: 'UBER EATS', image: uberImg },
        { text: 'DoorDash', image: doordash },
        { text: 'Skipthedishes', image: skipthedishes },
    ];
    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Order Now</span>
            </div>
            <div className="container-fluid spacer"></div>
            <br/>

            <div className='container'>
                <div className='row'>
                {cardsData.map((card, index) => (
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 col-md-12'>
                            <OrderComp key={index} text={card.text} image={card.image} />
                        </div>
                    ))}
                </div>
            </div>
            <br/>
        </>
    )
}
