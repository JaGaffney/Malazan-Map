import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiEye, HiEyeOff } from "react-icons/hi";
import Draggable from "react-draggable"

import { update, updateActiveData } from "../../state/features/engine"
import { bookColor } from '../utils/color'
import ScrollContainer from 'react-indiana-drag-scroll';
import Title from './Title';
import timelineData from '../../data/timelineData';
import { validFilterQueryArray } from '../utils/helpers';
import characters from '../../data/characters';
import { filterArray } from '../utils/filter';

let getNumberWithSuffix = (item) => {
    const plurals = new Intl.PluralRules('en-US', { type: 'ordinal' });
    let suffixMap = {
        "one": "st",
        "two": "nd",
        "few": "rd",
        "other": "th"
    }
    return suffixMap[plurals.select(item)]
}

export default function History(props) {
    const [inactiveDates, setInactiveDates] = useState([])

    const activeID = useSelector((state: any) => state.filter.activeData.id)
    const dispatch = useDispatch()
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const search = useSelector((state: any) => state.filter.search)

    const createCharacterArray = (charID: Array<number>) => {
        const charsName = []

        if (charID.length > 0) {
            charID.forEach(id => {
                charsName.push(characters[id].name)
            })
        }
        return charsName.toLocaleString()
    }

    const onDateHandler = (date: number) => {
        const newInactiveData = filterArray([...inactiveDates], date)
        setInactiveDates(newInactiveData)
    }

    return (
        <>
            <Draggable handle="h5">
                <div className="panel panel__books panel__draggable">

                    <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>

                        <div className="panel__item">
                            <div className="panel__item-container panel__header-draggable">

                                <Title name={"Events"} onCloseHandler={props.onCloseHandler} />

                                <div className="panel__item-container-info" onClick={() => props.onTimelineHandler(!props.timeline)}>
                                    <button className={props.timeline ? "panel__item-container-info-active panel__item-container-info-activeButton" : ""}>Timeline</button>
                                </div>

                                {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i, k) => {
                                    return (
                                        <div className="panel__item-table" key={k}>

                                            <div className="timeline__date-header">

                                                {i === "1000" ? (<span className="timeline__date">???</span>) : (

                                                    <span className="timeline__date">{i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                        <span className="timeline__date-suffix">{getNumberWithSuffix(i)} Year {parseInt(i) <= 0 ? "before" : "of"} Burn's Sleep</span>
                                                    </span>
                                                )}

                                                <button onClick={() => onDateHandler(parseInt(i))}>{inactiveDates.includes(parseInt(i)) ? <HiEyeOff /> : <HiEye />}</button>
                                            </div>

                                            {inactiveDates.includes(parseInt(i)) ? null : (
                                                <div className="">
                                                    {timelineData[i].map((ii, kk) => {
                                                        let filter = ""
                                                        if (activeCharacter.length !== 0) {
                                                            if (!activeCharacter.some((item: number) => ii.char.includes(item))) {
                                                                filter = "timeline__event-item-filter"
                                                            }
                                                        }
                                                        if (!activeBooks.includes(ii.book)) {
                                                            filter = "timeline__event-item-filter"
                                                        }
                                                        if (!validFilterQueryArray([ii.name, ii.description, createCharacterArray(ii.char)], search)) {
                                                            filter = "timeline__event-item-filter"
                                                        }

                                                        return (
                                                            <div className={`timeline__event-history ${activeID === ii.id ? "timeline__event-history-active" : ""}`} key={kk}
                                                                onClick={() => {
                                                                    if (filter === "") {
                                                                        dispatch(updateActiveData(ii))
                                                                        if (ii.loc !== null) {
                                                                            dispatch(update({ x: ii.loc[0], y: ii.loc[1] }));
                                                                        } else {
                                                                            dispatch(update(ii.loc));
                                                                        }

                                                                    }
                                                                }}>

                                                                <div className={`timeline__event-item-icon timeline__event-item-icon-sm ${filter}`}
                                                                    style={{ backgroundColor: bookColor(ii.book) }}
                                                                >
                                                                    <img src={filter === "" && ii.icon} alt={ii.name} />
                                                                </div>

                                                                <span>{ii.name}</span>
                                                            </div>

                                                        )
                                                    })
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}

                            </div >
                        </div >
                    </ScrollContainer>

                </div>
            </Draggable>


        </>
    )
}
