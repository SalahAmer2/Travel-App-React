import React from 'react';

export const Temp = (props) => (
    <div className='temp'>
        <div className='entry-name'>Temperature: </div>
        <div className='entry-value'>{props.temp} + &#8451;</div>
    </div>
)