import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import {
    dayNightOn,
    dayNightOff,
    nightToggle,
    terrainToggle,
    lightToggle,
    topographyToggle,
    shadowToggle
} from "../../state/features/settings"


export default function Shape() {
    const dayNightData = useSelector((state: any) => state.settings.dayNight)
    const nightData = useSelector((state: any) => state.settings.night)
    const flatternData = useSelector((state: any) => state.settings.flattern)
    const shadowsData = useSelector((state: any) => state.settings.shadows)
    const terrainData = useSelector((state: any) => state.settings.terrain)
    const lightsData = useSelector((state: any) => state.settings.lights)
    const dispatch = useDispatch()

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Map</h5>

                <div className="panel__item-container-info" onClick={() => dispatch(dayNightData ? dayNightOff() : dayNightOn())}>
                    <span>Day/Night Cycle</span>
                    <span>{!dayNightData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(nightToggle())}>
                    <span>Night</span>
                    <span>{!nightData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(topographyToggle())}>
                    <span>Flattern</span>
                    <span>{flatternData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(shadowToggle())}>
                    <span>Shadows</span>
                    <span>{!shadowsData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(terrainToggle())}>
                    <span>Terrain</span>
                    <span>{!terrainData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(lightToggle())}>
                    <span>Lights</span>
                    <span>{!lightsData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>
            </div>
        </div>
    )
}
