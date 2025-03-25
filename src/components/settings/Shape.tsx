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
import Note from '../generics/Note';


export default function Shape() {
    const dayNightData = useSelector((state: any) => state.settings.dayNight)
    const nightData = useSelector((state: any) => state.settings.night)
    const flatternData = useSelector((state: any) => state.settings.flattern)
    const shadowsData = useSelector((state: any) => state.settings.shadows)
    const terrainData = useSelector((state: any) => state.settings.terrain)
    const lightsData = useSelector((state: any) => state.settings.lights)
    const dispatch = useDispatch()

    return (
        <div className="">
            <h5>Map</h5>
            <Note message="changes different elements on the map itself, some of these settings will reduce lag if you are effected." />
            <div className="panel__item-container-line" onClick={() => dispatch(dayNightData ? dayNightOff() : dayNightOn())}>
                <span>Day / Night Cycle</span>
                <span>{!dayNightData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>

            <div className="panel__item-container-line" onClick={() => dispatch(nightToggle())}>
                <span>Night</span>
                <span>{!nightData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>

            <div className="panel__item-container-line" onClick={() => dispatch(topographyToggle())}>
                <span>Flattern</span>
                <span>{flatternData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>

            <div className="panel__item-container-line" onClick={() => dispatch(shadowToggle())}>
                <span>Shadows</span>
                <span>{!shadowsData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>

            <div className="panel__item-container-line" onClick={() => dispatch(terrainToggle())}>
                <span>Terrain</span>
                <span>{!terrainData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>

            <div className="panel__item-container-line" onClick={() => dispatch(lightToggle())}>
                <span>Lights</span>
                <span>{!lightsData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
            </div>
        </div>
    )
}
