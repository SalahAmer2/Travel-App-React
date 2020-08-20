import React from 'react';

import './retDate.styles.scss'

export const RetDate = (props) => (
    <div className='retDate'>
        <div className='entry-name'>Return date: </div>
        <div className='entry-value'>{props.retDate}</div>
    </div>
)