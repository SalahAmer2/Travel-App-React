import React from "react";
import { TripCard } from "../tripCard/tripCard.component";

import './myTripsHolder.styles.scss';

export const MyTripsHolder = (props) => (
    <div>
        {props.children ? 
        <div className="title centerTitle">My Trips</div>
        :
        null
        }
        <div id="allEntryHolders">
            {props.tripDataArray.map(tripData => (
                <TripCard key={tripData.id} id={tripData.id} tripData={tripData}/>
            ))}
        </div>
    </div>
)