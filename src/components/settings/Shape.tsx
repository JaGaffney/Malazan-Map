import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import {
    dayNightOn,
    dayNightOff,
    nightOn,
    nightOff, flattern, raise, addShadows, removeShadows, addTerrain, removeTerrain
} from "../../state/features/settings"

interface IShape {
    timeline: boolean
    onTimelineHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Shape({ timeline, onTimelineHandler }: IShape) {
    const dayNightData = useSelector((state: any) => state.settings.dayNight)
    const nightData = useSelector((state: any) => state.settings.night)
    const flatternData = useSelector((state: any) => state.settings.flattern)
    const shadowsData = useSelector((state: any) => state.settings.shadows)
    const terrainData = useSelector((state: any) => state.settings.terrain)
    const dispatch = useDispatch()

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Options</h5>

                <div className="panel__item-container-info" onClick={() => onTimelineHandler(!timeline)}>
                    <span>Timeline</span>
                    <span>{!timeline ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(dayNightData ? dayNightOff() : dayNightOn())}>
                    <span>Day/Night Cycle</span>
                    <span>{!dayNightData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(nightData ? nightOff() : nightOn())}>
                    <span>Night</span>
                    <span>{!nightData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(flatternData ? raise() : flattern())}>
                    <span>Flattern</span>
                    <span>{flatternData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(shadowsData ? removeShadows() : addShadows())}>
                    <span>Shadows</span>
                    <span>{!shadowsData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(terrainData ? removeTerrain() : addTerrain())}>
                    <span>Terrain</span>
                    <span>{!terrainData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>
            </div>
        </div>
    )
}
