import React from "react";
import { LuClock9 } from 'react-icons/lu';


export default function SecondsCounter() {
    return <div className="container-fluid d-flex align-items-center justify-content-center text-light bg-dark display-1 fw-semibold py-5">
        <div className="container d-flex justify-content-center align-items-center">

            {/* Clock Container*/}
            <div className="d-inline-flex p-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}>
                <LuClock9 />
            </div>

            {/* Numbers Container */}
            <div className="d-inline-flex align-items-center mx-4">
                <div className="row">

                    {/* Number */}
                    <div className="col-2">
                        <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}><p>0</p></div>
                    </div>
                    
                    {/* Number */}
                    <div className="col-2">
                        <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}><p>0</p></div>
                    </div>

                    {/* Number */}
                    <div className="col-2">
                        <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}><p>0</p></div>
                    </div>

                    {/* Number */}
                    <div className="col-2">
                        <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}><p>0</p></div>
                    </div>

                    {/* Number */}
                    <div className="col-2">
                        <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}><p>0</p></div>
                    </div>

                    {/* Number */}
                    <div className="col-2">
                        <div className="d-inline-flex py-2 px-4 bg-white rounded" style={{"--bs-bg-opacity": 0.025, border: "1px solid rgba(255,255,255, 0.1)"}}><p>0</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}