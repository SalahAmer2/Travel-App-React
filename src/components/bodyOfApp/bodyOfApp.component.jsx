import React from "react";

import { connect } from "react-redux";

import { currentInputs } from "../../redux/inputs/inputs.actions";
import { toggleSubmittedOrNot } from "../../redux/pop-up/pop-up.actions";
import { toggleShowPopUp } from "../../redux/pop-up/pop-up.actions";
import { togglePopUp3State } from "../../redux/pop-up/pop-up.actions";
import { currentProjectData_Update } from "../../redux/projectData/projectData.actions";
import { currentProjectData_Delete } from "../../redux/projectData/projectData.actions";
import { displayBlockOrNone_PopUp_1 } from "../../redux/pop-up/pop-up.actions";
import { displayBlockOrNone_PopUp_2 } from "../../redux/pop-up/pop-up.actions";
import { displayBlockOrNone_PopUp_3 } from "../../redux/pop-up/pop-up.actions";
import { submitBtnText_Update } from "../../redux/submitBtnText/submitBtnText.actions";

import { TripCard } from "../tripCard/tripCard.component";

import timeDiff from "../../timeDiff";

import './bodyOfApp.styles.scss'

class BodyOfApp extends React.Component {
    constructor() {
        super();

        this.city = React.createRef();
        this.departureDate = React.createRef();
        this.returnDate = React.createRef();
    }

    deleteTrip = (trip_id) => {
        setTimeout(() => { this.props.currentProjectData_Delete_Action(trip_id) }, 400); 
    };

    displayBlockOrNone_PopUp = (popUpNum) => {
        switch (popUpNum) {
            case 1:
                console.log("popup1 read in switch")
                this.props.displayBlockOrNone_PopUp_1_Action(true)
                break;
            case 2:
                console.log("popup2 read in switch")
                this.props.displayBlockOrNone_PopUp_2_Action(true)
                break;
            case 3:
                console.log("popup3 read in switch")
                this.props.displayBlockOrNone_PopUp_3_Action(true)
                break;
            default:
                return null;
        }

    }

