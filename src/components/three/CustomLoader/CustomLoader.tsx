import React from "react";
import { useProgress, Html } from "@react-three/drei"

const CustomLoader = (props) => {
    const { active, progress, errors, item, loaded, total } = useProgress()

    const quotes = [
        `"Now these ashes have grown cold, we open the old book.
        These oil-stained pages recount the tales of the Fallen,
        a frayed empire, words without warmth. The hearth
        has ebbed, its gleam and life's sparks are but memories
        against dimming eyes – what cast my mind, what hue my
        thoughts as I open the Book of the Fallen
        and breathe deep the scent of history?
        Listen, then, to these words carried on that breath.
        These tales are the tales of us all, again yet again.
        We are history relived and that is aft, without end that is all."`
    ]

    //console.log("Loading: ", { active, progress, errors, item, loaded, total })

    return active ? (
        <Html fullscreen>
            <div className="tempLoading">
                <div className="tempLoading-title">
                    <h1>Malazan Book of the Fallen</h1>
                    <h2>Interactive 3D world map</h2>
                </div>
                <div className="tempLoading-quote">
                    <p>{quotes[0]}</p>
                    <span><i>Gardens of the Moon - Epigraph</i></span>
                </div>

                <div className="tempLoading-loading">
                    <strong>{Math.round(progress)} %</strong>
                    <h5>This can take around 10 seconds (works better on Firefox)</h5>
                </div>
            </div>
        </Html>
    ) : null
}

export default CustomLoader