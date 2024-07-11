import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';

import timelineData, { ITimelinePoint } from "../../data/timelineData"
import { validFilterQueryArray } from '../utils/helpers';
import { TimeEvent } from './TimeEvent'

import characters from "../../data/characters"

const Timeline = () => {
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const search = useSelector((state: any) => state.filter.search)


    const createCharacterArray = (charID: Array<number>) => {
        const charsName: Array<string | null> = []

        if (charID.length > 0) {
            charID.forEach(id => {
                charsName.push(characters[id].name)
            })
        }

        return charsName.toLocaleString()
    }

    return (
        <>
            <ScrollContainer className="timeline__container" draggingClassName={"timeline__container-drag"} vertical={false}>
                {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i: string, k: number) => {
                    const year: number = parseInt(i)
                    // early outs some of the dates as there is too much information in the timeline which makes it too confusing
                    if (year === -298655 || year === -119739 || year === -119736) {
                        return (null)
                    }
                    return (
                        <div className="timeline" key={k}>

                            {i !== "1000" ? <span className="timeline__date">{i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> : <span className="timeline__date">???</span>}
                            <div className="timeline__event-container">
                                {timelineData[year].map((ii: ITimelinePoint, kk: number) => {
                                    // early outs some of the dates as there is too much information in the timeline which makes it too confusing
                                    if (ii.timeline === false) {
                                        return null
                                    }
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
                                        <TimeEvent data={ii} key={kk} filter={filter} />
                                    )

                                })
                                }</div>
                        </div>
                    )
                })}
            </ScrollContainer>
        </>
    )
}


export default Timeline