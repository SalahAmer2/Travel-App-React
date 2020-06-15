import React from "react";

import { Button } from './components-of-tripCard/button/button.component';
import { CityPhoto } from './components-of-tripCard/cityPhoto/cityPhoto.component';
import { TodaysDate } from './components-of-tripCard/todaysDate/todaysDate.component';
import { Country } from './components-of-tripCard/country/country.component';
import { DepDate } from './components-of-tripCard/depDate/depDate.component';
import { RetDate } from './components-of-tripCard/retDate/retDate.component';
import { DaysLeft } from './components-of-tripCard/daysLeft/daysLeft.component';
import { Weather } from './components-of-tripCard/weather/weather.component';
import { Low_Temp } from './components-of-tripCard/low_temp/low_temp.component';
import { Max_Temp } from './components-of-tripCard/max_temp/max_temp.component';
import { Temp } from './components-of-tripCard/temp/temp.component';

export const TripCard = (props) => (
    <div className='entryHolder' id={props.id}>
        <Button id={props.id}/>
        <CityPhoto cityPhoto={props.tripData.cityPhoto}/>
        <TodaysDate date={props.tripData.date}/>
        <Country country={props.tripData.country}/>
        <DepDate depdate={props.tripData.depDate}/>
        <RetDate retDate={props.tripData.retDate}/>
        <DaysLeft daysLeft={props.tripData.daysLeft}/>
        <Weather weather={props.tripData.weather}/>
        {
            props.tripData.trueOrFalse?
                <React.Fragment>
                    <Low_Temp low_temp={props.tripData.low_temp}/>
                    <Max_Temp max_temp={props.tripData.max_temp}/>
                </React.Fragment>
                :
                <Temp temp={props.tripData.temp}/>
        }
    </div>
)