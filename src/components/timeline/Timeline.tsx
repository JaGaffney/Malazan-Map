import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';

import timelineData, { ITimelinePoint } from "../../data/timelineData"
import { validFilterQueryArray } from '../utils/helpers';
import { TimeEvent } from './TimeEvent'

import characters from "../../data/characters"
import { useEffect, useRef, useState } from 'react';
import { filterArray } from '../utils/filter';

const Timeline = () => {
    const ref = useRef(null);
    const [yearToggle, setYearToggle] = useState<number[]>([])

    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const search = useSelector((state: any) => state.filter.search)


    // allows the search bar to also include characters inside the location
    const createCharacterArray = (charID: Array<number>) => {
        const charsName: Array<string | null> = []
        if (charID.length > 0) {
            charID.forEach(id => {
                charsName.push(characters[id].name[0])
            })
        }
        return charsName.toLocaleString()
    }

    // doesnt work correctly
    const updateYear = (year: number) => {
        setYearToggle(prevState => filterArray(yearToggle, year))
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(1300, 0);
        }
    }, []);

    return (
        <>
            <ScrollContainer innerRef={ref} className="timeline__container" draggingClassName={"timeline__container-drag"} vertical={false} hideScrollbars={false}>
                {Object.keys(timelineData).sort((a: any, b: any) => a - b).map((i: string, k: number) => {
                    const year: number = parseInt(i)

                    return (
                        <div className="timeline" key={k}>

                            <span onClick={() => (updateYear(year))} className={`timeline__date timeline__date-title ${yearToggle.includes(year) ? "timeline__date-active" : ""}`}>
                                {year.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>

                            {!yearToggle.includes(year) ? (
                                <div className="timeline__event-container">
                                    {timelineData[year].map((ii: ITimelinePoint, kk: number) => {
                                        // early outs some of the dates as there is too much information in the timeline which makes it too confusing
                                        // if (ii.timeline === false) {
                                        //     return null
                                        // }
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
                                    }
                                </div>
                            ) : (null)}
                        </div>
                    )
                })}
            </ScrollContainer>
        </>
    )
}


export default Timeline