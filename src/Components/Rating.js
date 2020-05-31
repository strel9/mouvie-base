import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ vote }) => {

    return (
        <>
            <CircularProgressbar
                value={vote}
                text={`${vote}%`}
                strokeWidth={7}
                styles={buildStyles({
                    textColor: "#1B69D9",
                    pathColor: "#1B69D9",
                    trailColor: ""
                })}
            />
        </>
    )
}

export default Rating
