import React from "react";
import { connect } from "react-redux";
import { toggleShowPopUp, togglePopUpExit } from "../../../redux/pop-up/pop-up.actions";

export const Pop_Up_1 = ({ handleExit }) => (
    <div id="pop-up-1" className={`pop-up pop-up-drop ${pop_up_swing}`}>
        <div className="container">
            <div className="exit" onClick={handleExit}>x</div>
            <h1>Invalid Dates</h1>
        </div>
    </div>
)

export const Pop_Up_1 = ({ handleExit }) => {

    const handleExit = () => {
        this.setState({ pop_up_exit: true });
        setTimeout(() => {
            this.setState({ showPopUp: false });
            this.setState({ pop_up_exit: false });
        }, 1000);
    }

    const style = this.state.showPopUp ? { display: 'block' } : { display: 'none'};

    return(
        <div id="pop-up-1" style={style} className={`pop-up pop-up-drop ${this.state.pop_up_exit ? "pop-up-swing" : ""}`}>
            <div className="container">
                <div className="exit" onClick={handleExit}>x</div>
                <h1>Invalid Dates</h1>
            </div>
        </div>
    )
}

//mapStateToProps-> data, mapDispatchToProps-> action (function)

const mapStateToProps = state => ({
    showPopUp: state.popUp.showPopUp,
    pop_up_exit: state.popUp.pop_up_exit
});

const mapDispatchToProps = dispatch => ({
    toggleShowPopUp: popUp => dispatch(toggleShowPopUp(popUp)),
    togglePopUpExit: popUp => dispatch(togglePopUpExit(popUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up_1);