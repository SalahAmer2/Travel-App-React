import React from "react";

export const MyTripsHolder = (props) => (
    <div>
        {props.children ? 
        <div class="title centerTitle">My Trips</div>
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