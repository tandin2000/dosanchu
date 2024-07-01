import React, { useState } from 'react';
import './style.scss';
import MenuItem from '../../Components/MenuItem';
import { ThemeColor } from '../Homepage/style';
import 'boxicons';
import ItemImg from '../../Assets/Images/menuItem.png';

export default function MenuPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item); // Set the selected item
        setIsDrawerOpen(true); // Open drawer
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const menuItems = [
        {
            image: ItemImg,
            title: "Rasam",
            description: "Aliqua commodo proident est qui ea dolore ea cupidatat consequat.",
            price: "4"
        },
        {
            image: ItemImg,
            title: "Sambar",
            description: "Incididunt duis fugiat excepteur laboris nostrud.",
            price: "5"
        },
        {
            image: ItemImg,
            title: "Pongal",
            description: "Laborum esse id velit proident exercitation dolore.",
            price: "6"
        }
    ];

    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Menu</span>
            </div>
            <div className="container-fluid spacer"></div>
            <div className="container">
                <div className="category-wrapper">
                    <div className="category-name active-category">Veg Appetizers</div>
                    <div className="category-name">Veg Appetizers</div>
                    <div className="category-name">Veg Appetizers</div>
                    <div className="category-name">Veg Appetizers</div>
                    <div className="category-name">Veg Appetizers</div>
                </div>
                <div className="row" style={{ marginTop: '40px' }}>
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            onClick={() => handleItemClick(item)} // Pass the item details to handleItemClick
                        />
                    ))}
                </div>
            </div>
            {isDrawerOpen && selectedItem && (
                <div className='drawer'>
                    <div className='drawer-content'>
                        <div className='drawer-close' onClick={toggleDrawer}>
                            <box-icon name='x' style={{ fill: ThemeColor.primaryColor, height: '32px' }}></box-icon>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <h3 style={{fontSize:24, fontWeight:'bold', marginBottom:40}}>{selectedItem.title}</h3>
                            <img src={selectedItem.image} alt={selectedItem.title} style={{minHeight:350, maxHeight:350, minWidth:350, maxWidth:350, marginBottom:40}} />
                            <p>{selectedItem.description}</p>
                            <p className='item-price'style={{justifyContent:'center'}}>{selectedItem.price}<span>.99$</span></p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
