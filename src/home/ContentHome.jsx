import React from 'react';
import './ContentHome.css'


export default function roomCard({ title, description, imageSrc, size }) {
    return (
        <div className="room-card">
            <div className="room-card__content">
                <h1 className="room-card__title">{title}</h1>
                <p className="room-card__description">{description}</p>
                <button className="room-card__button">Explore</button>
            </div>
            <div className="room-card__image">
                <img src={require("../../public/images/" + imageSrc.filename)} width={size.width}
                    height={size.height} alt="Room" />
            </div>
        </div>
    );
}
