import React from "react";

export const Pop_Up_1 = ({ handleExit }) => (
    <div id="pop-up-1" className={`pop-up pop-up-drop ${pop_up_swing}`}>
        <div className="container">
            <div className="exit" onClick={handleExit}>x</div>
            <h1>Invalid Dates</h1>
        </div>
    </div>
)