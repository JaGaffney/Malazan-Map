import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import ReactTooltip from 'react-tooltip';

import { update, updateActiveData } from "../../state/features/engine"
import { bookColor } from '../utils/color';
import { ITimelinePoint } from '../../data/timelineData';
import book from "../../data/books"
import TimelineBook from './TimelineBook';


interface ITimeEvent {
    data: ITimelinePoint;
    filter: string;
}
export const TimeEvent = ({ filter, data }: ITimeEvent) => {
    const activeID = useSelector((state: any) => state.filter.activeData.id)
    const dispatch = useDispatch()
    return (
        <div className="timeline__event-item" key={data.id} onClick={() => {
            if (filter === "") {
                dispatch(updateActiveData(data))
                if (data.loc !== null) {
                    dispatch(update({ x: data.loc[0], y: data.loc[1] }));
                } else {
                    dispatch(update(data.loc));
                }

            }
        }}
            data-tip={filter === "" ? data.name : null}
        >
            {filter === "" ? (
                <>
                    <div className={`
                timeline__event-item-icon 
                ${activeID === data.id ? "timeline__event-item-icon-active" : ""} ${filter}`}
                        style={{ backgroundColor: bookColor(data.book) }}
                    >

                        <TimelineBook bookData={data.book} eventData={data} />
                    </div>
                    <ReactTooltip effect="solid" border={true} borderColor='white' />
                </>
            ) : <div className="book">
                <div className="back" style={{ backgroundColor: "var(--blue900)" }}></div>
                <div className="front" style={{ backgroundColor: "var(--blue900)" }}></div>
            </div>}
        </div>
    )
}
