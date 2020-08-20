import React from 'react';

import './daysLeft.styles.scss'

export const DaysLeft = (props) => (
    <div className='daysLeft'>
        <div className='entry-name'>Days left: </div>
        <div className='entry-value'>{props.daysLeft}</div>
    </div>
)