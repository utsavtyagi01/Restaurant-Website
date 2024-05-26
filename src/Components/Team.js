import React from 'react'
import first from '../Images/team1.jpeg';


export default function Team() {
    return (
        <div id="team"><br />
            <h1>Meet Our Talented Chefs</h1><br /><br />
            <div className="teamtext">
                <br />
                <h4 className='flint'>Chef Sanjay</h4>
                <img src={first} alt="pic" />
                <br /><br /><br />
                <p><strong>Specialization:</strong> Modern European Cuisine</p>

            </div>

            <div className="teamtext">
                <br />
                <h4>Chef Ranbir</h4>
                <img src={first} alt="pic" />
                <br /><br /><br />
                <p><strong>Specialization:</strong> Seafood and Shellfish</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Chef vivek</h4>
                <img src={first} alt="pic" />
                <br /><br /><br />
                <p><strong>Specialization:</strong> Pastries and Desserts</p>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
