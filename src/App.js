import React from 'react';
// import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { render } from '@testing-library/react';

import { connect } from "react-redux";

//import getFunc, { newDate, depDateFromUser, retDateFromUser, city} from "./fetchData";

import timeDiff from "./timeDiff";

// import { createTrip } from "./createTrip";

import { toggleShowPopUp } from "./redux/pop-up/pop-up.actions";
import { displayBlockOrNone_PopUp_1 } from "./redux/pop-up/pop-up.actions";
import { displayBlockOrNone_PopUp_2 } from "./redux/pop-up/pop-up.actions";
import { displayBlockOrNone_PopUp_3 } from "./redux/pop-up/pop-up.actions";
// import { currentProjectData } from "./redux/projectData/projectData.actions";
import { createTripCardsOrNot } from "./redux/createTripCards/createTripCards.actions";

import Pop_Up from "./components/pop-up/pop-up.component";
import BodyOfApp from "./components/bodyOfApp/bodyOfApp.component";

// class App extends React.Component {
  //   constructor() {
    //     super();
    //   }
    
    const App = (
      // submittedOrNot,
      // pop_up_3_state,
      // currentInputs,
      // showPopUp,
      // displayBlockOrNone_PopUp_1,
      // displayBlockOrNone_PopUp_2,
      // displayBlockOrNone_PopUp_3
      props
      ) => {
        
        const displayBlockOrNone_PopUp = (popUpNum) => {
          switch (popUpNum) {
            case 1:
              console.log("popup1 read in switch")
              props.displayBlockOrNone_PopUp_1()
              break;
            case 2:
              console.log("popup2 read in switch")
              props.displayBlockOrNone_PopUp_2()
              break;
            case 3:
              console.log("popup3 read in switch")
              props.displayBlockOrNone_PopUp_3()
              break;
            default:
              return null;
          }
          // return;
        }

        
        // const [setdisplayBlockOrNone_PopUp_1, setdisplayBlockOrNone_PopUp_2, setdisplayBlockOrNone_PopUp_3] = useState({
          //   popUp_1: false,
          //   popUp_2: false,
          //   popUp_3: false,
  // });

  // const displayBlockOrNone_PopUp = (popUpNum) => {
  //   switch (popUpNum) {
  //     case 1:
  //       console.log("popup1 read in switch")
  //       setdisplayBlockOrNone_PopUp_1({ popUp_1: true });
  //       break;
  //     case 2:
  //       console.log("popup2 read in switch")
  //       props.displayBlockOrNone_PopUp_2(
  //         {
  //           displayBlockOrNone_PopUp_2: true
  //         }
  //       )
  //       // return <Pop_Up
  //       //   popUpMessage="Empty city name / dates"
  //       //   popUpNumberID="pop-up-2"
  //       //   style={style_2}
  //       // />
  //       break;
  //     case 3:
  //       console.log("popup3 read in switch")
  //       props.displayBlockOrNone_PopUp_3(
  //         {
  //           displayBlockOrNone_PopUp_3: true
  //         }
  //       )
  //       // return <Pop_Up
  //       //   popUpMessage="Check city name"
  //       //   popUpNumberID="pop-up-3"
  //       //   style={style_3}
  //       // />
  //       break;
  //     default:
  //       return null;
  //   }
  //   // return;
  // }


  // style_1 = (this.props.displayBlockOrNone_PopUp_1 && this.props.showPopUp) ? { display: 'block' } : { display: 'none' }
  // style_2 = (this.props.displayBlockOrNone_PopUp_2 && this.props.showPopUp) ? { display: 'block' } : { display: 'none' }
  // style_3 = (this.props.displayBlockOrNone_PopUp_3 && this.props.showPopUp) ? { display: 'block' } : { display: 'none' }

  // displayBlockOrNone_PopUp = (popUpNum) => {
  //   switch (popUpNum) {
  //     case 1:
  //       console.log("popup1 read in switch")
  //       this.props.displayBlockOrNone_PopUp_1(
  //         {
  //           displayBlockOrNone_PopUp_1: true
  //         }
  //       )   
  //       return <Pop_Up
  //         popUpMessage="Invalid Dates"
  //         popUpNumberID="pop-up-1"
  //         style={this.style_1}
  //       />
  //     case 2:
  //       console.log("popup2 read in switch")
  //       this.props.displayBlockOrNone_PopUp_2(
  //         {
  //           displayBlockOrNone_PopUp_2: true
  //         }
  //       )   
  //       return <Pop_Up
  //         popUpMessage="Empty city name / dates"
  //         popUpNumberID="pop-up-2"
  //         style={this.style_2}
  //       />
  //     case 3:
  //       console.log("popup3 read in switch")
  //       this.props.displayBlockOrNone_PopUp_3(
  //         {
  //           displayBlockOrNone_PopUp_3: true
  //         }
  //       )  
  //       return <Pop_Up
  //         popUpMessage="Check city name"
  //         popUpNumberID="pop-up-3"
  //         style={this.style_3}
  //       /> 
  //     default:
  //       return null;
  //   }
  // }

  // city = this.props.currentInputs.city;
  // depDateFromUser = this.props.currentInputs.depDateFromUser;
  // retDateFromUser = this.props.currentInputs.retDateFromUser;

  // // Create a new date instance dynamically with JS
  // d = new Date();
  // newDate = this.d.getMonth() + 1 + '/' + this.d.getDate() + '/' + this.d.getFullYear();

  // daysLeft = timeDiff(this.newDate, this.depDateFromUser, this.retDateFromUser);

  // componentDidMount() {
  //   const popUpsFunc = () => {
  //     return (this.props.submittedOrNot && this.props.showPopUp)
  //       ?
  //       (
  //         (
  //           (this.city === "" || this.city === null || this.city === undefined) ||
  //           (this.depDateFromUser === "" || this.depDateFromUser === null || this.depDateFromUser === undefined) ||
  //           (this.retDateFromUser === "" || this.retDateFromUser === null || this.retDateFromUser === undefined)
  //         ) ? (
  //             // <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/>//THE REASON POPUP3 KEEPS APPEARING IS BECAUSE ANY POPUP CREATED STAYS THERE AFTER BEING CREATED, AND ONLY DISAPPEARS BY BECOMING DISPLAY: NONE (EVEN CHECK THE ELEMENTS PAGE IN INSPECT, CHECK THE DOM)
  //             () => { this.displayBlockOrNone_PopUp(2) }
  //           )
  //           :
  //           (
  //             (this.daysLeft === "Error: invalid dates")
  //               ?
  //               (
  //                 // <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>
  //                 () => { this.displayBlockOrNone_PopUp(1) }
  //               )
  //               :
  //               (
  //                 (this.props.pop_up_3_state)
  //                   ?
  //                   (
  //                     // <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3" />
  //                     () => { this.displayBlockOrNone_PopUp(3) }
  //                   )
  //                   :
  //                   null
  //               )
  //           )
  //       )
  //       :
  //       null
  //   }
  //   popUpsFunc();
  // }

  // render(){
    
    // const city = props.currentInputs.city;
    // const depDateFromUser = props.currentInputs.depDateFromUser;
    // const retDateFromUser = props.currentInputs.retDateFromUser; 

  const city = props.currentInputs.city;
  const depDateFromUser = props.currentInputs.depDateFromUser;
  const retDateFromUser = props.currentInputs.retDateFromUser; 

    // Create a new date instance dynamically with JS
    const d = new Date();
    const newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

    const daysLeft = timeDiff(newDate, depDateFromUser, retDateFromUser);

    //const popUp3DisplayOrNot = this.props.pop_up_3_state;

    // const style_1 = (this.props.displayBlockOrNone_PopUp_1 && this.props.showPopUp) ? { display: 'block' } : { display: 'none' }
    // const style_2 = (this.props.displayBlockOrNone_PopUp_2 && this.props.showPopUp) ? { display: 'block' } : { display: 'none' }
    // const style_3 = (this.props.displayBlockOrNone_PopUp_3 && this.props.showPopUp) ? { display: 'block' } : { display: 'none' }

    // const displayBlockOrNone_PopUp = (popUpNum) => {
    //   switch (popUpNum) {
    //     case 1:
    //       console.log("popup1 read in switch")
    //       this.props.displayBlockOrNone_PopUp_1(
    //         {
    //           displayBlockOrNone_PopUp_1: true
    //         }
    //         //null
    //       )
    //       // return <Pop_Up
    //       //   popUpMessage="Invalid Dates"
    //       //   popUpNumberID="pop-up-1"
    //       //   style={style_1}
    //       // />
    //       break;
    //     case 2:
    //       console.log("popup2 read in switch")
    //       this.props.displayBlockOrNone_PopUp_2(
    //         {
    //           displayBlockOrNone_PopUp_2: true
    //         }
    //       )
    //       // return <Pop_Up
    //       //   popUpMessage="Empty city name / dates"
    //       //   popUpNumberID="pop-up-2"
    //       //   style={style_2}
    //       // />
    //       break;
    //     case 3:
    //       console.log("popup3 read in switch")
    //       this.props.displayBlockOrNone_PopUp_3(
    //         {
    //           displayBlockOrNone_PopUp_3: true
    //         }
    //       )
    //       // return <Pop_Up
    //       //   popUpMessage="Check city name"
    //       //   popUpNumberID="pop-up-3"
    //       //   style={style_3}
    //       // />
    //       break;
    //     default:
    //       return null;
    //   }
    // }

    // const body =( 
    //   (this.props.submittedOrNot && this.props.showPopUp)
    //     ?
    //     (
    //       (
    //         (city === "" || city === null || city === undefined) ||
    //         (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
    //         (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
    //       ) ? (
    //           // <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/>//THE REASON POPUP3 KEEPS APPEARING IS BECAUSE ANY POPUP CREATED STAYS THERE AFTER BEING CREATED, AND ONLY DISAPPEARS BY BECOMING DISPLAY: NONE (EVEN CHECK THE ELEMENTS PAGE IN INSPECT, CHECK THE DOM)
    //           () => { this.displayBlockOrNone_PopUp(2) }
    //         )
    //         :
    //         (
    //           (daysLeft === "Error: invalid dates")
    //             ?
    //             (
    //               // <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>
    //               () => { this.displayBlockOrNone_PopUp(1) }
    //             )
    //             :
    //             (
    //               (this.props.pop_up_3_state)
    //                 ?
    //                 (
    //                   // <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3" />
    //                   () => { this.displayBlockOrNone_PopUp(3) }
    //                 )
    //                 :
    //                 null
    //             )
    //         )
    //     )
    //     :
    //     null);
    
    // const popUpConditionals = () => {
    //   for (let index = 0; index < 1; index++) {
    //     (
    //       (city === "" || city === null || city === undefined) ||
    //       (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
    //       (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
    //     ) ? (
    //         // <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/>//THE REASON POPUP3 KEEPS APPEARING IS BECAUSE ANY POPUP CREATED STAYS THERE AFTER BEING CREATED, AND ONLY DISAPPEARS BY BECOMING DISPLAY: NONE (EVEN CHECK THE ELEMENTS PAGE IN INSPECT, CHECK THE DOM)
    //         // () => { displayBlockOrNone_PopUp(2) }
    //         console.log("City: " + city),
    //         displayBlockOrNone_PopUp(2)
    //       )
    //       :
    //       (
    //         (daysLeft === "Error: invalid dates")
    //           ?
    //           (
    //             // <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>
    //             // () => { displayBlockOrNone_PopUp(1) }
    //             displayBlockOrNone_PopUp(1)
    //           )
    //           :
    //           (
    //             (props.pop_up_3_state.pop_up_3_state)
    //               ?
    //               (
    //                 // <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3" />
    //                 // () => { displayBlockOrNone_PopUp(3) }
    //                 displayBlockOrNone_PopUp(3)
    //                 //null
    //               )
    //               :
    //               null
    //           )
    //       )
    //   }
    // }

    let popUpNumber;

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
        {/* {
          this.props.submittedOrNot ? (console.log('submittedOrNot is true')) : (console.log('submittedOrNot is false'))
        }
        {
          this.props.pop_up_3_state ? (console.log('pop_up_3_state is true')) : (console.log('pop_up_3_state is false'))
        } */}
        {/* {console.log(this.props.pop_up_3_state)} */}
        {/* {
          (this.props.submittedOrNot && this.props.showPopUp)
          ?
          (
            (
              (city === "" || city === null || city === undefined) ||
              (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
              (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
            ) ? (
                  // <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/>//THE REASON POPUP3 KEEPS APPEARING IS BECAUSE ANY POPUP CREATED STAYS THERE AFTER BEING CREATED, AND ONLY DISAPPEARS BY BECOMING DISPLAY: NONE (EVEN CHECK THE ELEMENTS PAGE IN INSPECT, CHECK THE DOM)
                  this.displayBlockOrNone_PopUp(2)
                )
              : 
                (
                  (daysLeft === "Error: invalid dates") 
                  ? 
                    (
                      // <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>
                      this.displayBlockOrNone_PopUp(1)
                    )
                  :
                    (
                      (this.props.pop_up_3_state)
                        ?
                        (
                          // <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3" />
                          this.displayBlockOrNone_PopUp(3)
                        )
                        :
                        null
                    )
                )
            )
            :
            null
        } */}

        {/* CHECK POPUP EXIT */}

        {
          (props.submittedOrNot && props.showPopUp)
            ?
            (
              (
                (city === "" || city === null || city === undefined) ||
                (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
                (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
              ) ? (
                  // <Pop_Up popUpMessage="Empty city name / dates" popUpNumberID="pop-up-2"/>//THE REASON POPUP3 KEEPS APPEARING IS BECAUSE ANY POPUP CREATED STAYS THERE AFTER BEING CREATED, AND ONLY DISAPPEARS BY BECOMING DISPLAY: NONE (EVEN CHECK THE ELEMENTS PAGE IN INSPECT, CHECK THE DOM)
                  // () => { displayBlockOrNone_PopUp(2) }
                  console.log("City: " + city),
                  displayBlockOrNone_PopUp(2)
                )
                :
                (
                  (daysLeft === "Error: invalid dates")
                    ?
                    (
                      // <Pop_Up popUpMessage="Invalid Dates" popUpNumberID="pop-up-1"/>
                      // () => { displayBlockOrNone_PopUp(1) }
                      displayBlockOrNone_PopUp(1)
                    )
                    :
                    (
                      (props.pop_up_3_state.pop_up_3_state)
                        ?
                        (
                          // <Pop_Up popUpMessage="Check city name" popUpNumberID="pop-up-3" />
                          // () => { displayBlockOrNone_PopUp(3) }
                          displayBlockOrNone_PopUp(3)
                          //null
                        )
                        :
                        null
                    )
                )
            )
            // popUpConditionals()
            // (
            //   (
            //     (city === "" || city === null || city === undefined) ||
            //     (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
            //     (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
            //   ) ? (
            //       console.log("City: " + city),
            //       popUpNumber = 2
            //     )
            //     :
            //     (
            //       (daysLeft === "Error: invalid dates")
            //         ?
            //         (
            //           popUpNumber = 1
            //         )
            //         :
            //         (
            //           (props.pop_up_3_state.pop_up_3_state)
            //             ?
            //             (
            //               popUpNumber = 3
            //             )
            //             :
            //             popUpNumber = null
            //         )
            //     )
            // )
            :
            null
        }

        {/* {displayBlockOrNone_PopUp(popUpNumber)} */}

        {/* {
          (props.submittedOrNot && props.showPopUp) ?
            (this.props.currentProjectData).map((tripDataItem, index) => {
              return <Pop_Up
                popUpMessage="Empty city name / dates"
                popUpNumberID="pop-up-2"
                style={(props.displayBlockOrNone_PopUp_2.displayBlockOrNone_PopUp_2 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
              />
            })
            : null
        } */}

        <Pop_Up 
          popUpMessage="Empty city name / dates" 
          popUpNumberID="pop-up-2" 
          style={(props.displayBlockOrNone_PopUp_2 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
        />
        <Pop_Up 
          popUpMessage="Invalid Dates" 
          popUpNumberID="pop-up-1" 
          style={(props.displayBlockOrNone_PopUp_1 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
        />
        <Pop_Up 
          popUpMessage="Check city name" 
          popUpNumberID="pop-up-3" 
          style={(props.displayBlockOrNone_PopUp_3 && props.showPopUp) ? { display: 'block' } : { display: 'none' }}
        />

        {/* {body} */}

        {
          console.log(props.displayBlockOrNone_PopUp_1)  
        }
        {
          console.log(props.displayBlockOrNone_PopUp_2)  
        }
        {
          console.log(props.displayBlockOrNone_PopUp_3)  
        }

        {/* {
          props.displayBlockOrNone_PopUp_1.displayBlockOrNone_PopUp_1 ? (console.log('Pop Up 1: Block')) : (console.log('Pop Up 1: None'))
        }
        {
          props.displayBlockOrNone_PopUp_2.displayBlockOrNone_PopUp_2 ? (console.log('Pop Up 2: Block')) : (console.log('Pop Up 2: None'))
        }
        {
          props.displayBlockOrNone_PopUp_3.displayBlockOrNone_PopUp_3 ? (console.log('Pop Up 3: Block')) : (console.log('Pop Up 3: None'))
        } */}

        {/* <Pop_Up
          popUpMessage="Empty city name / dates"
          popUpNumberID="pop-up-2"
          style={style_2}
        />
        <Pop_Up
          popUpMessage="Invalid Dates"
          popUpNumberID="pop-up-1"
          style={style_1}
        />
        <Pop_Up
          popUpMessage="Check city name"
          popUpNumberID="pop-up-3"
          style={style_3}
        /> */}

        {/* THE RESULT OF IT HAS TO BE A COMPONENT */}

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

  // }    
}

const mapStateToProps = state => ({
  submittedOrNot: state.popUp.submittedOrNot,
  pop_up_3_state: state.popUp.pop_up_3_state,
  currentInputs: state.inputs.currentInputs,
  showPopUp: state.popUp.showPopUp,
  displayBlockOrNone_PopUp_1: state.popUp.displayBlockOrNone_PopUp_1,
  displayBlockOrNone_PopUp_2: state.popUp.displayBlockOrNone_PopUp_2,
  displayBlockOrNone_PopUp_3: state.popUp.displayBlockOrNone_PopUp_3
});

const mapDispatchToProps = dispatch => ({
  toggleShowPopUp: () => dispatch(toggleShowPopUp()),
  //createTripCardsOrNot: (tripCard) => dispatch(createTripCardsOrNot(tripCard))
  // displayBlockOrNone_PopUp_1: (popUp) => dispatch(displayBlockOrNone_PopUp_1(popUp)),
  // displayBlockOrNone_PopUp_2: (popUp) => dispatch(displayBlockOrNone_PopUp_2(popUp)),
  // displayBlockOrNone_PopUp_3: (popUp) => dispatch(displayBlockOrNone_PopUp_3(popUp))
  displayBlockOrNone_PopUp_1: () => dispatch(displayBlockOrNone_PopUp_1()),
  displayBlockOrNone_PopUp_2: () => dispatch(displayBlockOrNone_PopUp_2()),
  displayBlockOrNone_PopUp_3: () => dispatch(displayBlockOrNone_PopUp_3())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);