import React from 'react'
import { HiMap, HiCog, HiFlag, HiBookOpen, HiUsers } from 'react-icons/hi'
import { HiOutlineAdjustmentsHorizontal, HiOutlineMapPin } from "react-icons/hi2";

const Buttons = (props) => {
    return (
        <div className="buttons__container">
            <button className={`buttons__item ${props.books ? "buttons__item-active" : ""}`} onClick={() => {
                props.onBooksHandler(!props.books)
                props.onSettingsHandler(false)
            }}>
                <HiBookOpen />
                <span>Books</span>
            </button>

            <button className={`buttons__item ${props.places ? "buttons__item-active" : ""}`} onClick={() => {
                props.onPlacesHandler(!props.places)
                props.onSettingsHandler(false)
            }}>
                <HiFlag />
                <span>Places</span>
            </button>

            <button className={`buttons__item ${props.characters ? "buttons__item-active" : ""}`} onClick={() => {
                props.onCharactersHandler(!props.characters)
                props.onSettingsHandler(false)
            }}>
                <HiUsers />
                <span>Characters</span>
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
                props.onBooksHandler(false);
                props.onPlacesHandler(false);
                props.onCharactersHandler(false);
            }}>
                <HiOutlineAdjustmentsHorizontal />
                <span>Settings</span>
            </button>


        </div>

        // (<button className="sidepanel__open  settings__button" onClick={() => setDisplay(true)}><HiCog /></button>)
    )
}

export default Buttons