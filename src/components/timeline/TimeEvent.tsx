import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import ReactTooltip from 'react-tooltip';

import { update, updateActiveData, updateActiveID, updateMoon } from "../../state/features/engine"
import { bookColor } from '../utils/color';



export const TimeEvent = (props) => {
    const activeID = useSelector((state: any) => state.activeCord.activeID)
    const dispatch = useDispatch()
    return (
        <div className="timeline__event-item" onClick={() => {
            if (props.filter === "") {
                dispatch(updateActiveID(props.data.id))
                dispatch(updateActiveData(props.data.area))
                dispatch(updateMoon(props.data.moon))
                if (props.data.loc !== null) {
                    dispatch(update({ x: props.data.loc[0], y: props.data.loc[1] }));
                } else {
                    dispatch(update(props.data.loc));
                }

            }
        }}
            data-tip={props.data.name}
        >
            <div className={`
                timeline__event-item-icon 
                ${activeID === props.data.id ? "timeline__event-item-icon-active" : ""} ${props.filter}`}
                style={{ backgroundColor: bookColor(props.data.book) }}
            >
                <img src={props.filter === "" && props.data.icon} />
            </div>
            <ReactTooltip effect="solid" />
        </div>
    )
}
