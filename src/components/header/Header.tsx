import React, { useState } from 'react'
import { HiSearch, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'


import WorldMap from '../map/WorldMap'
import Books from '../panel/Books'
import Characters from '../panel/Characters'
import Locations from '../panel/Locations'
import History from '../timeline/History'
import Settings from '../settings/Settings'
import Buttons from './Buttons'

import { reset, resetActiveCharacter, resetActiveCity, resetActiveData, updateActiveDataDescription, updateSearch } from "../../state/features/engine"
import Description from '../panel/Description';
import Timeline from '../timeline/Timeline';
import Info from '../panel/Info';
import Reset from '../generics/Reset';


export default function Header() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [searching, setSearching] = useState<string>("")

    const [books, setBooks] = useState<boolean>(false)
    const [places, setPlaces] = useState<boolean>(false)
    const [characters, setCharacters] = useState<boolean>(false)
    const [worldMap, setWorldMap] = useState<boolean>(false)
    const [settings, setSettings] = useState<boolean>(false)
    const [timeline, setTimeline] = useState<boolean>(true)
    const [history, setHistory] = useState<boolean>(false)
    const [info, setInfo] = useState<boolean>(false)

    const activeDescription = useSelector((state: any) => state.filter.activeData.description)

    const dispatch = useDispatch()

    // changed earch to be on click rather than real time to reduce input lag
    const onSearchSubmit = (e: any) => {
        e.preventDefault()
        dispatch(updateSearch(searching))
    }

    const onSearchReset = (e: any) => {
        e.preventDefault()
        setSearching("")
        dispatch(updateSearch(""))
    }

    const onHardReset = (e: any) => {
        e.preventDefault()
        setSearching("")

        dispatch(updateSearch(""))
        dispatch(reset())
        dispatch(resetActiveData())
        dispatch(resetActiveCity())
        dispatch(resetActiveCharacter())
    }

    const navbarControlToggle = (value: boolean, section: string) => {
        const deepCopy = value.toString()

        if (!isDesktopOrLaptop) {
            setBooks(false)
            setCharacters(false)
            setPlaces(false)
            setHistory(false)
            setSettings(false)
            setInfo(false)
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
            <div className="header">

                {isDesktopOrLaptop && (
                    <div className="header-title">
                        <h1><span><i>Malazan</i></span>map of the Fallen</h1>
                    </div>
                )}

                <form className="header-search" onSubmit={(e) => onSearchSubmit(e)}>
                    <label className="visually-hidden" htmlFor="search">Search</label>
                    <input id="search" type="text" value={searching} placeholder={` ${isTabletOrMobile ? "search..." : "search for character, event, location, etc..."}`} onChange={(e) => setSearching(e.target.value)} />
                    {searching !== "" && (<HiX className="header-search-leftButton" onClick={(e) => onSearchReset(e)} />)}
                    <HiSearch className="header-search-button" onClick={(e) => onSearchSubmit(e)} />
                </form>

                {isDesktopOrLaptop && (
                    <Reset message="Reset" handler={onHardReset} />
                )}

                <Buttons books={books}
                    places={places}
                    characters={characters}
                    settings={settings}
                    history={history}
                    info={info}
                    description={activeDescription !== ""}
                    navbarControlToggle={navbarControlToggle}
                />
            </div>

            {books && <Books onCloseHandler={setBooks} />}
            {places && <Locations onCloseHandler={setPlaces} />}
            {characters && <Characters onCloseHandler={setCharacters} />}
            {history && <History onCloseHandler={setHistory} />}
            {info && <Info onCloseHandler={setInfo} />}

            {settings && <Settings onCloseHandler={setSettings} timeline={timeline} onTimelineHandler={setTimeline} worldMap={worldMap} onMapHandler={setWorldMap} />}
            {worldMap && <WorldMap />}
            {timeline && <Timeline />}

            {activeDescription !== "" && <Description />}
        </>
    )
}