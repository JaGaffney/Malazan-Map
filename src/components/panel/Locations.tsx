import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineMapPin } from "react-icons/hi2";


import { updateCity } from "../../state/features/engine"

import { cityData } from "../../data/city"



export default function Locations() {
    const moon = useSelector((state: any) => state.filter.moon)
    const city = useSelector((state: any) => state.filter.city)
    const dispatch = useDispatch()

    return (
        <div className="panel__item-container">
            <h5>Points of interest</h5>
            <div className={`panel__item-container-info`} onClick={() => dispatch(updateCity({ location: [0, 0], name: "" }))}>
                <span>Reset</span>
            </div>
            {cityData.map((i, k) => {
                let active = ""
                if (i.name === city.name) {
                    active = "panel__item-container-info-active"
                }
                if (i.name === "moonspawn") {
                    const newMoon = [moon[0], moon[1] + 14.5, moon[2]]
                    return (
                        <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateCity({ location: newMoon, name: "Moonspawn", type: 1, owner: "Anomander Rake" }))}>
                            <span>Moonspawn</span>
                            <HiOutlineMapPin />
                        </div>
                    )
                }
                return (
                    <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateCity({ location: i.loc, name: i.name, type: i.type, owner: i.owner }))}>
                        <span>{i.name}</span>
                        <HiOutlineMapPin />
                    </div>
                )
            })}
        </div>
    )
}
