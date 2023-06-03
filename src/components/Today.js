import React from 'react'
import CloudBack from '../assets/images/cloud-background.png';
import Clear from '../assets/images/Clear.png'
export default function Today({ data }) {
    const getImage = (type) =>{
        switch (type) {
            case "Clear":
                return Clear
            default:
                break;
        }
    }
    return (
        <div className='today-card'>
            <div className='icon-container'>
                <img src={CloudBack} alt='cloud background' className="cloud-back" />
                <img src={getImage(data.desc)} alt="weather condition " className='weather-con' />
            </div>
            <div className='center-container'>
                <span className='temp font-col'>{data.deg}<sub>&deg;C</sub></span>
            </div>
            <h2 className='center-container font-col'>{data.desc}</h2>
        </div>
    )
}
