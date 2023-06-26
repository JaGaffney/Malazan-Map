import React from 'react'

import { HiDeviceMobile, HiDesktopComputer } from "react-icons/hi";

const Landing = (props) => {

    return (
        <div className="landing">

            <div className="landing__hero">
                <div className="landing__hero-content">

                    <div className="landing__hero-title">
                        <h1><span><i>map of </i> </span> Malazan Book of the Fallen</h1>
                    </div>
                    <div className="landing__hero-description">
                        <p>Interactive 3D map which features a detailed timeline of main character movements, key plot points and relevant Points of Interest throughout the series. </p>
                        <p>You have the control on how spoiler filled you want your experience to be, with the option to filter out by Book or Area (By default only Book 1 relevant data is shown).</p>
                    </div>

                    <div className="landing__mode">
                        <button className="landing__mode-button" onClick={() => props.onModeHandler(2)}>
                            <div className="landing__mode-button-title">
                                <HiDeviceMobile />
                                <span>Basic</span>
                            </div>
                            <span className="landing__mode-button-description">no animations</span>
                        </button>

                        <button className="landing__mode-button" onClick={() => props.onModeHandler(1)}>
                            <div className="landing__mode-button-title">
                                <HiDeviceMobile />
                                <span>Fast</span>
                            </div>
                            <span className="landing__mode-button-description">mobile, tablets or slower devices</span>
                        </button>

                        <button className="landing__mode-button" onClick={() => props.onModeHandler(0)}>
                            <div className="landing__mode-button-title">
                                <HiDesktopComputer />
                                <span>Standard</span>
                            </div>
                            <span className="landing__mode-button-description">desktop and tablets</span>
                        </button>
                    </div>
                </div>

                <img className={`landing__hero-image `} src={process.env.PUBLIC_URL + "/images/test3.jpg"} alt="" />
            </div>

            <img className="landing__background-image" src={process.env.PUBLIC_URL + "/images/map-base-small.png"} alt="" />
        </div>
    )
}

export default Landing