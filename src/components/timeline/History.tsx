import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiEye, HiEyeOff } from "react-icons/hi";

import ScrollContainer from 'react-indiana-drag-scroll';

import { update, updateActiveData } from "../../state/features/engine"

import timelineData, { ITimelinePoint } from '../../data/timelineData';
import { validFilterQueryArray } from '../utils/helpers';
import characters from '../../data/characters';
import { filterArray } from '../utils/filter';
import book from "../../data/books"
import { bookColor } from '../utils/color';
import { IClose } from '../interfaces/close.interface';
import { useMediaQuery } from 'react-responsive';
import Panel from '../panel/Panel';

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

export default function History({ onCloseHandler }: IClose) {
    const isDesktopOrLaptop: any = useMediaQuery({ query: '(min-width: 1224px)' })
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
        isDesktopOrLaptop ? (

            <>
                <ScrollContainer className="vertTimeline" hideScrollbars={false} horizontal={true}>
                    <div>
                        {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i: string, k: number) => {
                            const year: number = parseInt(i)
                            return (
                                <div className="panel__item-table" key={k}>

                                    <div className="timeline__date-header">
                                        <span className="timeline__date">
                                            {i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{getNumberWithSuffix(i)}
                                            <i> year {parseInt(i) < 0 ? "before" : "of"} Burns Sleep</i>
                                        </span>
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
                                                                <abbr title={book[ii.book].name} style={{ color: bookColor(ii.book) }}>{book[ii.book].abbreviation}</abbr>
                                                                {ii.citation !== "" ? <span className="timeline__event-history-citation">: {ii.citation}</span> : <span></span>}

                                                                <span style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>{ii.name}</span>
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

                    <div className="vertTimeline-bottom">

                    </div>
                </ScrollContainer>

            </>
        ) : (
            <Panel name="History" screenLocation="left" onCloseHandler={onCloseHandler}>
                <div className="panel__item-container" >

                    <div>
                        {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i: string, k: number) => {
                            const year: number = parseInt(i)
                            return (
                                <div className="panel__item-table" key={k}>

                                    <div className="timeline__date-header">
                                        <span className="timeline__date">
                                            {i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{getNumberWithSuffix(i)}
                                            <i> year {parseInt(i) < 0 ? "before" : "of"} Burns Sleep</i>
                                        </span>
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
                                                                <abbr title={book[ii.book].name} style={{ color: bookColor(ii.book) }}>{book[ii.book].abbreviation}</abbr>
                                                                {ii.citation !== "" ? <span className="timeline__event-history-citation">: {ii.citation}</span> : <span></span>}

                                                                <span style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>{ii.name}</span>
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

                    <div className="vertTimeline-bottom">

                    </div>
                </div>

            </Panel>
        )


    )
}
