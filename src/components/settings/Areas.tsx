import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import { resetActiveAreas, updateActiveAreas } from "../../state/features/settings"

import AREAS from "../../data/areas"

const Area = (props) => {
    const areas = useSelector((state: any) => state.settings.areas)
    const dispatch = useDispatch()
    return (
        <div className="panel__item-container-info" onClick={() => dispatch(updateActiveAreas(props.area))}>
            <span>{props.name}</span>
            <span>{areas.includes(props.area) ? <HiCheckCircle /> : <HiOutlineCheckCircle />}</span>
        </div>
    )
}

export default function Areas() {
    const dispatch = useDispatch()

    const areaData = AREAS

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Areas</h5>
                <div className="panel__item-container-info" onClick={() => dispatch(resetActiveAreas())}>
                    <span>Show all</span>
                </div>

                {areaData.map((i, k) => {
                    return (
                        <Area area={k + 1} name={i.name} key={k} />
                    )
                })}
            </div>

        </div>
    )
}
