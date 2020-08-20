import React from 'react';

import './todaysDate.styles.scss'

export const TodaysDate = (props) => (
    <div className='date'>
        <div className='entry-name'>Today's date: </div>
        <div className='entry-value'>{props.date}</div>
    </div>
)
