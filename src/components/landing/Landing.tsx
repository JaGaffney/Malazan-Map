import { FaDiscord } from "react-icons/fa";
import { HiBeaker, HiAcademicCap, HiMap } from "react-icons/hi";

interface ILanding {
    onModeHandler: (data: number) => void
}
const Landing = ({ onModeHandler }: ILanding) => {

    return (
        <div className="landing">

            <div className="landing__hero">
                <div className="landing__hero-content">

                    <div className="landing__hero-title">
                        <h1><span><i>Malazan</i></span>  Map of the Fallen</h1>
                    </div>
                    <div className="landing__hero-description">
                        <p>Trace the tales of the Fallen and unravel the saga with the Interactive 3D Map and detailed timeline. </p>

                        <div>
                            <a className="landing__hero-socials" href="https://discord.gg/xmwVBjQ6"><FaDiscord /></a>
                        </div>
                    </div>

                    <div className="landing__mode">
                        {/* <button className="landing__mode-button" onClick={() => onModeHandler(2)}>
                            <div className="landing__mode-button-title">
                                <HiMap />
                                <span>Basic</span>
                            </div>
                            <span className="landing__mode-button-description">few animations</span>
                        </button> */}

                        <button className="landing__mode-button" onClick={() => onModeHandler(1)}>
                            <div className="landing__mode-button-title">
                                <HiMap />
                                <span>Standard</span>
                            </div>
                            <span className="landing__mode-button-description">recommended</span>
                        </button>

                        <button className="landing__mode-button" onClick={() => onModeHandler(0)}>
                            <div className="landing__mode-button-title">
                                <HiBeaker />
                                <span>Experimental</span>
                            </div>
                            <span className="landing__mode-button-description">may lag & flashing lights</span>
                        </button>
                    </div>


                </div>

                <img className={`landing__hero-image `} src={"/images/compassImage.jpg"} alt="" />
            </div>

            <img className="landing__background-image" src={"/images/map-base-small.png"} alt="" />
        </div>
    )
}

export default Landing