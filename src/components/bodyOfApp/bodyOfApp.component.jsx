import React from "react";

import { connect } from "react-redux";

import { currentInputs } from "../../redux/inputs/inputs.actions";
import { toggleSubmittedOrNot } from "../../redux/pop-up/pop-up.actions";
import { toggleShowPopUp } from "../../redux/pop-up/pop-up.actions";
import { currentProjectData } from "../../redux/projectData/projectData.actions";
import { createTripCardsOrNot } from "../../redux/createTripCards/createTripCards.actions";

import MyTripsHolder from "../myTripsHolder/myTripsHolder.component";
import { Datepicker } from "../datepicker/datepicker.component";

import { TripCard } from "../tripCard/tripCard.component";

// import getFunc from "../../getFunc";

import timeDiff from "../../timeDiff";

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

        toggleSubmittedOrNot({
            submittedOrNot: true
        });

        const { currentInputs } = this.props;

        currentInputs({
            city: this.refs.city.value,
            depDateFromUser: this.refs.departureDate.value,
            returnDateFromUser: this.refs.returnDate.value
        })

        
        //GETFUNC USED TO BE HERE
       
        const getFunc = async () => {

            //let dataOfTripCard = {};

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

            // const city = this.props.currentInputs.city;
            // const depDateFromUser = this.props.currentInputs.depDateFromUser;
            // const returnDateFromUser = this.props.currentInputs.returnDateFromUser;

            const city = this.refs.city.value;
            const depDateFromUser = this.refs.departureDate.value;
            const returnDateFromUser = this.refs.returnDate.value;

            // Create a new date instance dynamically with JS
            const d = new Date();
            const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

            const resGeo = await fetch(baseURLGeo + encodeURI(city) + "&username=" + username);

            try {
                const data = await resGeo.json();
                const countryName = data.geonames[0].countryName;
                const latitude = data.geonames[0].lat;
                const longitude = data.geonames[0].lng;
                const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

                const resWeather = await fetch(
                    ((daysLeft > 7) ? baseURLWeatherForecast : baseURLWeatherCurrent) + "key=" + weatherbitAPIKey + "&lat=" + latitude + "&lon=" + longitude
                );

                const data2 = await resWeather.json();
                const weather = data2.data[0].weather.description;

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
                    retDate: returnDateFromUser,
                    daysLeft: daysLeft,
                    weather: weather,
                    temp: (daysLeft > 7) ? {
                        low_temp: data2.data[0].low_temp,
                        max_temp: data2.data[0].max_temp,
                        trueOrFalse: true //For the if statement in updateUI in the client side
                    } : {
                            temp: data2.data[0].temp,
                            trueOrFalse: false //For the if statement in updateUI in the client side
                        },
                    lat: latitude,
                    lng: longitude,
                    tripId: currentId
                };

                //dataOfTripCard[currentId] = tripData;
                let dataOfTripCard = [tripData];

                // this.props.currentProjectData({
                //     currentProjectData: "dataOfTripCard"
                // })

                return dataOfTripCard;

            } catch (error) {
                console.log("error", error);
                //appropriately handle the error
            }

            // this.props.currentProjectData({
            //     currentProjectData: "dataOfTripCard"
            // })
        
        };

        getFunc().then((dataOfTripCard) => {
            this.props.currentProjectData({
                dataOfTripCard
            })
        });

        // const funcFor_DataOfTripCard_InitState = (dataOfTripCard = []) => {
        //     this.props.currentProjectData({
        //         dataOfTripCard
        //     })
        // }

        // getFunc().then((dataOfTripCard) => {
        //     this.props.currentProjectData({
        //         dataOfTripCard
        //     })

        //     // funcFor_DataOfTripCard_InitState(dataOfTripCard);
            
        //     (this.props.currentProjectData) ?
        //     (this.props.currentProjectData.dataOfTripCard).map((tripDataItem, index) => (
        //         // <TripCard key={tripData.id} id={tripData.id} tripData={tripData} />,
        //         <p>{tripDataItem + ""}</p>
        //     ))
        //     : null
        // });

        //fetchData();

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

    // getFunc = async () => {

    //     //let dataOfTripCard = {};

    //     const create_UUID = () => {
    //         var dt = new Date().getTime();
    //         var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //             var r = (dt + Math.random() * 16) % 16 | 0;
    //             dt = Math.floor(dt / 16);
    //             return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    //         });
    //         return uuid;
    //     }

    //     const username = "salah_2";
    //     const weatherbitAPIKey = "2f3e278d4be24ab6b4e423bc8173692e";
    //     const pixabayAPIKey = "16218326-43ea96121b489407a6f95ba78";

    //     const baseURLGeo = "http://api.geonames.org/searchJSON?q=";
    //     const baseURLWeatherCurrent = "https://api.weatherbit.io/v2.0/current?";
    //     const baseURLWeatherForecast = "https://api.weatherbit.io/v2.0/forecast/daily?";
    //     const baseURLPixabay = "https://pixabay.com/api/?";

    //     // const city = this.props.currentInputs.city;
    //     // const depDateFromUser = this.props.currentInputs.depDateFromUser;
    //     // const returnDateFromUser = this.props.currentInputs.returnDateFromUser;

    //     const city = this.refs.city.value;
    //     const depDateFromUser = this.refs.departureDate.value;
    //     const returnDateFromUser = this.refs.returnDate.value;

    //     // Create a new date instance dynamically with JS
    //     const d = new Date();
    //     const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

    //     const resGeo = await fetch(baseURLGeo + encodeURI(city) + "&username=" + username);

    //     try {
    //         const data = await resGeo.json();
    //         const countryName = data.geonames[0].countryName;
    //         const latitude = data.geonames[0].lat;
    //         const longitude = data.geonames[0].lng;
    //         const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

    //         const resWeather = await fetch(
    //             ((daysLeft > 7) ? baseURLWeatherForecast : baseURLWeatherCurrent) + "key=" + weatherbitAPIKey + "&lat=" + latitude + "&lon=" + longitude
    //         );

    //         const data2 = await resWeather.json();
    //         const weather = data2.data[0].weather.description;

    //         const resPixabayPhoto = await fetch(baseURLPixabay + "key=" + pixabayAPIKey + "&q=" + encodeURI(city) + "+tourism&image_type=photo");

    //         const data3 = await resPixabayPhoto.json();
    //         const cityPhoto = data3.hits[0].webformatURL;

    //         // id generated by create_UUID function
    //         const currentId = create_UUID();

    //         const tripData = {
    //             cityPhoto: cityPhoto,
    //             country: countryName,
    //             date: newDate,
    //             depDate: depDateFromUser,
    //             retDate: returnDateFromUser,
    //             daysLeft: daysLeft,
    //             weather: weather,
    //             temp: (daysLeft > 7) ? {
    //                 low_temp: data2.data[0].low_temp,
    //                 max_temp: data2.data[0].max_temp,
    //                 trueOrFalse: true //For the if statement in updateUI in the client side
    //             } : {
    //                     temp: data2.data[0].temp,
    //                     trueOrFalse: false //For the if statement in updateUI in the client side
    //                 },
    //             lat: latitude,
    //             lng: longitude,
    //             tripId: currentId
    //         };

    //         //dataOfTripCard[currentId] = tripData;
    //         let dataOfTripCard = [tripData];

    //         // this.props.currentProjectData({
    //         //     currentProjectData: "dataOfTripCard"
    //         // })

    //         return dataOfTripCard;

    //     } catch (error) {
    //         console.log("error", error);
    //         //appropriately handle the error
    //     }

    //     // this.props.currentProjectData({
    //     //     currentProjectData: "dataOfTripCard"
    //     // })
    // };

    // makingTripCards = () => {
    //     this.performAction().getFunc().then((dataOfTripCard) => {
    //         this.props.currentProjectData({
    //             dataOfTripCard
    //         })

    //             // funcFor_DataOfTripCard_InitState(dataOfTripCard);

    //             (this.props.currentProjectData) ?
    //             (this.props.currentProjectData.dataOfTripCard).map((tripDataItem, index) => (
    //                 // <TripCard key={tripData.id} id={tripData.id} tripData={tripData} />,
    //                 <p>{tripDataItem + ""}</p>
    //             ))
    //             : null
    //     })
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.currentProjectData !== prevProps.currentProjectData) {
    //         //this.fetchData(this.props.userID);
    //         this.props.createTripCardsOrNot({
    //             createTripCardsOrNot: true
    //         })
    //     }
    // }

    render() {

        // const makingTripCards = () => {
        //     this.getFunc().then((dataOfTripCard) => {
        //         this.props.currentProjectData({
        //             dataOfTripCard
        //         })

        //             // funcFor_DataOfTripCard_InitState(dataOfTripCard);

        //         (this.props.currentProjectData) ?
        //         (this.props.currentProjectData.dataOfTripCard).map((tripDataItem, index) => (
        //             // <TripCard key={tripData.id} id={tripData.id} tripData={tripData} />,
        //             <p>{tripDataItem + ""}</p>
        //         ))
        //         : null
        //     })
        // }
        
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
                <div>
                    {/* {this.props.createTripCardsOrNot ? */}
                    {   this.props.submittedOrNot ?
                        <div className="title centerTitle">My Trips</div>
                        :
                        null
                    }
                    <div id="allEntryHolders">
                        {
                            // (this.props.submittedOrNot && this.props.createTripCardsOrNot) ?
                            //     makingTripCards()
                            // : null

                            //(this.props.submittedOrNot && this.props.createTripCardsOrNot) ?
                            // (this.props.submittedOrNot) ?
                            // (this.props.currentProjectData) ?
                            // (this.props.createTripCardsOrNot) ?
                            (this.props.currentProjectData.dataOfTripCard) ?
                                (this.props.currentProjectData.dataOfTripCard).map((tripDataItem, index) => (
                                    // <TripCard key={tripData.id} id={tripData.id} tripData={tripData} />,
                                    <p>{tripDataItem + ""}</p>
                                ))
                                : null    

                                // ((this.props.currentProjectData.dataOfTripCard).map(tripDataIDKey => (
                                //     this.props.currentProjectData.dataOfTripCard[tripDataIDKey].map(tripData => (
                                //         // <TripCard key={tripData.id} id={tripData.id} tripData={tripData} />,
                                //         <p>{tripData + ""}</p>
                                //     ))
                                // )))
                                
                                //<p>{this.props.currentProjectData.dataOfTripCard + "" + this.props.createTripCardsOrNot + ""}</p>
                                //: null

                                //You want it to run after performAction()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentProjectData: state.inputs.currentProjectData,
    submittedOrNot: state.popUp.submittedOrNot,
    createTripCardsOrNot: state.tripCards.createTripCardsOrNot
});

const mapDispatchToProps = dispatch => ({
    currentInputs: inputs => dispatch(currentInputs(inputs)),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    currentProjectData: projectData => dispatch(currentProjectData(projectData)),
    createTripCardsOrNot: tripCards => dispatch(createTripCardsOrNot(tripCards))
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyOfApp);

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

