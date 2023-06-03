import React from 'react'

export default function DateWise({data, getTodayDate, getImage}) {
    return (
        <div className='fiveDay-con center-container'>
            {data.map((item, index) => {
                return <div key={index} className='font-col day-card'>
                    <span>{index === 0 ? "Tomorrow" : getTodayDate(item.date2)}</span>
                    <img src={getImage(item.desc)} alt='sky' className='days-img' />
                    <span className='days-temp'><span>{item.maxDeg}<sup>&deg;C</sup></span><span className='min-col'>{item.minDeg}<sup>&deg;C</sup></span></span>
                </div>
            })}
        </div>
    )
}
