import React from 'react'
import CloudBack from '../assets/images/cloud-background.png';
export default function Today({ data, getTodayDate, getImage }) {

    return (
        <div className='today-card'>
            <div className='icon-container'>
                <img src={CloudBack} alt='cloud background' className="cloud-back" />
                <img src={getImage(data.desc)} alt="weather condition " className='weather-con' />
            </div>
            <div className='center-container'>
                <span className='temp font-col'>{data.deg}<sub>&deg;C</sub></span>
            </div>
            <h2 className='center-container font-col desc'>{data.desc}</h2>
            <div className='center-container'>
                <span className='today-date'><span>Today</span> <span>&#183;</span><span>{getTodayDate(data.date2)}</span></span>
            </div>
            <span className='center-container today-date'>
                <span className="material-icons material-symbols-outlined">
                    location_on
                </span>
                <span>{data.city}</span>
            </span>
        </div>
    )
}
