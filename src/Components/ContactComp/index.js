import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeColor } from '../../Layout/style';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <iframe 
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.913041300795!2d-123.06742012363638!3d49.24013787138644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677919031976f%3A0xb73e564bf15bf605!2sDOSA%20N%20CHUTNEY!5e0!3m2!1sen!2sca!4v1722114838371!5m2!1sen!2sca" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0, borderRadius: 8, }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 contact-details">
                    <div className="detail">
                        <div className='icon-wrapper'>
                            <box-icon name='map-pin' type='solid' style={{ fill: ThemeColor.primaryColor, height: '84px' }}></box-icon>
                        </div>
                        <div className='content-wrapper'>
                            <h3>ADDRESS</h3>
                            <p>4890 Victoria Dr<br />Vancouver, BC V5N 4P5</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className='icon-wrapper'>
                            <box-icon name='phone' type='solid' style={{ fill: ThemeColor.primaryColor, height: '84px' }}></box-icon>
                        </div>
                        <div className='content-wrapper'>
                            <h3>CALL NOW</h3>
                            <p><a href="tel:+16043364453" style={{"text-decoration": "none", "color": "inherit"}}>+1(604) 336 4453</a></p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className='icon-wrapper'>
                            <box-icon name='alarm' type='solid' style={{ fill: ThemeColor.primaryColor, height: '84px' }}></box-icon>
                        </div>
                        <div className='content-wrapper'>
                            <h3>OPEN HOURS</h3>
                            <p>Open 7 days a Week  <br/>12 PM to 12 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
