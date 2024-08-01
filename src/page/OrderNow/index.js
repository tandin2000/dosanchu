import React from 'react';
import OrderComp from './../../Components/OrderComp/OrderComp';

import uberImg from '../../Assets/Images/uber.png';
import doordash from '../../Assets/Images/doordash.png';
import skipthedishes from '../../Assets/Images/skipthedisshes.png';
import touchbistro from '../../Assets/Images/touch-bistro.png';

export default function OrderNow() {
    const cardsDataPickUp = [
        { text: 'touch bistro', image: touchbistro, link: 'https://www.touchbistro.com', btnInfo: 'Pick Up'},
    ]
    const cardsDataDeliver = [
        { text: 'UBER EATS', image: uberImg, link: 'https://www.ubereats.com/ca/store/dosa-n-chutney/Q7mPOHLdS4q5KqaaTqU1kQ?ps=1', btnInfo: 'Order Now' },
        { text: 'DoorDash', image: doordash, link: 'https://www.doordash.com', btnInfo: 'Order Now' },
        { text: 'Skipthedishes', image: skipthedishes, link: 'https://www.skipthedishes.com', btnInfo: 'Order Now' },
    ];
    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Order Now</span>
            </div>
            <div className="container-fluid spacer"></div>
            <br/>
            

            <h2 className="text-center">Delivery</h2>
            <br/>

            <div className='container'>
                <div className='row'>
                {cardsDataDeliver.map((card, index) => (
                        <div key={index} className='col-lg-4 col-md-4 col-sm-12 col-xs-12 col-md-12'>
                            <OrderComp text={card.text} image={card.image} link={card.link} btnInfo={card.btnInfo} />
                        </div>
                    ))}
                </div>
            </div>
            <br/>
            <br/>



            <h2 className="text-center">Pick Up</h2>
            <br/>

            <div className='container'>
                <div className='row'>
                {cardsDataPickUp.map((card, index) => (
                        <div key={index} className='col-lg-4 col-md-4 col-sm-12 col-xs-12 col-md-12'>
                            <OrderComp text={card.text} image={card.image} link={card.link} btnInfo={card.btnInfo} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
