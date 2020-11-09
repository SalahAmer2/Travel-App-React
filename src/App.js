import React from 'react';
import './App.scss';
import { connect } from "react-redux";

import timeDiff from "./timeDiff";

import { toggleShowPopUp } from "./redux/pop-up/pop-up.actions";
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
                  <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/> //This->this.state.pop_up_exit should be made in mapStateToProps in its own component
                )
              : 
            (
              (daysLeft === "Error: invalid dates") 
              ? 
                (
                  <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>//Now (Next) is this, Pop_Up_1
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

        <div className="bg">
          <label id="app">
            
          <BodyOfApp />
          </label>
        </div>
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
  createTripCardsOrNot: (tripCard) => dispatch(createTripCardsOrNot(tripCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);