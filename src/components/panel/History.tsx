import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiEye, HiEyeOff } from "react-icons/hi";
import Draggable from "react-draggable"

import { update, updateActiveData } from "../../state/features/engine"
import { bookColor } from '../utils/color'
import ScrollContainer from 'react-indiana-drag-scroll';
import Title from './Title';
import timelineData, { ITimelinePoint } from '../../data/timelineData';
import { validFilterQueryArray } from '../utils/helpers';
import characters from '../../data/characters';
import { filterArray } from '../utils/filter';
import { IPanel } from './panel.inteface';

let getNumberWithSuffix = (item: string): any => {
    const plurals = new Intl.PluralRules('en-US', { type: 'ordinal' });
    let suffixMap = {
        "one": "st",
        "two": "nd",
        "few": "rd",
        "other": "th"
    }
    // @ts-expect-error
    return suffixMap[plurals.select(item)]
}

export default function History({ onCloseHandler }: IPanel) {
    const dispatch = useDispatch()

    const [inactiveDates, setInactiveDates] = useState<Array<any>>([])

    const activeID = useSelector((state: any) => state.filter.activeData.id)
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const search = useSelector((state: any) => state.filter.search)

    const createCharacterArray = (charID: Array<number>) => {
        const charsName: Array<string | null> = []
        if (charID.length > 0) {
            charID.forEach(id => {
                charsName.push(characters[id].name[0])
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

                                <Title name={"Events"} onCloseHandler={onCloseHandler} />

                                {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i: string, k: number) => {
                                    const year: number = parseInt(i)
                                    return (
                                        <div className="panel__item-table" key={k}>

                                            <div className="timeline__date-header">

                                                {year === 1000 ? (<span className="timeline__date">???</span>) : (

                                                    <span className="timeline__date">{i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                )}

                                                <button onClick={() => onDateHandler(parseInt(i))}>{inactiveDates.includes(year) ? <HiEyeOff /> : <HiEye />}</button>
                                            </div>

                                            {inactiveDates.includes(year) ? null : (
                                                <div className="">
                                                    {timelineData[year].map((ii: ITimelinePoint, kk: number) => {
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
                                                            filter === "" ? (
                                                                <>
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


                                                                        <span>{ii.name}</span>
                                                                    </div>
                                                                </>) : (null)

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
