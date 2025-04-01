import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../header/Header'
import WorldMap from '../map/WorldMap'
import Books from '../panel/Books'
import Characters from '../panel/Characters'
import Description from '../panel/Description'
import Info from '../panel/Info'
import Locations from '../panel/Locations'
import Settings from '../settings/Settings'
import Timeline from '../timeline/Timeline'
import History from "../timeline/History"

import { updateActiveDataDescription } from '../../state/features/engine'
import { SCREEN_SIZE_DESKTOP } from '../../state/CONSTANTS'

function Body() {
    const isDesktopOrLaptop = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })

    const [books, setBooks] = useState<boolean>(false)
    const [places, setPlaces] = useState<boolean>(false)
    const [characters, setCharacters] = useState<boolean>(false)
    const [worldMap, setWorldMap] = useState<boolean>(false)
    const [settings, setSettings] = useState<boolean>(false)
    const [timeline, setTimeline] = useState<boolean>(true)
    const [history, setHistory] = useState<boolean>(false)
    const [info, setInfo] = useState<boolean>(false)

    const dispatch = useDispatch()

    const activeDescription = useSelector((state: any) => state.filter.activeData.description)

    const navbarControlToggle = (value: boolean | string, section: string) => {
        const deepCopy = value.toString()

        if (!isDesktopOrLaptop) {
            setBooks(false)
            setCharacters(false)
            setPlaces(false)
            setHistory(false)
            setSettings(false)
            setInfo(false)
            dispatch(updateActiveDataDescription(""))
        }

        if (section === "Books") {
            setBooks(!(deepCopy === 'true'));
        }
        if (section === "Characters") {
            setCharacters(!(deepCopy === 'true'));
        }
        if (section === "Locations") {
            setPlaces(!(deepCopy === 'true'));
        }
        if (section === "Events") {
            setHistory(!(deepCopy === 'true'));
        }
        if (section === "Settings") {
            setSettings(!(deepCopy === 'true'));
        }
        if (section === "Info") {
            setInfo(!(deepCopy === 'true'));
        }
        if (section === "Description") {
            dispatch(updateActiveDataDescription(""))
        }
    }

    return (
        <>
            <Header books={books}
                places={places}
                characters={characters}
                settings={settings}
                history={history}
                info={info}
                description={activeDescription}
                navbarControlToggle={navbarControlToggle}
            />

            {books && <Books onCloseHandler={setBooks} />}
            {characters && <Characters onCloseHandler={setCharacters} />}
            {places && <Locations onCloseHandler={setPlaces} />}
            {history && <History onCloseHandler={setHistory} />}
            {settings && <Settings
                onCloseHandler={setSettings}
                timeline={timeline}
                onTimelineHandler={setTimeline}
                worldMap={worldMap}
                onMapHandler={setWorldMap}
            />}
            {info && <Info onCloseHandler={setInfo} />}
            {activeDescription !== "" && <Description />}

            {worldMap && <WorldMap />}
            {timeline && <Timeline />}
        </>
    )
}

export default Body

