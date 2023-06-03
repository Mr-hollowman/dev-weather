import React from 'react'

export default function DetailedCard({data, getTodayDate}) {
  return (
    <div className='det-card'>
      <div className='fiveDay-con center-container'>
        {data.map((item, index)=>{
            return<div key={index} className='font-col day-card'>
                <span>{index === 0 ? "Tomorrow": getTodayDate(item.date2)}</span>
            </div>
        })}
      </div>
    </div>
  )
}
