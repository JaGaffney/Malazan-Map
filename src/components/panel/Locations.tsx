import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiMagnifyingGlass } from "react-icons/hi2";


import { updateCity } from "../../state/features/engine"

import cityData from "../../data/city"



export default function Locations() {
    const moon = useSelector((state) => state.activeCord.moon)
    const city = useSelector((state) => state.activeCord.city)
    const dispatch = useDispatch()
    return (
        <div className="panel__item-container">
            <h5>Points of interest</h5>
            {Object.keys(cityData).map((i, k) => {
                let active = ""
                if (cityData[i].name === city.name) {
                    active = "panel__item-container-info-active"
                }
                if (i === "moonspawn") {
                    return (
                        <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateCity({ location: moon, name: "Moonspawn" }))}>
                            <span>Moonspawn</span>
                            <HiMagnifyingGlass />
                        </div>
                    )
                }
                return (
                    <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateCity({ location: cityData[i].loc, name: cityData[i].name }))}>
                        <span>{cityData[i].name}</span>
                        <HiMagnifyingGlass />
                    </div>
                )
            })}
        </div>
    )
}
