import React from 'react'
import { HiMap, HiFlag, HiBookOpen, HiUsers } from 'react-icons/hi'
import { HiOutlineAdjustmentsHorizontal, HiOutlineMapPin } from "react-icons/hi2";

const Button = (props) => {
    return (
        <button className={`buttons__item ${props.name ? "buttons__item-active" : ""}`} onClick={() => {
            props.onPressHandler(!props.name)
            props.onSettingsHandler(false)
        }}>
            {props.icon}
            <span>{props.displayName}</span>
        </button>
    )
}

const Buttons = (props) => {
    return (
        <div className="buttons__container">
            <Button name={props.books} displayName={"Books"} icon={<HiBookOpen />} onPressHandler={props.onBooksHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.places} displayName={"Places"} icon={<HiFlag />} onPressHandler={props.onPlacesHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.characters} displayName={"Characters"} icon={<HiUsers />} onPressHandler={props.onCharactersHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.history} displayName={"Events"} icon={<HiOutlineMapPin />} onPressHandler={props.onHistoryHandler} onSettingsHandler={props.onSettingsHandler} />
            <Button name={props.worldMap} displayName={"mini-Map"} icon={<HiMap />} onPressHandler={props.onWorldMapHandler} onSettingsHandler={props.onSettingsHandler} />

            <button className={`buttons__item ${props.settings ? "buttons__item-active" : ""}`} onClick={() => {
                props.onSettingsHandler(!props.settings)
                props.onBooksHandler(false);
                props.onPlacesHandler(false);
                props.onCharactersHandler(false);
            }}>
                <HiOutlineAdjustmentsHorizontal />
                <span>Filters</span>
            </button>

        </div>
    )
}

export default Buttons