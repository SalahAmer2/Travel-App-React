import React from "react";
import { connect } from "react-redux";
import { 
    toggleShowPopUp, 
    togglePopUpExit, 
    toggleSubmittedOrNot,
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

        togglePopUpExit();
        setTimeout(() => {
            this.props.displayBlockOrNone_PopUp_1_Action(false);
            this.props.displayBlockOrNone_PopUp_2_Action(false);
            this.props.displayBlockOrNone_PopUp_3_Action(false);
            toggleShowPopUp();
            togglePopUpExit();
            toggleSubmittedOrNot(false);
        }, 1000)
    }

    render() {
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
    submittedOrNot: state.popUp.submittedOrNot
});

const mapDispatchToProps = dispatch => ({
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    togglePopUpExit: () => dispatch(togglePopUpExit()),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp)),
    displayBlockOrNone_PopUp_1_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_1(popUp)),
    displayBlockOrNone_PopUp_2_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_2(popUp)),
    displayBlockOrNone_PopUp_3_Action: (popUp) => dispatch(displayBlockOrNone_PopUp_3(popUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up);