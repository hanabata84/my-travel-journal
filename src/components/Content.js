import React from 'react'
import locationMarkIcon from '../assets/location-mark.svg'

function Content(props) {
    return (
        <div className='content'>
            <img src={props.contentImg} alt="mount" />
            <div className='content-text'>
                <div className='content-location'>
                    <img src={locationMarkIcon} alt="location mark icon" />
                    <p className='location-text'>{props.location}</p>
                    <a href={props.locationUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className='bold'>{props.travelDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Content