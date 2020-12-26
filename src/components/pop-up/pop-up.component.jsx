import React from "react";
import { connect } from "react-redux";
import { toggleShowPopUp, togglePopUpExit, toggleSubmittedOrNot, togglePopUp3State } from "../../redux/pop-up/pop-up.actions";

import './pop-up.styles.scss'

class Pop_Up extends React.Component {

    handleExit = () => {
        const { toggleShowPopUp } = this.props;
        const { togglePopUpExit } = this.props;
        const { toggleSubmittedOrNot } = this.props;
        const { togglePopUp3State } = this.props;

        togglePopUpExit();
        setTimeout(() => {
            togglePopUp3State({
                pop_up_3_state: false
            }); // To make it false
            console.log(this.props.pop_up_3_state)
            toggleShowPopUp();
            togglePopUpExit();
            toggleSubmittedOrNot({
                submittedOrNot: false
            });
        }, 1000)
    }

    render() {
        // const style = this.props.showPopUp ? { display: 'block' } : { display: 'none' };

        return (
            <div 
                id={this.props.popUpNumberID} 
                // style={style} 
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
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up);