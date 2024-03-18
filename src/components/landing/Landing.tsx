import React from 'react'

import { HiDeviceMobile, HiDesktopComputer, HiMap } from "react-icons/hi";


const Landing = (props) => {

    return (
        <div className="landing">

            <div className="landing__hero">
                <div className="landing__hero-content">

                    <div className="landing__hero-title">
                        <h1><span><i>map of </i> </span> Malazan Book of the Fallen</h1>
                    </div>
                    <div className="landing__hero-description">
                        <p>Trace the tales of the Fallen and unravel the saga with the Interactive 3D Map and detailed timeline. </p>
                        <p>Created using three.js.</p>
                    </div>

                    <div className="landing__mode">
                        <button className="landing__mode-button" onClick={() => props.onModeHandler(2)}>
                            <div className="landing__mode-button-title">
                                <HiMap />
                                <span>Basic</span>
                            </div>
                            <span className="landing__mode-button-description">few animations</span>
                        </button>

                        <button className="landing__mode-button" onClick={() => props.onModeHandler(1)}>
                            <div className="landing__mode-button-title">
                                <HiDeviceMobile />
                                <span>Standard</span>
                            </div>
                            <span className="landing__mode-button-description">recommended</span>
                        </button>

                        <button className="landing__mode-button" onClick={() => props.onModeHandler(0)}>
                            <div className="landing__mode-button-title">
                                <HiDesktopComputer />
                                <span>Full 3D</span>
                            </div>
                            <span className="landing__mode-button-description">desktop (may lag)</span>
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