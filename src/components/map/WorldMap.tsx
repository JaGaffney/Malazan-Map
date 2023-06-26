import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateActiveAreas } from "../../state/features/settings"
import AREAS from "../../data/areas"

const MapImage = (props) => {
    const activeDataArea = useSelector((state: any) => state.filter.activeData.area)
    const areaData = useSelector((state: any) => state.settings.areas)

    return (
        <img className={`worldmap-map ${activeDataArea === props.areaNumber ? "worldmap-hightlight" : ""} ${!areaData.includes(props.areaNumber) ? "worldmap-dark" : ""} ${props.highlight === props.areaNumber ? "worldmap-hover" : ""}`} src={props.url} alt={props.name} />
    )
}

export default function WorldMap() {
    const [highlight, setHighlight] = useState<number>(0)
    const dispatch = useDispatch()

    const areas = AREAS
    return (
        <div className="worldmap" >
            <img src={process.env.PUBLIC_URL + "/images/map.jpg"} alt="full map" />
            {areas.map((i, k) => {
                return (
                    <MapImage key={k}
                        areaNumber={k + 1}
                        url={`${process.env.PUBLIC_URL}/images/small/${i.id}.png`}
                        name={i.name}
                        highlight={highlight}
                    />
                )
            })}

            <div className="worldmap-container">
                {areas.map((i, k) => {
                    return (
                        <div key={k}
                            className={`worldmap-container-${k + 1} worldmap-container-item`}
                            onClick={() => dispatch(updateActiveAreas(k + 1))}
                            onMouseEnter={() => setHighlight(k + 1)}
                            onMouseLeave={() => setHighlight(0)}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
