import React from 'react';

export const Country = (props) => (
    <div className='country'>
        <div className='entry-name'>Country of Destination: </div>
        <div className='entry-value'>{props.country}</div>
    </div>
)