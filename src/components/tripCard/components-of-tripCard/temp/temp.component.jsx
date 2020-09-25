import React from 'react';

import './temp.styles.scss'

export const Temp = ({temp}) => (
    <div className='temp'>
        <div className='entry-name'>Temperature: </div>
        <div className='entry-value'>{temp} &#8451;</div>
    </div>
)