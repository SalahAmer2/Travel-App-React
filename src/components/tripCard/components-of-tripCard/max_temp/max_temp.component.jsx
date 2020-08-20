import React from 'react';

import './max_temp.styles.scss'

export const Max_Temp = (props) => (
    <div className='max_temp'>
        <div className='entry-name'>Highest Temperature Forecasted: </div>
        <div className='entry-value'>{props.max_temp} + &#8451;</div>
    </div>
)