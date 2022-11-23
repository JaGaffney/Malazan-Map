import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';

import timelineData from "../../data/timelineData"
import { TimeEvent } from './TimeEvent'

const Timeline = (props) => {
    const activeCharacter = useSelector((state) => state.activeCord.activeCharacter)

    return (
        <ScrollContainer className="timeline__container" draggingClassName={"timeline__container-drag"} vertical={false}>
            {Object.keys(timelineData).map((i, k) => {
                return (
                    <div className="timeline" key={k}>
                        <span className="timeline__date">{i}</span>
                        <div className="timeline__event-container">
                            {timelineData[i].map((ii, kk) => {
                                let filter = ""
                                if (activeCharacter !== null) {
                                    if (!ii.char.includes(activeCharacter)) {
                                        filter = "timeline__event-item-filter"
                                    }
                                }
                                return (
                                    <TimeEvent year={i} data={ii} key={kk} filter={filter} />)
                            })
                            }</div>
                    </div>
                )
            })}
        </ScrollContainer>
    )
}


export default Timeline