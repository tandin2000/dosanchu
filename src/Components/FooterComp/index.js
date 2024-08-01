import React from 'react';
import './style.scss';  // Import the custom SCSS
import { ThemeColor } from '../../Layout/style';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5>FOLLOW US ON</h5>
                        <div className="d-flex">
                            <a href="https://www.facebook.com/share/kbzMjfE4FD4FjX4h/?mibextid=LQQJ4d" target="_blank" className="text-light me-3"><box-icon type='logo' name='facebook-circle' style={{ fill: ThemeColor.primaryColor, height: '24px' }} ></box-icon></a>
                            <a href="#" className="text-light me-3"><box-icon type='logo' name='tiktok' target="_blank" style={{ fill: ThemeColor.primaryColor, height: '24px' }} ></box-icon></a>
                            <a href="https://www.instagram.com/dosa.n_chutney?igsh=MWVka3VvZG1sbnJ0ag==" target="_blank" className="text-light me-3"><box-icon type='logo' name='instagram-alt' style={{ fill: ThemeColor.primaryColor, height: '24px' }} ></box-icon></a>
                        </div>
                        <div className="" style={{marginTop:40}}>
                            <h5>ADDRESS</h5>
                            <p>4890 Victoria Dr, Vancouver, BC V5N 4P5</p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5>CALL NOW</h5>
                        <p><a href="tel:+16043364453" style={{"text-decoration": "none", "color": "inherit"}}>+1(604) 336 4453</a></p>
                        <div className=""style={{marginTop:40}}>
                            <h5>OPENING HOURS</h5>
                            <p>Open 7 days a Week<br />12 PM to 12 AM</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 d-none d-md-block">
                        <div className="">
                            <h5>QUICK LINKS</h5>
                            <ul className="list-unstyled">
                                <li><a  onClick={() => props.setComponent('Home')}>Home</a></li>
                                <li><a  onClick={() => props.setComponent('Menu')}>Menu</a></li>
                                <li><a onClick={() => props.setComponent('Daily Special')}>Daily Special</a></li>
                                <li><a onClick={() => props.setComponent('About Us')}>About Us</a></li>
                                <li><a onClick={() => props.setComponent('Order Now')}>Order Now</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 sm-center">
                        <h5>SUBSCRIBE</h5>
                        <p>Get More Newsletters And Updates Quickly</p>
                        <form>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email Address" />
                                <button className="btn" type="submit">SEND</button>
                            </div>
                        </form>
                        <p className="text-copywrite">Copyright © 2024 <br/> Designed & Maintained by <a href='https://www.orandbt.com/' target='_blank'>OrandBt</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
