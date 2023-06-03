import React from 'react'
import DateWise from './DateWise'
import Highlights from './Highlights'

export default function DetailedCard({ data, getTodayDate, getImage, todayData }) {
    return (
        <div className='det-card'>
            <DateWise data={data} getTodayDate={getTodayDate} getImage={getImage} />
            <Highlights todayData={todayData} />
        </div>
    )
}
