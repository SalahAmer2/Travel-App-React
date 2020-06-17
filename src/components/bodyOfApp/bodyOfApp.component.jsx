import React from "react";

import { MyTripsHolder } from "./components/myTripsHolder/myTripsHolder.component";
import Datepicker from "../datepicker/datepicker.component";

export const BodyOfApp = ({ tripDataArray, handleGetFunc}) => (
    <div>
        <div class="holder headline centerTitle">
            Travel App
        </div><br />
            <div class="holder city">
                <label for="city" class="centerTitle">Destinations</label>
                <input type="text" id="city" placeholder="enter city name here" />
            </div>
                <div class="container">
                    <div class="row">
                        <h2 class="centerTitle">Trip date</h2>
                    </div>
                    <div class="row">
                        <div class="enterTitleColor centerTitle">Enter Departure Date</div>
                        <Datepicker />
                        <div class="enterTitleColor centerTitle">Enter Return Date</div>
                        <Datepicker />
                    </div>
                    <div class="holder feel centerBtn">
                        <button id="savetripBtn" onClick={handleGetFunc}>Save Trip</button>
                    </div>                
                </div>       
        <MyTripsHolder tripDataArray={tripDataArray} />
    </div>
)


