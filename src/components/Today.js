import React from 'react'
import CloudBack from '../assets/images/cloud-background.png'
export default function Today({ data }) {
    return (
        <div className='today-card'>
            <div className='icon-container'>
                <img src={CloudBack} alt='cloud background' className="cloud-back" />
            </div>
        </div>
    )
}
