import React from 'react'

export default function DetailedCard({ data, getTodayDate, getImage, todayData }) {
    return (
        <div className='det-card'>
            <div className='fiveDay-con center-container'>
                {data.map((item, index) => {
                    return <div key={index} className='font-col day-card'>
                        <span>{index === 0 ? "Tomorrow" : getTodayDate(item.date2)}</span>
                        <img src={getImage(item.desc)} alt='sky' className='days-img' />
                        <span className='days-temp'><span>{item.maxDeg}<sup>&deg;C</sup></span><span className='min-col'>{item.minDeg}<sup>&deg;C</sup></span></span>
                    </div>
                })}
            </div>
            <div className='today-high font-col'>
                <h2>Today's Highlights</h2>
                <div className='high-container'>
                    <div className='high-card'>
                        <span>Wind Status</span>
                        <span><span className='big-fnt'>{todayData.windSpeed}</span><span>mph</span></span>
                        <span className='center-container' style={{gap:"10px"}}>
                            <span className='loc-icon center-container'>
                                <span class="material-icons material-symbols-outlined">
                                    navigation
                                </span>
                            </span>
                            <span>wsw</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
