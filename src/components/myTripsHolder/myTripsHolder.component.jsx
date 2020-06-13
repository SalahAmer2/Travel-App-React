import React from "react";

export const myTripsHolder = (props) => {
    <div id="allEntryHolders">
        {props.tripDataArray.map(tripData => (
            <TripCard key={} id={} tripData={tripData}/>
        ))}
    </div>
}