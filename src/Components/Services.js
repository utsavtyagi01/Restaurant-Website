import React from 'react'
import first from '../Images/a.jpg';
import second from '../Images/b.jpg';
import third from '../Images/c.jpg';


export default function Services() {
    return (
        <div id="services"><br />
            <h1>Dining Services</h1>
            
            <div className="card">
                <br />
                <img src={first} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Indoor Dining</h2>
                    <p className="text">Relax in our elegant dining room, where you can enjoy a sophisticated atmosphere perfect for any occasion. Whether it's a romantic dinner, a family gathering our indoor dining experience is sure to impress.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Outdoor Dining</h2>
                    <p className="text">Take in the fresh air and beautiful surroundings in our outdoor seating area. Our patio is an ideal spot for a casual meal with friends or a leisurely weekend brunch where you enjoy serenity of nature.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={third} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Private Dining</h2>
                    <p className="text">Host your next special event in one of our private dining rooms. Perfect for birthdays, anniversaries, and corporate events, our private spaces offer an intimate setting with customized menus and dedicated service.</p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
