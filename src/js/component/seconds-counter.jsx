import React from "react";
import Proptypes from "prop-types";
import { LuClock9 } from 'react-icons/lu';
import DigitDisplay from "./digit-display";


export default function SecondsCounter({seconds}) {
    const digits = seconds.toString().padStart(6, '0').split("");

    return <div className="container-fluid d-flex align-items-center justify-content-center text-light bg-dark display-1 fw-semibold py-5">
        <div className="container d-flex justify-content-center align-items-center">

            {/* Clock Container*/}
            <div className="d-inline-flex p-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}>
                <LuClock9 />
            </div>

            {/* Numbers Container */}
            <div className="d-inline-flex align-items-center mx-4">
                <div className="row">
                    {
                        digits.map((digit, index) => {
                            return <DigitDisplay key={index} digit={digit}></DigitDisplay>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

SecondsCounter.propTypes = {
	seconds: Proptypes.number
}