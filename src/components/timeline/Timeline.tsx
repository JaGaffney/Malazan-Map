import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';

import timelineData from "../../data/timelineData"
import { TimeEvent } from './TimeEvent'

const Timeline = (props) => {
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    return (
        <ScrollContainer className="timeline__container" draggingClassName={"timeline__container-drag"} vertical={false}>
            {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i, k) => {
                return (
                    <div className="timeline" key={k}>
                        <span className="timeline__date">{i}</span>
                        <div className="timeline__event-container">
                            {timelineData[i].map((ii, kk) => {
                                let filter = ""
                                if (activeCharacter.length !== 0) {
                                    if (activeCharacter.some((item: number) => ii.char.includes(item))) {
                                        filter = "timeline__event-item-filter"
                                    }
                                }
                                if (!activeBooks.includes(ii.book)) {
                                    filter = "timeline__event-item-filter"
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