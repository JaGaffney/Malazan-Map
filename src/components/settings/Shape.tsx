import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import {
    dayNightOn,
    dayNightOff,
    nightOn,
    nightOff, flattern, raise, addShadows, removeShadows, addDeserts, removeDeserts, addForests, removeForests
} from "../../state/features/settings"


export default function Shape() {
    const dayNightData = useSelector((state: any) => state.settings.dayNight)
    const nightData = useSelector((state: any) => state.settings.night)
    const flatternData = useSelector((state: any) => state.settings.flattern)
    const shadowsData = useSelector((state: any) => state.settings.shadows)
    const desertData = useSelector((state: any) => state.settings.deserts)
    const forestData = useSelector((state: any) => state.settings.forest)
    const dispatch = useDispatch()

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Filters</h5>

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

                <div className="panel__item-container-info" onClick={() => dispatch(desertData ? removeDeserts() : addDeserts())}>
                    <span>Deserts</span>
                    <span>{!desertData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>
                <div className="panel__item-container-info" onClick={() => dispatch(forestData ? removeForests() : addForests())}>
                    <span>Forests</span>
                    <span>{!forestData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

            </div>
        </div>
    )
}
