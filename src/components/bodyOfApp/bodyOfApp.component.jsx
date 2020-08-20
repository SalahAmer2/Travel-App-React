import React from "react";

import { MyTripsHolder } from "../myTripsHolder/myTripsHolder.component";
import { Datepicker } from "../datepicker/datepicker.component";

import './bodyOfApp.styles.scss'

export const BodyOfApp = ({ tripDataArray, handleGetFunc, handleChange, startDate}) => (
    <div>
        <div className="headline centerTitle">
            Travel App
        </div><br />
        <div className="city">
            <label htmlFor="city" className="centerTitle">Destinations</label>
            <input type="text" id="city" placeholder="enter city name here" onChange={(e) => handleChange("city", e)} />
        </div>
        <div className="container">
            <div className="row">
                <h2 className="centerTitle">Trip date</h2>
            </div>
            <div className="row">
                <form autoComplete="off">
                    <div className="form-group">
                        <div className="enterTitleColor centerTitle">Enter Departure Date</div>
                        <div className='input-group date datepicker'>
                            <input type='text' width="100" name="dateValue" className="form-control" id="departureDate" />
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                        <div className="enterTitleColor centerTitle">Enter Return Date</div>
                        <div className='input-group date datepicker'>
                            <input type='text' width="100" name="dateValue" className="form-control" id="returnDate" />
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                    <div className="holder feel centerBtn">
                        <button id="savetripBtn">Save Trip</button>
                    </div>
                </form>
            </div>
        </div>       
        {/* <MyTripsHolder tripDataArray={tripDataArray} /> */}
    </div>
)

// export const BodyOfApp = ({ tripDataArray, handleGetFunc, handleChange, startDate }) => (
//     <div>
//         <div className="headline centerTitle">
//             Travel App
//         </div><br />
//         <div className="city">
//             <label htmlFor="city" className="centerTitle">Destinations</label>
//             <input type="text" id="city" placeholder="enter city name here" onChange={(e) => handleChange("city", e)} />
//         </div>
//         <div className="container">
//             <div className="row">
//                 <h2 className="centerTitle">Trip date</h2>
//             </div>
//             <div className="row">
//                 <div className="enterTitleColor centerTitle">Enter Departure Date</div>
//                 <Datepicker typeOfDate='depDate' startDate={startDate} handleChange={handleChange} />
//                 <div className="enterTitleColor centerTitle">Enter Return Date</div>
//                 <Datepicker typeOfDate='retDate' startDate={startDate} handleChange={handleChange} />
//             </div>
//             <div className="feel centerBtn">
//                 <button id="savetripBtn" onClick={handleGetFunc}>Save Trip</button>
//             </div>
//         </div>
//         {/* <MyTripsHolder tripDataArray={tripDataArray} /> */}
//     </div>
// )

