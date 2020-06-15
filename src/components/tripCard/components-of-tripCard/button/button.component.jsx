import React from 'react';

export const Button = (props) => (
    <div>
        <button className='deleteXbtn' onClick={deleteTrip(props.id)}> X </button>
    </div>
)
