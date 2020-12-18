import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { render } from '@testing-library/react';

import { connect } from "react-redux";

//import getFunc, { newDate, depDateFromUser, retDateFromUser, city} from "./fetchData";

import timeDiff from "./timeDiff";

// import { createTrip } from "./createTrip";

import { toggleShowPopUp } from "./redux/pop-up/pop-up.actions";
// import { currentProjectData } from "./redux/projectData/projectData.actions";
import { createTripCardsOrNot } from "./redux/createTripCards/createTripCards.actions";

import Pop_Up from "./components/pop-up/pop-up.component";
import BodyOfApp from "./components/bodyOfApp/bodyOfApp.component";

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    
    const city = this.props.currentInputs.city;
    const depDateFromUser = this.props.currentInputs.depDateFromUser;
    const retDateFromUser = this.props.currentInputs.retDateFromUser; 

    // Create a new date instance dynamically with JS
    const d = new Date();
    const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

    const daysLeft = timeDiff(newDate, depDateFromUser, retDateFromUser);

    return ( 
      <div className='App'>
        {/* {
          this.props.submittedOrNot ? (console.log('submittedOrNot is true')) : (console.log('submittedOrNot is false'))
        }
        {
          this.props.pop_up_3_state ? (console.log('pop_up_3_state is true')) : (console.log('pop_up_3_state is false'))
        }
        <Pop_Up
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
        {
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
                  <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/>
                )
              : 
            (
              (daysLeft === "Error: invalid dates") 
              ? 
                (
                  <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>
                )
              :
              (
                (this.props.pop_up_3_state) 
                ?
                  (
                    <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3"/>
                  )
                :
                  null
              )
            )
          )
          :
            null
        }

        {/* <div className="bg">
          <label id="app"> */}
            
          <BodyOfApp />
          {/* </label>
          <footer>
            Background Photo by David Marcu on Unsplash
          </footer> 
        </div> */}
      </div>
    );

  }    
}

const mapStateToProps = state => ({
  submittedOrNot: state.popUp.submittedOrNot,
  pop_up_3_state: state.popUp.pop_up_3_state,
  currentInputs: state.inputs.currentInputs,
});

const mapDispatchToProps = dispatch => ({
  toggleShowPopUp: () => dispatch(toggleShowPopUp()),
  //createTripCardsOrNot: (tripCard) => dispatch(createTripCardsOrNot(tripCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);