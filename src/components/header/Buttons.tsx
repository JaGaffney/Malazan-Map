import React from 'react'
import { HiMap, HiCog } from 'react-icons/hi'
import { HiOutlineAdjustmentsHorizontal, HiOutlineMapPin } from "react-icons/hi2";

const Buttons = (props) => {
    return (
        <div className="buttons__container">
            <button className={`buttons__item ${props.panel ? "buttons__item-active" : ""}`} onClick={() => {
                props.onPanelHandler(!props.panel)
                props.onSettingsHandler(false)
            }}>
                <HiOutlineAdjustmentsHorizontal />
                <span>Filters</span>
            </button>

            <button className={`buttons__item ${props.timeline ? "buttons__item-active" : ""}`} onClick={() => props.onTimelineHandler(!props.timeline)}>
                <HiOutlineMapPin />
                <span>Timeline</span>
            </button>

            <button className={`buttons__item ${props.worldMap ? "buttons__item-active" : ""}`} onClick={() => props.onWorldMapHandler(!props.worldMap)}>
                <HiMap />
                <span>mini-Map</span>
            </button>

            <button className={`buttons__item ${props.settings ? "buttons__item-active" : ""}`} onClick={() => {
                props.onSettingsHandler(!props.settings)
                props.onPanelHandler(false);
            }}>
                <HiCog />
                <span>Settings</span>
            </button>


        </div>

        // (<button className="sidepanel__open  settings__button" onClick={() => setDisplay(true)}><HiCog /></button>)
    )
}

export default Buttons