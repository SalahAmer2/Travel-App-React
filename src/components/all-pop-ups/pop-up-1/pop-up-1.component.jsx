import React, { Component } from "react";

export const Pop_Up_1 = ({ handleExit }) => (
    <div id="pop-up-1" className={`pop-up pop-up-drop ${pop_up_swing}`}>
        <div className="container">
            <div className="exit" onClick={handleExit}>x</div>
            <h1>Invalid Dates</h1>
        </div>
    </div>
)

class Pop_Up_1 extends Component {
    constructor() {
        super();

        this.state = {
            showPopUp: false,
            pop_up_exit: false
        };
    }

    handleChange() {
        this.setState({ pop_up_exit: true });
        setTimeout(() => {
            this.setState({ showPopUp: false });
            this.setState({ pop_up_exit: false });
        }, 1000);
    }

    render() {

        const style = this.state.showPopUp ? { display: 'block' } : { display: 'none'};

        return(
            <div id="pop-up-1" style={style} className={`pop-up pop-up-drop ${this.state.pop_up_exit ? "pop-up-swing" : null}`}>
                <div className="container">
                    <div className="exit" onClick={this.handleChange}>x</div>
                    <h1>Invalid Dates</h1>
                </div>
            </div>
        )
    }
}

export default Pop_Up_1;