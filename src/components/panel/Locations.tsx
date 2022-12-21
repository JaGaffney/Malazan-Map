import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineMapPin } from "react-icons/hi2";

import { HiOutlineMenu, HiOutlineMenuAlt4, HiOutlineMinus } from "react-icons/hi";


import { updateActiveCity, resetActiveCity } from "../../state/features/engine"

import { cityData } from "../../data/city"



export default function Locations() {
    const activeCity = useSelector((state: any) => state.filter.activeCity)
    const dispatch = useDispatch()

    return (
        <div className="panel__item-container">
            <h5>Points of interest</h5>
            <div className={`panel__item-container-info`} onClick={() => dispatch(resetActiveCity())}>
                <span>Reset</span>
            </div>
            {cityData.map((i, k) => {
                let active = ""
                if (activeCity.includes(k)) {
                    active = "panel__item-container-info-active"
                }

                return (
                    <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateActiveCity(k))}>
                        <span>{i.name}</span>
                        {i.type === 1 && <HiOutlineMenu />}
                        {i.type === 2 && <HiOutlineMenuAlt4 />}
                        {i.type === 3 && <HiOutlineMinus />}
                    </div>
                )
            })}
        </div>
    )
}
