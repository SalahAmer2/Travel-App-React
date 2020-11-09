import React from "react";

import { connect } from "react-redux";

import { currentInputs } from "../../redux/inputs/inputs.actions";
import { toggleSubmittedOrNot } from "../../redux/pop-up/pop-up.actions";
import { toggleShowPopUp } from "../../redux/pop-up/pop-up.actions";
import { currentProjectData } from "../../redux/projectData/projectData.actions";
import { createTripCardsOrNot } from "../../redux/createTripCards/createTripCards.actions";

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

    deleteTrip = (id) => {
        this.props.currentProjectData_Action(
            this.props.currentProjectData.filter((tripDataItem, index) => {
                return index !== id;
            })
        )
    };

    performAction = (e) => {
        e.preventDefault();
        
        const { toggleShowPopUp } = this.props;

        toggleShowPopUp();

        const { toggleSubmittedOrNot } = this.props;

        toggleSubmittedOrNot({
            submittedOrNot: true
        });

        const { currentInputs } = this.props;

        currentInputs({
            city: this.city.current.value,
            depDateFromUser: this.departureDate.current.value,
            retDateFromUser: this.returnDate.current.value
        })

        const getFunc = async () => {

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
                };

                return tripData;

            } catch (error) {
                console.log("error", error);
                //appropriately handle the error
            }

        };

        getFunc().then((dataOfTripCard) => {
            this.props.currentProjectData_Action(
                [
                    ...this.props.currentProjectData,
                    {...dataOfTripCard}
                ]
            )
        });

    }

    render() {
   
        return (
            <div>
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
                                    return <TripCard key={index} id={index} tripData={tripDataItem} />
                                })
                                : null    
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentProjectData: state.projectData.currentProjectData,
    submittedOrNot: state.popUp.submittedOrNot,
    createTripCardsOrNot: state.tripCards.createTripCardsOrNot
});

const mapDispatchToProps = dispatch => ({
    currentInputs: inputs => dispatch(currentInputs(inputs)),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    currentProjectData_Action: projectData => dispatch(currentProjectData(projectData)),
    createTripCardsOrNot: tripCards => dispatch(createTripCardsOrNot(tripCards))
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyOfApp);