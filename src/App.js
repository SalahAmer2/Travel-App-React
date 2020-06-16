import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import { MyTripsHolder } from "./components/myTripsHolder/myTripsHolder.component";

import { timeDiff } from "./timeDiff";

import { createTrip } from "./createTrip";

class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  componentDidMount() {

    let projectData = {};

    const city = document.getElementById('city').value;

    const baseURLGeo = "http://api.geonames.org/searchJSON?q=";
    const baseURLWeatherCurrent = "https://api.weatherbit.io/v2.0/current?";
    const baseURLWeatherForecast = "https://api.weatherbit.io/v2.0/forecast/daily?";
    const baseURLPixabay = "https://pixabay.com/api/?";

    // Create a new date instance dynamically with JS
    const d = new Date(); //changed it from let to const
    const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear(); //changed it from let to const

    const depDateFromUser = document.getElementById("departureDate").value;
    const returnDateFromUser = document.getElementById("returnDate").value;

    const username = 'salah_2';
    const weatherbitAPIKey = '2f3e278d4be24ab6b4e423bc8173692e';
    const pixabayAPIKey = '16218326-43ea96121b489407a6f95ba78';

    const create_UUID = () => {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    }

    const getFunc = async () => {
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

        projectData[currentId] = tripData;

        return projectData;

      } catch (error) {
        console.log("error", error);
        //appropriately handle the error
      }
    };

    getFunc().then(projectData => {
      this.setState(projectData);
    });

  }

  render(){

    const tripDataArray = Object.values(projectData);

    const createUI = async (projectData) => { // Start with this, make a myTripsHolder component in the components folder,
                                              // pass xprojectDatax tripDataArray as the props

      const tripDataArray = Object.values(projectData); // Do this xwith the propsx here

      // console.log(tripDataArray);

      const myTripsHolder = document.getElementById("allEntryHolders");

      myTripsHolder.innerHTML = "";

      tripDataArray.forEach(tripData => {
        myTripsHolder.appendChild(
          createTrip(
            tripData.cityPhoto, //then access these
            tripData.date,
            tripData.country,
            tripData.depDate,
            tripData.retDate,
            tripData.daysLeft,
            tripData.weather,
            tripData.temp.low_temp,
            tripData.temp.max_temp,
            tripData.temp.temp,
            tripData.temp.trueOrFalse,
            tripData.tripId
          )
        )
      });

      if ($(".entryHolder")[0]) {
        // Display My Trips title if there are any trip cards
        document.getElementById("to-display-or-not").style.display = 'block';
      } else {
        // Hide My Trips title if there's no trip cards
        document.getElementById("to-display-or-not").style.display = 'none';
      }

      savetripBtn.textContent = "Save trip";
    }

    function deleteTrip(tripId) {
      //1. Delete the trip from the server using the "/deleteTrip"
      //2. Fetch new trip data from the server
      //3. update the UI calling the above createUI() function

      document.getElementById(tripId).classList.add("entryHolder-drop");
      setTimeout(() => {
        postData('/deleteTrip', {
          tripId: tripId
        }).then(projectData => {
          createUI(projectData);
        });
      }, 1000);
    }

    $(document).ready(function () {

      $(".exit").click(() => { //Putting it at a high level to let the click event bubble up the tree from the "x" button to the document element
        document.getElementById("pop-up-1").classList.add("pop-up-swing");
        document.getElementById("pop-up-2").classList.add("pop-up-swing");
        document.getElementById("pop-up-3").classList.add("pop-up-swing");
        setTimeout(() => {
          document.getElementById("pop-up-1").style.display = 'none';
          document.getElementById("pop-up-2").style.display = 'none';
          document.getElementById("pop-up-3").style.display = 'none';
        }, 1000);
      });

    });

    //Function to be triggered after clicking the generate button
    const performAction = (e) => {
      e.preventDefault()

      const city = document.getElementById('city').value;

      const baseURLGeo = "http://api.geonames.org/searchJSON?q=";
      const baseURLWeatherCurrent = "https://api.weatherbit.io/v2.0/current?";
      const baseURLWeatherForecast = "https://api.weatherbit.io/v2.0/forecast/daily?";
      const baseURLPixabay = "https://pixabay.com/api/?";

      // Create a new date instance dynamically with JS
      const d = new Date(); //changed it from let to const
      const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear(); //changed it from let to const

      const depDateFromUser = document.getElementById("departureDate").value;
      const returnDateFromUser = document.getElementById("returnDate").value;

      const pop_up_1 = document.getElementById("pop-up-1");
      const pop_up_2 = document.getElementById("pop-up-2");
      const pop_up_3 = document.getElementById("pop-up-3");

      if (
        (city === "" || city === null) ||
        (depDateFromUser === "" || depDateFromUser === null) ||
        (returnDateFromUser === "" || returnDateFromUser === null)
      ) {
        pop_up_2.classList.remove("pop-up-swing");
        pop_up_2.style.display = 'block';
      } else {

        const savetripBtn = document.getElementById("savetripBtn");

        const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

        if (daysLeft === "Error: invalid dates") {
          pop_up_1.classList.remove("pop-up-swing");
          pop_up_1.style.display = 'block';
          return;
        }

        savetripBtn.textContent = "Fetching data. Please wait...";

        postData('/postAndGetFunc', {
          baseURLGeo: baseURLGeo,
          baseURLWeatherCurrent: baseURLWeatherCurrent,
          baseURLWeatherForecast: baseURLWeatherForecast,
          baseURLPixabay: baseURLPixabay,
          newDate: newDate,
          city: city,
          depDateFromUser: depDateFromUser,
          returnDateFromUser: returnDateFromUser
        }).then(projectData => {
          if (projectData) {
            createUI(projectData);
            console.log(projectData);
          } else {
            console.log(projectData);
            console.log("else statement triggered");
            savetripBtn.textContent = "Save trip";
            pop_up_3.classList.remove("pop-up-swing");
            pop_up_3.style.display = 'block';
          }
        });
      }
    }

    document.getElementById("savetripBtn").addEventListener("click", performAction);

    return (
      <div className='App'>
        <MyTripsHolder tripDataArray={tripDataArray}/>
      </div>
    );

    }    
}


export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

