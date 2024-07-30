import React, { useState } from 'react'
import { HiSearch, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux'

import WorldMap from '../map/WorldMap'
import Books from '../panel/Books'
import Characters from '../panel/Characters'
import Locations from '../panel/Locations'
import History from '../panel/History'
import Settings from '../settings/Settings'
import Buttons from './Buttons'

import { updateSearch } from "../../state/features/engine"
import Description from '../panel/Description';
import Timeline from '../timeline/Timeline';
import Info from '../panel/Info';

export default function Header() {
    const [books, setBooks] = useState<boolean>(false)
    const [places, setPlaces] = useState<boolean>(false)
    const [characters, setCharacters] = useState<boolean>(false)
    const [worldMap, setWorldMap] = useState<boolean>(false)
    const [settings, setSettings] = useState<boolean>(false)
    const [timeline, setTimeline] = useState<boolean>(true)
    const [history, setHistory] = useState<boolean>(false)
    const [info, setInfo] = useState<boolean>(false)

    const search = useSelector((state: any) => state.filter.search)

    const activeID = useSelector((state: any) => state.filter.activeData.id)

    const dispatch = useDispatch()

    return (
        <>
            <div className="header">
                <div className="header-title">
                    <h1><span><i>map of </i> </span> Malazan Book of the Fallen</h1>
                </div>

                <form className="header-search">
                    <label className="visually-hidden" htmlFor="search">Search</label>
                    <input id="search" type="text" value={search} placeholder="search for character, event, location, etc..." onChange={(e) => dispatch(updateSearch(e.target.value))} />
                    {search !== "" ? (<HiX className="header-search-button" onClick={() => dispatch(updateSearch(""))} />) : (<HiSearch />)}

                </form>

                <Buttons books={books} onBooksHandler={setBooks}
                    places={places} onPlacesHandler={setPlaces}
                    characters={characters} onCharactersHandler={setCharacters}
                    settings={settings} onSettingsHandler={setSettings}
                    history={history} onHistoryHandler={setHistory}
                    info={info} onInfoHandler={setInfo}
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


            {activeID !== "" && <Description />}


        </>
    )
}