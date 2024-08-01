import React, { useState } from 'react';
import 'boxicons';

import './style.scss';
import { ThemeColor } from './style';

import Logo from '../Assets/Images/dosaNchutneyLogo.png';
import Footer from '../Components/FooterComp';
import HomePage from '../page/Homepage';
import MenuPage from '../page/Menu';
import DailySpecial from '../page/DailySpecial';
import PartyHall from '../page/PartyHall';
import AboutUs from '../page/AboutUs';
import OrderNow from '../page/OrderNow';

export default function MainLayout() {
    const [activeItem, setActiveItem] = useState('Home');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleItemClick = (item) => {
        setActiveItem(item);
        setIsDrawerOpen(false); 
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    
    return (
        <>
            <div className='container' style={{position:'sticky', zIndex:1000}}>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-0 col-xs-0'>
                        <div className='information-wrapper'>
                            <div className='information-wrapper-2'>
                                <div className='text-icon-container item-1'>
                                    <box-icon type='solid' name='phone' style={{ fill: ThemeColor.primaryColor, height: '18px' }}></box-icon>
                                    <span><a href="tel:+16043364453" style={{"text-decoration": "none", "color": "inherit"}}>+1(604) 336 4453</a></span>
                                </div>
                                <div className='text-icon-container item-2'>
                                    <box-icon type='solid' name='time-five' style={{ fill: ThemeColor.primaryColor, height: '18px' }}></box-icon>
                                    <span>11 AM to 3 AM</span>
                                </div>
                            </div>
                            <div className='text-icon-container item-3'>
                                <box-icon type='solid' name='envelope' style={{ fill: ThemeColor.primaryColor, height: '18px' }}></box-icon>
                                <a href="mailto:management@dosanchutney.ca" style={{"text-decoration": "none", "color": "inherit"}}>management@dosanchutney.ca</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-0 col-xs-0'>
                        <div className='information-wrapper-3'>
                            <div className='product-logo'>
                                <img src={Logo} alt='brand logo' height="50px" width="300px" className='brand-logo' />
                            </div>
                            <div className='nav-items'>
                                <nav>
                                    <ul>
                                        {['Home', 'Menu', 'Daily Special', 'About Us', 'Order Now'].map((item) => (
                                            <li key={item}>
                                                <a
                                                    className={activeItem === item ? 'selected' : ''}
                                                    onClick={() => handleItemClick(item)}
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className='burger-menu' onClick={toggleDrawer}>
                                <box-icon name='menu' style={{ fill: ThemeColor.primaryColor, height: '32px' }}></box-icon>
                            </div>
                        </div>
                    </div>
                </div>

                {isDrawerOpen && (
                    <div className='drawer'>
                        <div className='drawer-content'>
                            <div className='drawer-close' onClick={toggleDrawer}>
                                <box-icon name='x' style={{ fill: ThemeColor.primaryColor, height: '32px' }}></box-icon>
                            </div>
                            <nav>
                                <ul>
                                    {['Home', 'Menu', 'Daily Special', 'About Us', 'Order Now'].map((item) => (
                                        <li key={item}>
                                            <a
                                                className={activeItem === item ? 'selected' : ''}
                                                onClick={() => handleItemClick(item)}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>

            {activeItem === 'Home' && <HomePage setComponent={handleItemClick}/>}
            {activeItem === 'Menu' && <MenuPage />}
            {activeItem === 'Daily Special' && <DailySpecial />}
            {/* {activeItem === 'Party Hall' && <PartyHall />} */}
            {activeItem === 'About Us' && <AboutUs />}
            {activeItem === 'Order Now' && <OrderNow />}

            <div style={{ marginTop: '80px' }}>
                <Footer setComponent={handleItemClick}/>
            </div>
        </>
    );
}
