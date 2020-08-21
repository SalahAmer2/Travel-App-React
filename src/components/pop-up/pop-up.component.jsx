import React from "react";
import { connect } from "react-redux";
import { toggleShowPopUp, togglePopUpExit, toggleSubmittedOrNot } from "../../redux/pop-up/pop-up.actions";

import './pop-up.styles.scss'

// export const Pop_Up_1 = ({ handleExit }) => (
//     <div id="pop-up-1" className={`pop-up pop-up-drop ${pop_up_swing}`}>
//         <div className="container">
//             <div className="exit" onClick={handleExit}>x</div>
//             <h1>Invalid Dates</h1>
//         </div>
//     </div>
// )

class Pop_Up extends React.Component {

// const Pop_Up = ({ toggleShowPopUp, togglePopUpExit, pop_up_exit, showPopUp, popUpMessage, popUpNumberID }) => {

    handleExit = () => {
        // this.setState({ pop_up_exit: true });
        // setTimeout(() => {
        //     this.setState({ showPopUp: false });
        //     this.setState({ pop_up_exit: false });
        // }, 1000);

        const { toggleShowPopUp } = this.props;
        const { togglePopUpExit } = this.props;
        const { toggleSubmittedOrNot } = this.props;

        togglePopUpExit();
        setTimeout(() => {
            toggleShowPopUp();
            togglePopUpExit();
            toggleSubmittedOrNot({
                submittedOrNot: false
            });
        }, 1000)

        // const { submittedOrNot } = this.props;
        // submittedOrNot ? (console.log('submittedOrNot is true')) : (console.log('submittedOrNot is false'))
    }

    render() {
        const style = this.props.showPopUp ? { display: 'block' } : { display: 'none' };

        return (
            <div id={this.props.popUpNumberID} style={style} className={`pop-up pop-up-drop ${this.props.pop_up_exit ? "pop-up-swing" : ""}`}>
                <div className="container">
                    <div className="exit" onClick={this.handleExit}>x</div>
                    <h1>{this.props.popUpMessage}</h1>
                </div>
            </div>
        )
    }
}
//mapStateToProps-> data, mapDispatchToProps-> action (function)

const mapStateToProps = state => ({
    showPopUp: state.popUp.showPopUp,
    pop_up_exit: state.popUp.pop_up_exit,
    submittedOrNot: state.popUp.submittedOrNot
});

const mapDispatchToProps = dispatch => ({
    toggleShowPopUp: () => dispatch(toggleShowPopUp()),
    togglePopUpExit: () => dispatch(togglePopUpExit()),
    toggleSubmittedOrNot: popUp => dispatch(toggleSubmittedOrNot(popUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up);