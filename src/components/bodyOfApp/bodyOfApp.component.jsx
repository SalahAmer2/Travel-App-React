import React from "react";

import { connect } from "react-redux";

import { currentInputs } from "../../redux/inputs/inputs.actions";
import { toggleSubmittedOrNot } from "../../redux/pop-up/pop-up.actions";
import { toggleShowPopUp } from "../../redux/pop-up/pop-up.actions";
import { currentProjectData_Update } from "../../redux/projectData/projectData.actions";
import { currentProjectData_Delete } from "../../redux/projectData/projectData.actions";
import { createTripCardsOrNot } from "../../redux/createTripCards/createTripCards.actions";

import Pop_Up from "../pop-up/pop-up.component";

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

    performAction = (e) => {
        e.preventDefault();

        const { toggleShowPopUp } = this.props;

        toggleShowPopUp();

        const { toggleSubmittedOrNot } = this.props;

        toggleSubmittedOrNot({
            submittedOrNot: true
        });

        // const city = this.props.currentInputs.city;
        // const depDateFromUser = this.props.currentInputs.depDateFromUser;
        // const retDateFromUser = this.props.currentInputs.retDateFromUser;

        const city = this.city.current.value
        const depDateFromUser = this.departureDate.current.value
        const retDateFromUser = this.returnDate.current.value

        const { currentInputs } = this.props;

        // currentInputs({
        //     city: this.city.current.value,
        //     depDateFromUser: this.departureDate.current.value,
        //     retDateFromUser: this.returnDate.current.value
        // })

        currentInputs({
            city: city,
            depDateFromUser: depDateFromUser,
            retDateFromUser: retDateFromUser
        })

        // Create a new date instance dynamically with JS
        const d = new Date();
        const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

        const daysLeft = timeDiff(newDate, depDateFromUser, retDateFromUser);

        // if(
        //     (city === "" || city === null || city === undefined) ||
        //     (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
        //     (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined) ||
        //     (daysLeft === "Error: invalid dates") ||
        //     (this.props.pop_up_3_state)
        // ) {
        //     return;
        // }

        // const { toggleShowPopUp } = this.props;

        // toggleShowPopUp();

        // const { toggleSubmittedOrNot } = this.props;

        // toggleSubmittedOrNot({
        //     submittedOrNot: true
        // });
        
        // let dataOfTripCard = {};
    
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

            const baseURLGeo = "http://api.geonames.org/searchJSON?q=";
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
                        trueOrFalse: true //For the if statement in updateUI in the client side
                    } : {
                            temp: temp,
                            trueOrFalse: false //For the if statement in updateUI in the client side
                        },
                    lat: latitude,
                    lng: longitude,
                    trip_id: currentId
                    // trip_id: null
                };

                return tripData;

            } catch (error) {
                console.log("error", error);
                //appropriately handle the error
            }        
        };

        if (
            (city === "" || city === null || city === undefined) ||
            (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
            (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined) ||
            (daysLeft === "Error: invalid dates") ||
            (this.props.pop_up_3_state)
        ) {
            return;
        }


        getFunc().then((dataOfTripCard) => {
            this.props.currentProjectData_Update_Action(
                [
                    ...this.props.currentProjectData,//previous state //Note: While we still only have one trip card so far, here we'll spread, (or simply put), the previous trip card
                    // {...dataOfTripCard}
                    dataOfTripCard
                ]
            )
        });
    }
    
    render() {
   
        // const deleteTrip = (trip_id) => {
        //     // document.getElementById(trip_id).classList.add("entryHolder-drop");
        //     this.currentTripCard.current.classList.add("entryHolder-drop");
        //     setTimeout(this.props.currentProjectData_Delete_Action(trip_id), 100);
        // };

        // const city = this.props.currentInputs.city;
        // const depDateFromUser = this.props.currentInputs.depDateFromUser;
        // const retDateFromUser = this.props.currentInputs.retDateFromUser;

        // const city = this.city.current.value;
        // const depDateFromUser = this.departureDate.current.value;
        // const retDateFromUser = this.returnDate.current.value;

        // // Create a new date instance dynamically with JS
        // const d = new Date();
        // const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

        // const daysLeft = timeDiff(newDate, depDateFromUser, retDateFromUser);

        return (
            <div>
                {/* {
                    this.props.submittedOrNot ? (console.log('submittedOrNot is true')) : (console.log('submittedOrNot is false'))
                }
                {
                    this.props.pop_up_3_state ? (console.log('pop_up_3_state is true')) : (console.log('pop_up_3_state is false'))
                }
                {
                    this.props.submittedOrNot
                        ?
                        (
                            (
                                (city === "" || city === null || city === undefined) ||
                                (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
                                (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
                            ) ? (
                                    <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2" />
                                )
                                :
                                (
                                    (daysLeft === "Error: invalid dates")
                                        ?
                                        (
                                            <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1" />
                                        )
                                        :
                                        (
                                            (this.props.pop_up_3_state)
                                                ?
                                                (
                                                    <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3" />
                                                )
                                                :
                                                null
                                        )
                                )
                        )
                        :
                        null
                } */}

                {/* <Pop_Up
                    className={
                        (
                            (city === "" || city === null || city === undefined) ||
                            (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
                            (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
                        )
                        ? '' 
                        : 'hidden'
                    } 
                    popUpMessage="Empty city name / dates" 
                    popUpNumberID="pop-up-2" 
                />
                <Pop_Up 
                    className={
                        (
                            (daysLeft === "Error: invalid dates")
                        )
                        ? ''
                        : 'hidden'
                    }
                    popUpMessage="Invalid Dates" 
                    popUpNumberID="pop-up-1" 
                />
                <Pop_Up 
                    className={
                        (
                            (this.props.pop_up_3_state)
                        )
                        ? ''
                        : 'hidden'
                    }
                    popUpMessage="Check city name" 
                    popUpNumberID="pop-up-3" 
                /> */}

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
                                        <button id="savetripBtn" onClick={this.performAction}>Save Trip</button>
                                    </div>
                                </form>
                            </div>
                        </div>       
                        <div>
                            {   this.props.submittedOrNot ?
                                <div className="title centerTitle">My Trips</div>
                                :
                                null
                            }
                            <div id="allEntryHolders">
                                {
                                    (this.props.submittedOrNot && this.props.currentProjectData &&  this.props.currentProjectData.length > 0) ?
                                        (this.props.currentProjectData).map((tripDataItem, index) => {
                                            return <TripCard key={index} trip_id={tripDataItem.trip_id} tripData={tripDataItem}
                                                onDelete={() => { this.deleteTrip(tripDataItem.trip_id) }}
                                                // ref={this.currentTripCard}
                                                />
                                        })
                                        : null    
                                }
                            </div>
                        </div>
                    </label>
                    {/* <footer>
                        Background Photo by David Marcu on Unsplash
                    </footer> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentProjectData: state.projectData.currentProjectData,
    submittedOrNot: state.popUp.submittedOrNot,
    createTripCardsOrNot: state.tripCards.createTripCardsOrNot,
    currentInputs: state.inputs.currentInputs,
    pop_up_3_state: state.popUp.pop_up_3_state
});

const mapDispatchToProps = dispatch => ({
    currentInputs: inputs => dispatch(currentInputs(inputs)),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    currentProjectData_Update_Action: projectData => dispatch(currentProjectData_Update(projectData)),
    currentProjectData_Delete_Action: trip_id => dispatch(currentProjectData_Delete(trip_id)),
    createTripCardsOrNot: tripCards => dispatch(createTripCardsOrNot(tripCards))
})

//Notice that referring to the state with mapStateToProps is light BLUE and updating the state with mapDispatchToProps is YELLOW

export default connect(mapStateToProps, mapDispatchToProps)(BodyOfApp);