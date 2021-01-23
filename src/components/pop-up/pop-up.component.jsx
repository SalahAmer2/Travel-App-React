// import React from "react";
// import { connect } from "react-redux";
// import {
//     toggleShowPopUp,
//     togglePopUpExit,
//     toggleSubmittedOrNot,
//     togglePopUp3State,
//     displayBlockOrNone_PopUp_1,
//     displayBlockOrNone_PopUp_2,
//     displayBlockOrNone_PopUp_3
// } from "../../redux/pop-up/pop-up.actions";

// import './pop-up.styles.scss'

// const Pop_Up = (popUpMessage, popUpNumberID, style) => { 

//     const handleExit = () => {
//         const { toggleShowPopUp } = this.props;
//         const { togglePopUpExit } = this.props;
//         const { toggleSubmittedOrNot } = this.props;
//         const { togglePopUp3State } = this.props;

//         togglePopUpExit();
//         setTimeout(() => {
//             togglePopUp3State({
//                 pop_up_3_state: false
//             }); // To make it false
//             console.log(this.props.pop_up_3_state);
//             this.props.displayBlockOrNone_PopUp_1({
//                 displayBlockOrNone_PopUp_1: false
//             });
//             this.props.displayBlockOrNone_PopUp_1({
//                 displayBlockOrNone_PopUp_2: false
//             });
//             this.props.displayBlockOrNone_PopUp_1({
//                 displayBlockOrNone_PopUp_3: false
//             });
//             toggleShowPopUp();
//             togglePopUpExit();
//             toggleSubmittedOrNot({
//                 submittedOrNot: false
//             });
//         }, 1000)
//     }

//     // const classNamesOfPopUp = `pop-up pop-up-drop ${this.props.pop_up_exit ? "pop-up-swing" : ""}`;

//     return (
//         <div
//             id={popUpNumberID}
//             style={style} 
//             className={`pop-up pop-up-drop ${this.props.pop_up_exit ? "pop-up-swing" : ""}`}
//         >
//             <div className="container">
//                 <div className="exit" onClick={() => { handleExit()} }>x</div>
//                 <h1>{popUpMessage}</h1>
//             </div>
//         </div>
//     )

// }

// const mapStateToProps = state => ({
//     showPopUp: state.popUp.showPopUp,
//     pop_up_exit: state.popUp.pop_up_exit,
//     submittedOrNot: state.popUp.submittedOrNot,
//     pop_up_3_state: state.popUp.pop_up_3_state
// });

// const mapDispatchToProps = dispatch => ({
//     toggleShowPopUp: () => dispatch(toggleShowPopUp()),
//     togglePopUpExit: () => dispatch(togglePopUpExit()),
//     togglePopUp3State: popUp => dispatch(togglePopUp3State(popUp)),
//     toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
//     displayBlockOrNone_PopUp_1: (popUp) => dispatch(displayBlockOrNone_PopUp_1(popUp)),
//     displayBlockOrNone_PopUp_2: (popUp) => dispatch(displayBlockOrNone_PopUp_2(popUp)),
//     displayBlockOrNone_PopUp_3: (popUp) => dispatch(displayBlockOrNone_PopUp_3(popUp))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up);

import React from "react";
import { connect } from "react-redux";
import { 
    toggleShowPopUp, 
    togglePopUpExit, 
    toggleSubmittedOrNot, 
    togglePopUp3State, 
    displayBlockOrNone_PopUp_1, 
    displayBlockOrNone_PopUp_2, 
    displayBlockOrNone_PopUp_3 
} from "../../redux/pop-up/pop-up.actions";

import './pop-up.styles.scss'

class Pop_Up extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleExit = () => {
        const { toggleShowPopUp } = this.props;
        const { togglePopUpExit } = this.props;
        const { toggleSubmittedOrNot } = this.props;
        const { togglePopUp3State } = this.props;

        togglePopUpExit();
        setTimeout(() => {
            // togglePopUp3State({
            //     pop_up_3_state: false
            // }); // To make it false
            // console.log(this.props.pop_up_3_state);
            // this.props.displayBlockOrNone_PopUp_1();
            // this.props.displayBlockOrNone_PopUp_2();
            // this.props.displayBlockOrNone_PopUp_3();
            this.props.displayBlockOrNone_PopUp_1_Action(false);
            this.props.displayBlockOrNone_PopUp_2_Action(false);
            this.props.displayBlockOrNone_PopUp_3_Action(false);
            toggleShowPopUp();
            togglePopUpExit();
            toggleSubmittedOrNot(false);
            // toggleSubmittedOrNot({
            //     submittedOrNot: false
            // });
        }, 1000)
    }

    render() {
        // const style = this.props.showPopUp ? { display: 'block' } : { display: 'none' };

        return (
            <div 
                id={this.props.popUpNumberID} 
                style={this.props.style} 
                className={`pop-up pop-up-drop ${this.props.pop_up_exit ? "pop-up-swing" : ""}`}
            >
                <div className="container">
                    <div className="exit" onClick={this.handleExit}>x</div>
                    <h1>{this.props.popUpMessage}</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showPopUp: state.popUp.showPopUp,
    pop_up_exit: state.popUp.pop_up_exit,
    submittedOrNot: state.popUp.submittedOrNot,
    pop_up_3_state: state.popUp.pop_up_3_state
});

const mapDispatchToProps = dispatch => ({
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    togglePopUpExit: () => dispatch(togglePopUpExit()),
    togglePopUp3State: popUp => dispatch(togglePopUp3State(popUp)),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
    // displayBlockOrNone_PopUp_1_Action: () => dispatch(displayBlockOrNone_PopUp_1()),
    // displayBlockOrNone_PopUp_2_Action: () => dispatch(displayBlockOrNone_PopUp_2()),
    // displayBlockOrNone_PopUp_3_Action: () => dispatch(displayBlockOrNone_PopUp_3())
    displayBlockOrNone_PopUp_1_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_1(popUp)),
    displayBlockOrNone_PopUp_2_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_2(popUp)),
    displayBlockOrNone_PopUp_3_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_3(popUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up);