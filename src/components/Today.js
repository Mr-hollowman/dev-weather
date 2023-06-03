import React from 'react'
import CloudBack from '../assets/images/cloud-background.png';
import Clear from '../assets/images/Clear.png'
export default function Today({ data }) {
    const getImage = (type) => {
        switch (type) {
            case "Clear":
                return Clear
            default:
                break;
        }
    }
    console.log(data);

    const getTodayDate = (dt) => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"]
        console.log('month[dt.getMonth()]', month[dt.getMonth()])
        return `${month[dt.getMonth()]}, ${dt.getDay()} ${day[dt.getDay()]}`
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
            <h2 className='center-container font-col desc'>{data.desc}</h2>
            <div className='center-container'>
                <span className='today-date'><span>Today</span> <span>&#183;</span><span>{getTodayDate(data.date2)}</span></span>
            </div>
            <span className='center-container today-date'>
                <span class="material-icons material-symbols-outlined">
                    location_on
                </span>
                <span>{data.city}</span>
            </span>
        </div>
    )
}
