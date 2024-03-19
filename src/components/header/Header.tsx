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


export default function Header() {
    const [books, setBooks] = useState<boolean>(false)
    const [places, setPlaces] = useState<boolean>(false)
    const [characters, setCharacters] = useState<boolean>(false)
    const [worldMap, setWorldMap] = useState<boolean>(true)
    const [settings, setSettings] = useState<boolean>(false)
    const [timeline, setTimeline] = useState<boolean>(true)
    const [history, setHistory] = useState<boolean>(false)

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
                    <input type="text" value={search} placeholder="search..." onChange={(e) => dispatch(updateSearch(e.target.value))} />
                    {search !== "" ? (<HiX className="header-search-button" onClick={() => dispatch(updateSearch(""))} />) : (<HiSearch />)}

                </form>

                <Buttons books={books} onBooksHandler={setBooks}
                    places={places} onPlacesHandler={setPlaces}
                    characters={characters} onCharactersHandler={setCharacters}
                    worldMap={worldMap} onWorldMapHandler={setWorldMap}
                    settings={settings} onSettingsHandler={setSettings}
                    history={history} onHistoryHandler={setHistory}
                />
            </div>



            {books && <Books onCloseHandler={setBooks} />}
            {places && <Locations onCloseHandler={setPlaces} />}
            {characters && <Characters onCloseHandler={setCharacters} />}

            {worldMap && <WorldMap />}
            {settings && <Settings onCloseHandler={setSettings} />}
            {history && <History timeline={timeline} onTimelineHandler={setTimeline} onCloseHandler={setHistory} />}
            {activeID !== "" && <Description />}


            {timeline && <Timeline />}


        </>
    )
}


