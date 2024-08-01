import React, { useEffect, useState } from 'react';
import './style.scss';
import MenuItem from '../../Components/MenuItem';
import { ThemeColor } from '../Homepage/style';
import 'boxicons';
import ItemImg from '../../Assets/Images/menuItem.png';
import * as XLSX from 'xlsx';


export default function MenuPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [menuCategory, setMenuCategory] = useState([]);
    const [menuCategorySelected, setMenuCategorySelected] = useState('');

    const handleItemClick = (item) => {
        // setSelectedItem(item); // Set the selected item
        // setIsDrawerOpen(true); // Open drawer
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        fetch('/menu.xlsx')
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // Assuming the Excel file has columns: Image, Title, Description, Price
                console.log(jsonData)
                const formattedData = jsonData.map(item => ({
                    title: item['Menu Item'],
                    description: item['Description'],
                    price: item.Price,
                    Category: item.Category,
                }));
                const categorized = formattedData.reduce((acc, item) => {
                    const category = item.Category;
                    if (!acc[category]) {
                      acc[category] = [];
                    }
                    acc[category].push(item);
                    return acc;
                  }, {});
                  setMenuCategory(Object.keys(categorized));
                  setMenuCategorySelected(Object.keys(categorized)[0])
                setMenuItems(categorized);
            })
            .catch(error => console.error('Error fetching the Excel file:', error));
    }, []);

    return (
        <>
            <div className="container-fluid full-width-div hang-up">
                <span className="centered-text">Menu</span>
            </div>
            <div className="container-fluid spacer"></div>
            <div className="container">
                <div className="category-wrapper">
                    {menuCategory.map((category, index) => (
                        <div
                            key={index}
                            className={`category-name ${menuCategorySelected === category ? 'active-category' : ''}`}
                            onClick={() => setMenuCategorySelected(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className="row" style={{ marginTop: '40px' }}>
                    {menuItems[`${menuCategorySelected}`] && menuItems[`${menuCategorySelected}`].map((item, index) => (
                        <MenuItem
                            key={index}
                            // image={ItemImg}
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
