import React, { useState } from 'react'
import { HiSearch, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux'

import WorldMap from '../map/WorldMap'
import Panel from '../panel/Panel'
import Settings from '../settings/Settings'
import Timeline from '../timeline/Timeline'
import Buttons from './Buttons'

import { updateSearch } from "../../state/features/engine"


export default function Header() {
    const [panel, setPanel] = useState<boolean>(false)
    const [worldMap, setWorldMap] = useState<boolean>(true)
    const [settings, setSettings] = useState<boolean>(false)
    const [timeline, setTimeline] = useState<boolean>(true)

    const search = useSelector((state: any) => state.filter.search)
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

                <Buttons panel={panel} onPanelHandler={setPanel} worldMap={worldMap} onWorldMapHandler={setWorldMap} settings={settings} onSettingsHandler={setSettings} timeline={timeline} onTimelineHandler={setTimeline} />
            </div>



            {panel && <Panel />}
            {worldMap && <WorldMap />}
            {settings && <Settings />}
            {timeline && <Timeline />}
        </>
    )
}


