import React from 'react'
import DateWise from './DateWise'

export default function DetailedCard({ data, getTodayDate, getImage, todayData }) {
    return (
        <div className='det-card'>
            <DateWise data={data} getTodayDate={getTodayDate} getImage={getImage} />
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
