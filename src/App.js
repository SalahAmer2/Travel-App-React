import React from 'react';
import './App.scss';

import { connect } from "react-redux";

import Pop_Up from "./components/pop-up/pop-up.component";
import BodyOfApp from "./components/bodyOfApp/bodyOfApp.component";

const App = (props) => {
  return ( 
    <div className='App'>
      <Pop_Up 
        popUpMessage="Invalid Dates" 
        popUpNumberID="pop-up-1" 
        style={(props.displayBlockOrNone_PopUp_1 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
      />
      <Pop_Up
        popUpMessage="Empty city name / dates"
        popUpNumberID="pop-up-2"
        style={(props.displayBlockOrNone_PopUp_2 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
      />
      <Pop_Up 
        popUpMessage="Check city name" 
        popUpNumberID="pop-up-3" 
        style={(props.displayBlockOrNone_PopUp_3 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
      />

      {
        console.log(props.displayBlockOrNone_PopUp_1)  
      }
      {
        console.log(props.displayBlockOrNone_PopUp_2)  
      }
      {
        console.log(props.displayBlockOrNone_PopUp_3)  
      }

      {
        props.displayBlockOrNone_PopUp_1 ? (console.log('Pop Up 1: Block')) : (console.log('Pop Up 1: None'))
      }
      {
        props.displayBlockOrNone_PopUp_2 ? (console.log('Pop Up 2: Block')) : (console.log('Pop Up 2: None'))
      }
      {
        props.displayBlockOrNone_PopUp_3 ? (console.log('Pop Up 3: Block')) : (console.log('Pop Up 3: None'))
      }
      <BodyOfApp />
    </div>
  );
}

const mapStateToProps = state => ({
  showPopUp: state.popUp.showPopUp,
  displayBlockOrNone_PopUp_1: state.popUp.displayBlockOrNone_PopUp_1,
  displayBlockOrNone_PopUp_2: state.popUp.displayBlockOrNone_PopUp_2,
  displayBlockOrNone_PopUp_3: state.popUp.displayBlockOrNone_PopUp_3
});

export default connect(mapStateToProps)(App);