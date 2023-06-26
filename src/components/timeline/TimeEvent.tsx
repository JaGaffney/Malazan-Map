import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import ReactTooltip from 'react-tooltip';

import { update, updateActiveData } from "../../state/features/engine"
import { bookColor } from '../utils/color';



export const TimeEvent = (props) => {
    const activeID = useSelector((state: any) => state.filter.activeData.id)
    const dispatch = useDispatch()

    return (
        <div className="timeline__event-item" onClick={() => {
            if (props.filter === "") {
                dispatch(updateActiveData(props.data))
                if (props.data.loc !== null) {
                    dispatch(update({ x: props.data.loc[0], y: props.data.loc[1] }));
                } else {
                    dispatch(update(props.data.loc));
                }

            }
        }}
            data-tip={props.filter === "" ? props.data.name : null}
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
