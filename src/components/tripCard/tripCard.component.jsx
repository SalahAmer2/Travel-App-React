import React from "react";

//You should later make each div a component in their respective folders like;
//Button, CityPhoto, TodaysDate, etc. 

export const TripCard = (props) => (
    <div className='entryHolder' id={props.id}>
        <button className='deleteXbtn' onClick={deleteTrip(props.id)}>X</button>
        <br/>
        <div>
            <img src={props.tripData.cityPhoto} alt="City Photo"/>
        </div>
        <div className='date'>
            <div className='entry-name'>Today's date: </div>
            <div className='entry-value'>{props.tripData.date}</div>
        </div>
        <div className='country'>
            <div className='entry-name'>Country of Destination: </div>
            <div className='entry-value'>{props.tripData.country}</div>
        </div>
        <div className='depDate'>
            <div className='entry-name'>Departure date: </div>
            <div className='entry-value'>{props.tripData.depDate}</div>
        </div>
        <div className='retDate'>
            <div className='entry-name'>Return date: </div>
            <div className='entry-value'>{props.tripData.retDate}</div>
        </div>
        <div className='daysLeft'>
            <div className='entry-name'>Days left: </div>
            <div className='entry-value'>{props.tripData.daysLeft}</div>
        </div>
        <div className='weather'>
            <div className='entry-name'>Weather Description: </div>
            <div className='entry-value'>{props.tripData.weather}</div>
        </div>
        {
            props.tripData.trueOrFalse?
                <React.Fragment>    
                    <div className='low_temp'>
                        <div className='entry-name'>Lowest Temperature Forecasted: </div>
                        <div className='entry-value'>{props.tripData.low_temp} + &#8451;</div>
                    </div>
                    <div className='max_temp'>
                        <div className='entry-name'>Highest Temperature Forecasted: </div>
                        <div className='entry-value'>{props.tripData.max_temp} + &#8451;</div>
                    </div>
                </React.Fragment>
                :
                <div className='temp'>
                    <div className='entry-name'>Temperature: </div>
                    <div className='entry-value'>{props.tripData.temp} + &#8451;</div>
                </div>
        }
    </div>
)