import React, { Component } from "react";

import { Pop_Up_1 } from "./pop-up-1/pop-up-1.component";
import { Pop_Up_2 } from "./pop-up-2/pop-up-2.component";
import { Pop_Up_3 } from "./pop-up-3/pop-up-3.component";

class All_Pop_Ups extends Component {
    constructor() {
        super();

        this.state = {

        };
    }
    render(){

        return(
            <div>
                {
                    this.state.submittingOrNot ?
                        (
                            (
                                (city === "" || city === null || city === undefined) ||
                                (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
                                (returnDateFromUser === "" || returnDateFromUser === null || returnDateFromUser === undefined)
                            ) ?
                                <Pop_Up_2 handleExit={handleExit} pop_up_swing={this.state.pop_up_exit ? "pop-up-swing" : null} />
                                :
                                (
                                    (daysLeft === "Error: invalid dates") ?
                                        <Pop_Up_1 handleExit={handleExit} pop_up_swing={this.state.pop_up_exit ? "pop-up-swing" : null} />
                                        :
                                        (
                                            (this.state.pop_up_3_state) ?
                                                <Pop_Up_3 handleExit={handleExit} pop_up_swing={this.state.pop_up_exit ? "pop-up-swing" : null} />
                                                :
                                                null
                                        )
                                )
                        )
                        :
                        null
                }
            </div>
        )   
    }
}