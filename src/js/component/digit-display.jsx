import React from "react";
import Proptypes from "prop-types";

export default function DigitDisplay({digit}) {
    return (
        <div className="col-2">
            <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}>
                <p>{digit}</p>
            </div>
        </div>
    );
}

DigitDisplay.propTypes = {
	digit: Proptypes.string
}