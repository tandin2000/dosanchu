import React from 'react';
import OrderComp from './../../Components/OrderComp/OrderComp';

import uberImg from '../../Assets/Images/uber.png';
import doordash from '../../Assets/Images/doordash.png';
import skipthedishes from '../../Assets/Images/skipthedisshes.png';
import touchbistro from '../../Assets/Images/touch-bistro.png';

export default function OrderNow() {
    const cardsDataPickUp = [
        { text: 'touch bistro', image: touchbistro, link: 'https://order.tbdine.com/pickup/52957/menu', btnInfo: 'Pick Up'},
    ]
    const cardsDataDeliver = [
        { text: 'UBER EATS', image: uberImg, link: 'https://www.ubereats.com/ca/store/dosa-n-chutney/LhFkZW_PVZm4xZwC-sGNcw?srsltid=AfmBOoqRKTvXnOCOSeZgZPxolql3i65cOHNCYNdI9z93PhECD-cIV93p', btnInfo: 'Order Now' },
        { text: 'DoorDash', image: doordash, link: 'https://www.doordash.com/en-CA/store/dosa-n-chutney-vancouver-29951385/?srsltid=AfmBOop2w27YDuuF3ShDRQuXQmulKmv0Cl2CXi20vpVfWJFa4dXu4PV9', btnInfo: 'Order Now' },
        { text: 'Skipthedishes', image: skipthedishes, link: 'https://www.skipthedishes.com/dosa-n-chutney-victoria-dr', btnInfo: 'Order Now' },
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
