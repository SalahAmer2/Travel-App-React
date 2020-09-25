import React from 'react';

import './low_temp.styles.scss'

export const Low_Temp = (props) => (
    <div className='low_temp'>
        <div className='entry-name'>Lowest Temperature Forecasted: </div>
        <div className='entry-value'>{props.low_temp} &#8451;</div>
    </div>
)