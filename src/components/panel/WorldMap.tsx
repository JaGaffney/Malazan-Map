import React from 'react'
import { useDispatch } from "react-redux"
import { update } from "../../state/features/engine"
import { useSelector } from "react-redux"

export default function WorldMap() {
    const activeCord = useSelector((state) => state.activeCord.activeCord)
    const dispatch = useDispatch()

    return (
        <div className="worldmap" onClick={() => dispatch(update())}>

            <h2>{activeCord.x}</h2>
        </div>
    )
}
