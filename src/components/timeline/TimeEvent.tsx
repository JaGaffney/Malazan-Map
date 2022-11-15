import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { update, updateActiveID, updateActiveData } from "../../state/features/engine"

import ReactTooltip from 'react-tooltip';

export const TimeEvent = (props) => {
    const activeID = useSelector((state) => state.activeCord.activeID)
    const dispatch = useDispatch()
    return (
        <div className="timeline__event-item" onClick={() => {
            dispatch(updateActiveID(props.data.id))
            dispatch(updateActiveData(props.data.id))
            dispatch(update({ x: props.data.loc[0], y: props.data.loc[1] }));
        }}
            data-tip={props.data.name}
        >
            <div className={`
                timeline__event-item-icon 
                ${activeID === props.data.id ? "timeline__event-item-icon-active" : ""}`}>
                <img src={props.data.icon} />
            </div>
            <ReactTooltip effect="solid" />
        </div>
    )
}
