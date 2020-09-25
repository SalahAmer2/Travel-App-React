import React from "react";

import { connect } from "react-redux";

import { Pop_Up_1 } from "./pop-up-1/pop-up-1.component";
import { Pop_Up_2 } from "./pop-up-2/pop-up-2.component";
import { Pop_Up_3 } from "./pop-up-3/pop-up-3.component";

const All_Pop_Ups = ({ pop_up_3_state, pop_up_exit, submittedOrNot }) => (
    <div>
        {
            submittedOrNot ?
                (
                    (
                        (city === "" || city === null || city === undefined) ||
                        (depDateFromUser === "" || depDateFromUser === null || depDateFromUser === undefined) ||
                        (retDateFromUser === "" || retDateFromUser === null || retDateFromUser === undefined)
                    ) ?
                        <Pop_Up_2 handleExit={handleExit} pop_up_swing={pop_up_exit ? "pop-up-swing" : null} />
                        :
                        (
                            (daysLeft === "Error: invalid dates") ?
                                <Pop_Up_1 handleExit={handleExit} pop_up_swing={pop_up_exit ? "pop-up-swing" : null} />
                                :
                                (
                                    (pop_up_3_state) ?
                                        <Pop_Up_3 handleExit={handleExit} pop_up_swing={pop_up_exit ? "pop-up-swing" : null} />
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

const mapStateToProps = state => ({
    pop_up_3_state: state.popUp.pop_up_3_state,
    pop_up_exit: state.popUp.pop_up_exit,
    submittedOrNot: state.popUp.submittedOrNot
});

export default connect(mapStateToProps)(All_Pop_Ups);