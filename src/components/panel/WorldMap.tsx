import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateActiveAreas } from "../../state/features/settings"

export default function WorldMap() {
    const activeData = useSelector((state) => state.activeCord.activeData)
    const areaData = useSelector((state: any) => state.settings.areas)
    const dispatch = useDispatch()

    return (
        <div className="worldmap" >
            <img src={process.env.PUBLIC_URL + "/images/map.jpg"} />

            <img className={`worldmap-map ${activeData === 1 && "worldmap-hightlight"} ${!areaData.includes(1) && "worldmap-dark"}  `} src={process.env.PUBLIC_URL + "/images/small/genabackis.png"} />
            <img className={`worldmap-map ${activeData === 2 && "worldmap-hightlight"} ${!areaData.includes(2) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/seven_cities.png"} />
            <img className={`worldmap-map ${activeData === 3 && "worldmap-hightlight"} ${!areaData.includes(3) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/quon_tali.png"} />
            <img className={`worldmap-map ${activeData === 4 && "worldmap-hightlight"} ${!areaData.includes(4) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/jacuruku.png"} />
            <img className={`worldmap-map ${activeData === 5 && "worldmap-hightlight"} ${!areaData.includes(5) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/stratem.png"} />
            <img className={`worldmap-map ${activeData === 6 && "worldmap-hightlight"} ${!areaData.includes(6) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/lether.png"} />
            <img className={`worldmap-map ${activeData === 7 && "worldmap-hightlight"} ${!areaData.includes(7) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/bael.png"} />
            <img className={`worldmap-map ${activeData === 8 && "worldmap-hightlight"} ${!areaData.includes(8) && "worldmap-dark"} `} src={process.env.PUBLIC_URL + "/images/small/genostel.png"} />

            <div className="worldmap-container">
                <div className="worldmap-container-1 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(1))}></div>
                <div className="worldmap-container-2 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(2))}></div>
                <div className="worldmap-container-3 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(3))}></div>
                <div className="worldmap-container-4 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(4))}></div>
                <div className="worldmap-container-5 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(5))}></div>
                <div className="worldmap-container-6 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(6))}></div>
                <div className="worldmap-container-7 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(7))}></div>
                <div className="worldmap-container-8 worldmap-container-item" onClick={() => dispatch(updateActiveAreas(8))}></div>
            </div>
        </div>
    )
}
