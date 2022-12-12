import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import { resetActiveAreas, updateActiveAreas } from "../../state/features/settings"

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
    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Areas</h5>
                <div className="panel__item-container-info" onClick={() => dispatch(resetActiveAreas())}>
                    <span>Show all</span>
                </div>
                <Area area={1} name={"Genabackis"} />
                <Area area={2} name={"Seven Cities"} />
                <Area area={3} name={"Quon Tali"} />
                <Area area={4} name={"Jacuruku"} />
                <Area area={5} name={"Stratem and Korelri"} />
                <Area area={6} name={"Lether"} />
                <Area area={7} name={"Bael"} />
                <Area area={8} name={"Genostel"} />
            </div>

        </div>
    )
}
