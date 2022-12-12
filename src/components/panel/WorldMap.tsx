import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateActiveAreas } from "../../state/features/settings"


import AREAS from "../../data/areas"

const MapImage = (props) => {
    const activeData = useSelector((state: any) => state.activeCord.activeData)
    const areaData = useSelector((state: any) => state.settings.areas)

    return (
        <img className={`worldmap-map ${activeData === props.areaNumber ? "worldmap-hightlight" : ""} ${!areaData.includes(props.areaNumber) ? "worldmap-dark" : ""}`} src={props.url} alt={props.name} />
    )
}

export default function WorldMap() {
    const dispatch = useDispatch()

    const areas = AREAS
    return (
        <div className="worldmap" >
            <img src={process.env.PUBLIC_URL + "/images/map.jpg"} />
            {areas.map((i, k) => {
                return (
                    <MapImage key={k} areaNumber={k + 1} url={`${process.env.PUBLIC_URL}/images/small/${i.id}.png`} name={i.name} />
                )
            })}

            <div className="worldmap-container">
                {areas.map((i, k) => {
                    return (
                        <div key={k}
                            className={`worldmap-container-${k + 1} worldmap-container-item`}
                            onClick={() => dispatch(updateActiveAreas(k + 1))}
                        >
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
