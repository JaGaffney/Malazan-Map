import React, { useRef } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';

import timelineData from "../../data/timelineData"
import { TimeEvent } from './TimeEvent'

const Timeline = (props) => {
    const ref = useRef(null)

    const scroll = (movement) => {
        ref.current.scrollLeft += movement;
    };

    return (
        <ScrollContainer className="timeline__container" draggingClassName={"timeline__container-drag"}>
            {Object.keys(timelineData).map((i, k) => {
                return (
                    <div className="timeline" key={k}>
                        <span className="timeline__date">{i}</span>
                        <div className="timeline__event-container">
                            {Object.keys(timelineData[i]).map((ii, kk) => {
                                return (
                                    <TimeEvent year={i} data={timelineData[i][ii]} key={kk} />
                                )
                            })
                            }</div>
                    </div>
                )
            })}
        </ScrollContainer>
    )
}


export default Timeline