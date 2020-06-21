import React from "react";

export const Pop_Up_2 = ({ handleExit, pop_up_swing }) => (
    <div id="pop-up-2" className={`pop-up pop-up-drop ${pop_up_swing}`}>
        <div className="container">
            <div className="exit" onClick={handleExit}>x</div>
            <h1>Empty city name / dates</h1>
        </div>
    </div>
)