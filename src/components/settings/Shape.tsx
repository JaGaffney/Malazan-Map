import { useDispatch, useSelector } from 'react-redux';

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
import ItemToggle from '../generics/ItemToggle';


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

            <ItemToggle name="Day / Night Cycle" data={dayNightData} handler={() => dispatch(dayNightData ? dayNightOff() : dayNightOn())} />
            <ItemToggle name="Night" data={nightData} handler={() => dispatch(nightToggle())} />
            <ItemToggle name="Flattern" data={flatternData} handler={() => dispatch(topographyToggle())} />
            <ItemToggle name="Shadows" data={shadowsData} handler={() => dispatch(shadowToggle())} />
            <ItemToggle name="Terrain" data={terrainData} handler={() => dispatch(terrainToggle())} />
            <ItemToggle name="Lights" data={lightsData} handler={() => dispatch(lightToggle())} />

        </div>
    )
}
