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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.3428138627805!2d-123.07703634232789!3d49.25094790000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676ab24e5df7b%3A0x65bc9ca4805a59a2!2s1345%20Kingsway%2C%20Vancouver%2C%20BC%20V5V%203E3%2C%20Canada!5e0!3m2!1sen!2slk!4v1719682818698!5m2!1sen!2slk"
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
                            <p>1345 Kingsway,<br /> Vancouver BC, V5V 3E3</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className='icon-wrapper'>
                            <box-icon name='phone' type='solid' style={{ fill: ThemeColor.primaryColor, height: '84px' }}></box-icon>
                        </div>
                        <div className='content-wrapper'>
                            <h3>CALL NOW</h3>
                            <p>778 379 7791<br /> 778 379 7792</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className='icon-wrapper'>
                            <box-icon name='alarm' type='solid' style={{ fill: ThemeColor.primaryColor, height: '84px' }}></box-icon>
                        </div>
                        <div className='content-wrapper'>
                            <h3>OPEN HOURS</h3>
                            <p>Open 7 days a Week  <br/>11 AM to 3 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
