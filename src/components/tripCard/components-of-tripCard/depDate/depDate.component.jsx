import React from 'react';

import './depDate.styles.scss'

export const DepDate = (props) => (
    <div className='depDate'>
        <div className='entry-name'>Departure date: </div>
        <div className='entry-value'>{props.depDate}</div>
    </div>
)