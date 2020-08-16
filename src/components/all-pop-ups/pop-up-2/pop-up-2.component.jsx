import React from "react";
import { connect } from "react-redux";
import { togglePopUpExit } from "../../../redux/pop-up/pop-up.actions";

class Pop_Up_2 extends Component {

    handleExit = () => {
        this.props.togglePopUpExit()
    }

    render ({ handleExit, pop_up_exit }) {     
        return (
            <div id="pop-up-2" className={`pop-up pop-up-drop ${pop_up_exit ? "pop-up-swing" : ""}`}>
                <div className="container">
                    <div className="exit" onClick={handleExit}>x</div>
                    <h1>Empty city name / dates</h1>
                </div>
            </div>
        )
    }

}
const mapStateToProps = state => ({
    pop_up_exit: state.popUp.pop_up_exit
});

const mapDispatchToProps = dispatch => ({
    togglePopUpExit: popUp => dispatch(togglePopUpExit(popUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pop_Up_2);