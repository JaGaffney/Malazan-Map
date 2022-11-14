import React from 'react'

import timelineData from "../../data/timelineData"

import { TimeEvent } from './TimeEvent'

const Timeline = (props) => {
    return (
        <div className="timeline__container">
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
        </div>
    )
}


export default Timeline