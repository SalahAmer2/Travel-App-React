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

import './tripCard.styles.scss'

export const TripCard = ({tripData, id}) => {

    const trueOrFalse = tripData.temp.trueOrFalse;

    return(
        <div className='entryHolder' id={id}>
            <Button id={id}/>
            <CityPhoto cityPhoto={tripData.cityPhoto}/>
            <TodaysDate date={tripData.date}/>
            <Country country={tripData.country}/>
            <DepDate depdate={tripData.depDate}/>
            <RetDate retDate={tripData.retDate}/>
            <DaysLeft daysLeft={tripData.daysLeft}/>
            <Weather weather={tripData.weather}/>
            {
                trueOrFalse?
                    <React.Fragment>
                        <Low_Temp low_temp={tripData.temp.low_temp}/>
                        <Max_Temp max_temp={tripData.temp.max_temp}/>
                    </React.Fragment>
                    :
                    <Temp temp={tripData.temp.temp}/>
            }
        </div>
    )
}