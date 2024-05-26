import React from 'react'
import fb from '../Images/fb.png';
import twi from '../Images/twi5.png';
import ins from '../Images/ins1.jpg';
import lin from '../Images/lin5.png';

export default function Footer() {
    return (
        <div id="footer" className="myfooter">
            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Connect With Us</h3>
                    <p className="text"></p>
                    <br /><br /><br />
                    <a href="/"><img src={fb} alt="social media" /></a>
                    <a href="/"><img src={twi} alt="social media" /></a>
                    <a href="/"><img src={ins} alt="social media" /></a>
                    <a href="/"><img src={lin} alt="social media" /></a>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Visit Us</h3>
                    <br /><br />
                    <p className="text">Weekdays : 10:00 AM to 11:00 PM</p>
                    <p className="text">Weekends : 12:00 PM to 12:00 AM</p>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Contact Us</h3>
                    <br /><br /><br /><br />
                    <p className="text">Address: Savor Haven, Green Park, New Delhi - 56</p>
    
                </div>
            </div>

         

        </div>
    )
}
