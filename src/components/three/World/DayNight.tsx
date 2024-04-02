import React from 'react'
import { useSelector } from 'react-redux'

import { Color } from "three";
import DayNightCycle from './DayNightCycle';

function DayNight(props) {
    const dayNightData = useSelector((state: any) => state.settings.dayNight)
    const nightData = useSelector((state: any) => state.settings.night)

    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();
    const jadeColor = new Color("#00a86b").convertSRGBToLinear().convertSRGBToLinear();
    const nightColor = new Color("#091b34").convertSRGBToLinear().convertSRGBToLinear();

    return (
        dayNightData ? (
            <>
                <DayNightCycle lightColor={lightColor} lightIntensity={5} pos={[165, 0, 0]} speed={0.2} willCastShadow={true} />
                <DayNightCycle lightColor={jadeColor} lightIntensity={500} pos={[200, 0, -200]} speed={0.04} willCastShadow={false} />
            </>
        ) : (
            <>
                <pointLight
                    position={[165, 33, 93]}
                    castShadow
                    color={nightData ? nightColor : lightColor}
                    intensity={nightData ? 8000 : 5}
                />
            </>
        )
    )
}


export default DayNight
