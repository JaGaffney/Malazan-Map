import React from 'react'

export default function WorldMap() {
    return (
        <div className="worldmap" >
            <img src={process.env.PUBLIC_URL + "/images/map.jpg"} alt="full map" />
        </div>
    )
}