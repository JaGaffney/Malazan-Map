import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from "react-icons/hi";

import timelineData from "../../data/timelineData"
import { TimeEvent } from './TimeEvent'

const Timeline = (props) => {
    const [show, setShow] = useState(true)

    const activeCharacter = useSelector((state) => state.activeCord.activeCharacter)
    const activeBooks = useSelector((state) => state.activeCord.activeBooks)
    return (
        <>
            {show ? (
                <ScrollContainer className="timeline__container" draggingClassName={"timeline__container-drag"} vertical={false}>
                    {Object.keys(timelineData).sort((a, b) => a - b).map((i, k) => {
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
                </ScrollContainer>) : null}
            <button className="timeline__controls" onClick={() => setShow(!show)}>
                {show ? <HiOutlineChevronDoubleDown /> : <HiOutlineChevronDoubleUp />}
            </button>
        </>
    )
}


export default Timeline