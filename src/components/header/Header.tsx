import React, { useState } from 'react'

import WorldMap from '../map/WorldMap'
import Panel from '../panel/Panel'
import Settings from '../settings/Settings'
import Timeline from '../timeline/Timeline'
import Buttons from './Buttons'

export default function Header() {
    const [panel, setPanel] = useState<boolean>(false)
    const [worldMap, setWorldMap] = useState<boolean>(true)
    const [settings, setSettings] = useState<boolean>(false)
    const [timeline, setTimeline] = useState<boolean>(true)

    return (
        <>
            <div className="header">
                <div className="header-title">
                    <h1><span><i>map of </i> </span> Malazan Book of the Fallen</h1>
                </div>

                <Buttons panel={panel} onPanelHandler={setPanel} worldMap={worldMap} onWorldMapHandler={setWorldMap} settings={settings} onSettingsHandler={setSettings} timeline={timeline} onTimelineHandler={setTimeline} />
            </div>

            {panel && <Panel />}
            {worldMap && <WorldMap />}
            {settings && <Settings />}
            {timeline && <Timeline />}
        </>
    )
}


