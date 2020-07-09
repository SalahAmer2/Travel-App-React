import React from "react";

export const Pop_Up_3 = ({ handleExit }) => (
    <div id="pop-up-3" className={`pop-up pop-up-drop ${pop_up_swing}`}>
        <div className="container">
            <div className="exit" onClick={handleExit}>x</div>
            <h1>Check city name</h1>
        </div>
    </div>
)
