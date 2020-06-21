import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import getFunc from "./fetchData";

import { timeDiff } from "./timeDiff";

import { createTrip } from "./createTrip";

class App extends Component {
  constructor() {
    super();

    this.state = {
      projectDataState: {},
      inputs: {},
      startDate: new Date(),
      submittingOrNot: false,
      pop_up_3_state: false,
      pop_up_exit: false
    };
  }

  handleChange = (typeOfInput, e) => {
    const inputsObject = {};
    inputsObject[typeOfInput] = e.target.value;
    this.setState({ inputs: {...inputsObject}});
  }

  handleGetFunc = () => {
    this.setState({ submittingOrNot: true });

    if 
    (
      !(
        (city === "" || city === null) ||
        (depDateFromUser === "" || depDateFromUser === null) ||
        (returnDateFromUser === "" || returnDateFromUser === null)
      ) 
      || 
      !(daysLeft === "Error: invalid dates")
    )
    {
      getFunc().then(projectData => {
        if(projectData){
          this.setState({ projectDataState: projectData });
          this.setState({ submittingOrNot: false });
        } else {
          console.log("handleGetFunc else statement triggered");
          this.setState({ pop_up_3_state: true }); //turn it back to false with onClick of X of pop-up
        }
      });
    }
  }

  handleExit = () => {
    this.setState({ pop_up_exit: true });
  }
  
  render(){

    const tripDataArray = Object.values(this.state.projectDataState);
    const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

    //   if ($(".entryHolder")[0]) {
    //     // Display My Trips title if there are any trip cards
    //     document.getElementById("to-display-or-not").style.display = 'block';
    //   } else {
    //     // Hide My Trips title if there's no trip cards
    //     document.getElementById("to-display-or-not").style.display = 'none';
    //   }

    //   savetripBtn.textContent = "Save trip";
    // }

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
    // const performAction = (e) => {
    //   e.preventDefault()

    //   const city = document.getElementById('city').value;

    //   const baseURLGeo = "http://api.geonames.org/searchJSON?q=";
    //   const baseURLWeatherCurrent = "https://api.weatherbit.io/v2.0/current?";
    //   const baseURLWeatherForecast = "https://api.weatherbit.io/v2.0/forecast/daily?";
    //   const baseURLPixabay = "https://pixabay.com/api/?";

    //   // Create a new date instance dynamically with JS
    //   const d = new Date(); //changed it from let to const
    //   const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear(); //changed it from let to const

    //   const depDateFromUser = document.getElementById("departureDate").value;
    //   const returnDateFromUser = document.getElementById("returnDate").value;

    //   const pop_up_1 = document.getElementById("pop-up-1");
    //   const pop_up_2 = document.getElementById("pop-up-2");
    //   const pop_up_3 = document.getElementById("pop-up-3");

    // if ( //I will make conditionals (ternary operator) for the pop-ups here in App.js in return() <-(do this) (done)->but first we need to handle/configure the inputs (city, depDateFromUser, returnDateFromUser, etc) in bodyOfApp 
    //      // I'll start with either rendering or not rendering the pop-up component based on the conditional, I'll handle pop-up-swing, later, in the pop-up component itself with an onClick event probably
    //     (city === "" || city === null) ||
    //     (depDateFromUser === "" || depDateFromUser === null) ||
    //     (returnDateFromUser === "" || returnDateFromUser === null)
    //   ) {
    //     pop_up_2.classList.remove("pop-up-swing");
    //     pop_up_2.style.display = 'block';
    //   } else {

    //     const savetripBtn = document.getElementById("savetripBtn");

    //     const daysLeft = timeDiff(newDate, depDateFromUser, returnDateFromUser);

    //     if (daysLeft === "Error: invalid dates") {
    //       pop_up_1.classList.remove("pop-up-swing");
    //       pop_up_1.style.display = 'block';
    //       return;
    //     }

    //     savetripBtn.textContent = "Fetching data. Please wait...";

        // postData('/postAndGetFunc', {
        //   baseURLGeo: baseURLGeo,
        //   baseURLWeatherCurrent: baseURLWeatherCurrent,
        //   baseURLWeatherForecast: baseURLWeatherForecast,
        //   baseURLPixabay: baseURLPixabay,
        //   newDate: newDate,
        //   city: city,
        //   depDateFromUser: depDateFromUser,
        //   returnDateFromUser: returnDateFromUser
        // }).then(projectData => {
        //   if (projectData) {
        //     createUI(projectData);
        //     console.log(projectData);
        //   } else {
        //     console.log(projectData);
        //     console.log("else statement triggered");
        //     savetripBtn.textContent = "Save trip";
        //     pop_up_3.classList.remove("pop-up-swing");
        //     pop_up_3.style.display = 'block';
        //   }
        // });
    //   }
    // }

    //document.getElementById("savetripBtn").addEventListener("click", performAction);

    return ( //Now put the components that'll make the html here //BodyOfApp is done wrong so far //For now make the BodyOfApp in its component 
      <div className='App'>
        {
          this.state.submittingOrNot ?
          (
              (
                (city === "" || city === null) ||
                (depDateFromUser === "" || depDateFromUser === null) ||
                (returnDateFromUser === "" || returnDateFromUser === null)
              ) ? 
                <Pop_Up_2 handleExit={handleExit} pop_up_swing={this.state.pop_up_exit ? "pop-up-swing" : null}/> 
              : 
              (
                (daysLeft === "Error: invalid dates") ? 
                <Pop_Up_1 handleExit={handleExit} pop_up_swing={this.state.pop_up_exit ? "pop-up-swing" : null}/>
                :
                (
                  (this.state.pop_up_3_state) ?
                  <Pop_Up_3 handleExit={handleExit} pop_up_swing={this.state.pop_up_exit ? "pop-up-swing" : null}/>
                  :
                  null
                )
              )
          )
          :
          null
        }
        <div className="bg">
          <label id="app">
            
          <BodyOfApp 
            tripDataArray={tripDataArray} 
            handleGetFunc={this.handleGetFunc} 
            handleChange={this.handleChange} 
            startDate={this.state.startDate}
          />
          </label>
          <footer>Background Photo by David Marcu on Unsplash</footer>
        </div>
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

