import React from "react";

import { connect } from "react-redux";

import { currentInputs } from "../../redux/inputs/inputs.actions";
import { toggleSubmittedOrNot } from "../../redux/pop-up/pop-up.actions";
//
import { toggleShowPopUp } from "../../redux/pop-up/pop-up.actions";
//
import { MyTripsHolder } from "../myTripsHolder/myTripsHolder.component";
import { Datepicker } from "../datepicker/datepicker.component";

import './bodyOfApp.styles.scss'

//Function to be triggered after clicking the generate button
// const performAction = (e) => {
//     e.preventDefault()

//     const city = refs.city.value;

//     const baseURLGeo = "http://api.geonames.org/searchJSON?q=";
//     const baseURLWeatherCurrent = "https://api.weatherbit.io/v2.0/current?";
//     const baseURLWeatherForecast = "https://api.weatherbit.io/v2.0/forecast/daily?";
//     const baseURLPixabay = "https://pixabay.com/api/?";

//     // Create a new date instance dynamically with JS
//     const d = new Date(); //changed it from let to const
//     const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear(); //changed it from let to const

//     const depDateFromUser = refs.departureDate.value;
//     const returnDateFromUser = refs.returnDate.value;

    // const pop_up_1 = document.getElementById("pop-up-1");
    // const pop_up_2 = document.getElementById("pop-up-2");
    // const pop_up_3 = document.getElementById("pop-up-3");

    // if (
    //     (city === "" || city === null) ||
    //     (depDateFromUser === "" || depDateFromUser === null) ||
    //     (returnDateFromUser === "" || returnDateFromUser === null)
    // ) {
    //     pop_up_2.classList.remove("pop-up-swing");
    //     pop_up_2.style.display = 'block';
    // } else {

    //     const savetripBtn = document.getElementById("savetripBtn");

    //     const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

    //     if (daysLeft === "Error: invalid dates") {
    //         pop_up_1.classList.remove("pop-up-swing");
    //         pop_up_1.style.display = 'block';
    //         return;
    //     }

    //     savetripBtn.textContent = "Fetching data. Please wait...";

    //     postData('/postAndGetFunc', {
    //         baseURLGeo: baseURLGeo,
    //         baseURLWeatherCurrent: baseURLWeatherCurrent,
    //         baseURLWeatherForecast: baseURLWeatherForecast,
    //         baseURLPixabay: baseURLPixabay,
    //         newDate: newDate,
    //         city: city,
    //         depDateFromUser: depDateFromUser,
    //         returnDateFromUser: returnDateFromUser
    //     }).then(projectData => {
    //         if (projectData) {
    //             createUI(projectData);
    //             console.log(projectData);
    //         } else {
    //             console.log(projectData);
    //             console.log("else statement triggered");
    //             savetripBtn.textContent = "Save trip";
    //             pop_up_3.classList.remove("pop-up-swing");
    //             pop_up_3.style.display = 'block';
    //         }
    //     });
    // }
//}

// export default class BodyOfApp extends React.Component {
//     constructor(props) {
//         super(props);

//         this.inputRef = React.createRef();
//         // this.inputRef.current is null here
//     }

class BodyOfApp extends React.Component {
    // constructor({ tripDataArray, handleGetFunc, handleChange, startDate }) {
    //     super({ tripDataArray, handleGetFunc, handleChange, startDate });

    //     this.inputRef = React.createRef();
    //     // this.inputRef.current is null here
    // }

    // const { currentInputs, tripDataArray, handleGetFunc, handleChange, startDate} = this.props;

    // constructor(props) {
    //     super(props);

    //     this.inputRef = React.createRef();
    //     // this.inputRef.current is null here
    // }

    // componentDidMount(){
        // const { currentInputs } = this.props;

        // currentInputs({
        //     city: refs.city.value,
        //     depDateFromUser: refs.departureDate.value,
        //     returnDateFromUser: refs.returnDate.value
        // })
    // } 
    performAction = (e) => {
        e.preventDefault();
        
        //
        const { toggleShowPopUp } = this.props;

        toggleShowPopUp();
        //

        const { toggleSubmittedOrNot } = this.props;

        toggleSubmittedOrNot();

        const { currentInputs } = this.props;

        currentInputs({
            city: this.refs.city.value,
            depDateFromUser: this.refs.departureDate.value,
            returnDateFromUser: this.refs.returnDate.value
        })

        // if (
        //     (city === "" || city === null) ||
        //     (depDateFromUser === "" || depDateFromUser === null) ||
        //     (returnDateFromUser === "" || returnDateFromUser === null)
        // ) {
        //     pop_up_2.classList.remove("pop-up-swing");
        //     pop_up_2.style.display = 'block';
        // } else {

        //     const savetripBtn = document.getElementById("savetripBtn");

        //     const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

        //     if (daysLeft === "Error: invalid dates") {
        //         pop_up_1.classList.remove("pop-up-swing");
        //         pop_up_1.style.display = 'block';
        //         return;
        //     }

        //     savetripBtn.textContent = "Fetching data. Please wait...";
        // }
    }

    render() {
        return (
            <div>
                <div className="headline centerTitle">
                    Travel App
                </div><br />
                <div className="city">
                    <label htmlFor="city" className="centerTitle">Destinations</label>
                    <input ref='city' type="text" id="city" placeholder="enter city name here" />
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
                                    <input ref='departureDate' type='text' width="100" name="dateValue" className="form-control" id="departureDate" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                                <div className="enterTitleColor centerTitle">Enter Return Date</div>
                                <div className='input-group date datepicker'>
                                    <input ref='returnDate' type='text' width="100" name="dateValue" className="form-control" id="returnDate" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="holder feel centerBtn">
                                <button ref='savetripBtn' id="savetripBtn" onClick={this.performAction}>Save Trip</button>
                            </div>
                        </form>
                    </div>
                </div>       
                {/* <MyTripsHolder tripDataArray={tripDataArray} /> */}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    currentInputs: inputs => dispatch(currentInputs(inputs)),
    toggleSubmittedOrNot: () => dispatch(toggleSubmittedOrNot()),
    toggleShowPopUp: () => dispatch(toggleShowPopUp())
})

export default connect(null, mapDispatchToProps)(BodyOfApp);

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

