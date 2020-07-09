import React from "react";

import { MyTripsHolder } from "../myTripsHolder/myTripsHolder.component";
import { Datepicker } from "../datepicker/datepicker.component";

export const BodyOfApp = ({ tripDataArray, handleGetFunc, handleChange, startDate}) => (
    <div>
        <div className="holder headline centerTitle">
            Travel App
        </div><br />
        <div className="holder city">
            <label for="city" className="centerTitle">Destinations</label>
            <input type="text" id="city" placeholder="enter city name here" onChange={(e) => handleChange("city", e)} />
        </div>
        <div className="container">
            <div className="row">
                <h2 className="centerTitle">Trip date</h2>
            </div>
            <div className="row">
                <div className="enterTitleColor centerTitle">Enter Departure Date</div>
                <Datepicker typeOfDate='depDate' startDate={startDate} handleChange={handleChange} />
                <div className="enterTitleColor centerTitle">Enter Return Date</div>
                <Datepicker typeOfDate='retDate' startDate={startDate} handleChange={handleChange} />
            </div>
            <div className="holder feel centerBtn">
                <button id="savetripBtn" onClick={handleGetFunc}>Save Trip</button>
            </div>                
        </div>       
        <MyTripsHolder tripDataArray={tripDataArray} />
    </div>
)