    performAction = (e) => {
        e.preventDefault();

        const { toggleShowPopUp } = this.props;

        const { toggleSubmittedOrNot } = this.props;

        toggleSubmittedOrNot(true);

        const city = this.city.current.value
        const depDateFromUser = this.departureDate.current.value
        const retDateFromUser = this.returnDate.current.value

        const { currentInputs } = this.props;

        currentInputs({
            city: city,
            depDateFromUser: depDateFromUser,
            retDateFromUser: retDateFromUser
        })

        // Create a new date instance dynamically with JS
        const d = new Date();
        const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

        const daysLeft = timeDiff(newDate, depDateFromUser, retDateFromUser);

        if(
            (city === "" || city === null || city === undefined) ||
            (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
            (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
        )   
            {
                console.log("City: " + city);
                this.displayBlockOrNone_PopUp(2);
                toggleShowPopUp();
            } 
        else if(daysLeft === "Error: invalid dates")      
            {
                console.log(daysLeft);
                this.displayBlockOrNone_PopUp(1);
                toggleShowPopUp();
            }
        else {
            console.log("Pop-up 1 & 2 not needed to display.");
        }

        const getFunc = async () => {

            const create_UUID = () => {
                var dt = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (dt + Math.random() * 16) % 16 | 0;
                    dt = Math.floor(dt / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            }

            const username = "salah_2";
            const weatherbitAPIKey = "2f3e278d4be24ab6b4e423bc8173692e";
            const pixabayAPIKey = "16218326-43ea96121b489407a6f95ba78";

            const baseURLGeo = "https://secure.geonames.org/searchJSON?q=";
            const baseURLWeatherCurrent = "https://api.weatherbit.io/v2.0/current?";
            const baseURLWeatherForecast = "https://api.weatherbit.io/v2.0/forecast/daily?";
            const baseURLPixabay = "https://pixabay.com/api/?";

            const city = this.city.current.value;
            const depDateFromUser = this.departureDate.current.value;
            const retDateFromUser = this.returnDate.current.value;

            // Create a new date instance dynamically with JS
            const d = new Date();
            const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

            const resGeo = await fetch(baseURLGeo + encodeURI(city) + "&username=" + username);

            try {
                const data = await resGeo.json();
                const countryName = data.geonames[0].countryName;
                const latitude = data.geonames[0].lat;
                const longitude = data.geonames[0].lng;
                const daysLeft = timeDiff(newDate, depDateFromUser, retDateFromUser);

                const resWeather = await fetch(
                    ((daysLeft > 7) ? baseURLWeatherForecast : baseURLWeatherCurrent) + "key=" + weatherbitAPIKey + "&lat=" + latitude + "&lon=" + longitude
                );

                const data2 = await resWeather.json();
                const weather = data2.data[0].weather.description;
                
                const low_temp = data2.data[0].low_temp;
                const max_temp = data2.data[0].max_temp;
                const temp = data2.data[0].temp;

                const resPixabayPhoto = await fetch(baseURLPixabay + "key=" + pixabayAPIKey + "&q=" + encodeURI(city) + "+tourism&image_type=photo");

                const data3 = await resPixabayPhoto.json();
                const cityPhoto = data3.hits[0].webformatURL;

                // id generated by create_UUID function
                const currentId = create_UUID();

                const tripData = {
                    cityPhoto: cityPhoto,
                    country: countryName,
                    date: newDate,
                    depDate: depDateFromUser,
                    retDate: retDateFromUser,
                    daysLeft: daysLeft,
                    weather: weather,
                    temp: (daysLeft > 7) ? {
                        low_temp: low_temp,
                        max_temp: max_temp,
                        trueOrFalse: true
                    } : {
                            temp: temp,
                            trueOrFalse: false
                        },
                    lat: latitude,
                    lng: longitude,
                    trip_id: currentId
                };

                return tripData;

            } catch (error) {
                //appropriately handle the error
                this.props.submitBtnText_Update_Action("Save trip");
                this.displayBlockOrNone_PopUp(3);
                toggleShowPopUp()
                this.props.displayBlockOrNone_PopUp_3 ? (console.log('PopUp 3 is true')) : (console.log('PopUp 3 is false'))
            }        
        };

        if (
            (city === "" || city === null || city === undefined) ||
            (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
            (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined) ||
            (daysLeft === "Error: invalid dates")
        ){
            console.log("getFunc has not been called.")
        } else {

            this.props.submitBtnText_Update_Action("Fetching data. Please wait...");
            
            getFunc().then((dataOfTripCard) => {
                if (!(this.props.displayBlockOrNone_PopUp_3)) {

                    this.props.currentProjectData_Update_Action(
                        [
                            ...this.props.currentProjectData,
                            dataOfTripCard
                        ]
                    )

                    this.props.submitBtnText_Update_Action("Save trip");

                }
            })
        }
    }
    
    render() {
        return (
            <div>
                <div className="bg">
                    <label id="app">
                        <div className="headline centerTitle">
                            Travel App
                        </div><br />
                        <div className="city">
                            <label htmlFor="city" className="centerTitle">Destinations</label>
                            <input ref={this.city} type="text" id="city" placeholder="enter city name here" />
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
                                            <input ref={this.departureDate} type='text' width="100" name="dateValue" className="form-control" id="departureDate" />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                        <div className="enterTitleColor centerTitle">Enter Return Date</div>
                                        <div className='input-group date datepicker'>
                                            <input ref={this.returnDate} type='text' width="100" name="dateValue" className="form-control" id="returnDate" />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="holder feel centerBtn">
                                        <button id="savetripBtn" onClick={this.performAction}>{this.props.submitBtnText}</button>
                                        {/* <button id="savetripBtn" onClick={this.performAction}>Save Trip</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>       
                        <div>
                            {(this.props.currentProjectData.length > 0) ?
                                <div className="title centerTitle">My Trips</div>
                                :
                                null
                            }
                            <div id="allEntryHolders">
                                {
                                    (this.props.currentProjectData.length > 0) ?
                                        (this.props.currentProjectData).map((tripDataItem, index) => {
                                            return <TripCard key={index} trip_id={tripDataItem.trip_id} tripData={tripDataItem}
                                                onDelete={() => { this.deleteTrip(tripDataItem.trip_id) }}
                                                />
                                        })
                                        : null    
                                }
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentProjectData: state.projectData.currentProjectData,
    submittedOrNot: state.popUp.submittedOrNot,
    currentInputs: state.inputs.currentInputs,
    displayBlockOrNone_PopUp_1: state.popUp.displayBlockOrNone_PopUp_1,
    displayBlockOrNone_PopUp_2: state.popUp.displayBlockOrNone_PopUp_2,
    displayBlockOrNone_PopUp_3: state.popUp.displayBlockOrNone_PopUp_3,
    showPopUp: state.popUp.showPopUp,
    submitBtnText: state.text.submitBtnText
});

const mapDispatchToProps = dispatch => ({
    currentInputs: inputs => dispatch(currentInputs(inputs)),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    currentProjectData_Update_Action: projectData => dispatch(currentProjectData_Update(projectData)),
    currentProjectData_Delete_Action: trip_id => dispatch(currentProjectData_Delete(trip_id)),
    displayBlockOrNone_PopUp_1_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_1(popUp)),
    displayBlockOrNone_PopUp_2_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_2(popUp)),
    displayBlockOrNone_PopUp_3_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_3(popUp)),
    submitBtnText_Update_Action: (text) => dispatch(submitBtnText_Update(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyOfApp);