import React from 'react';

export const Weather = (props) => (
    <div className='weather'>
        <div className='entry-name'>Weather Description: </div>
        <div className='entry-value'>{props.weather}</div>
    </div>
)