import React from 'react';
import data from '../data/data.json';
import bruschetta from '../Images/a1.jpg';
import stuffed_mushrooms from '../Images/a2.jpg';
import garlic_shrimp from '../Images/a3.jpg';
import grilled_salmon from '../Images/a4.jpg';
import vegetarian_pasta from '../Images/a6.jpg';
import cheesecake from '../Images/a7.jpg';
import chocolate_lava_cake from '../Images/a8.jpg';

const imageMap = {
    bruschetta,
    stuffed_mushrooms,
    garlic_shrimp,
    grilled_salmon,
    vegetarian_pasta,
    cheesecake,
    chocolate_lava_cake
};
    const PriceText = () => {
        return (
            <div className="pricing-cards">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="row no-gutters">
                            <div className="col">
                                <img src={imageMap[item.image.split('.')[0]]} alt={item.title} className="card-img" />
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-text">Only in Rs: {item.price}</p> {/* Display price below title */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    

export default PriceText;
