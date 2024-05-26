import React from 'react'
import { Link } from 'react-router-dom';


export default function Slider() {
    return (
        <div id="slider">
            <div id="slidertext">
                <h3 class="petit-formal-script-regular">Feel like heaven</h3>
                <br /><br />
                <p className='pppp'>Delight in our expertly crafted dishes made with the finest ingredients.Enjoy a warm and inviting atmosphere perfect for any occasion.Our staff is dedicated to providing you with an outstanding dining experience.</p><br />
                <button className="btn"><Link to="/contact">MAKE APPOINTMENT</Link></button>&nbsp;&nbsp;
                <button className="btn"><Link to="/contact">CONTACT US</Link></button>
            </div>

            <div id="sliderimg"></div>
        </div>
    )
}
