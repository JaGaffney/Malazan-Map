import React, { useState } from 'react'
import { HiSearch, HiX } from "react-icons/hi";
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import Buttons from './Buttons'
import { reset, resetActiveCharacter, resetActiveCity, resetActiveData, updateSearch } from "../../state/features/engine"
import Reset from '../generics/Reset';
import { SCREEN_SIZE_DESKTOP, SCREEN_SIZE_MOBILE } from '../../state/CONSTANTS';

interface IHeader {
    books: boolean;
    places: boolean;
    characters: boolean;
    settings: boolean;
    history: boolean;
    info: boolean;
    description: string | boolean;
    navbarControlToggle: (name: boolean | string, section: string) => void;
}
export default function Header({ books, places, characters, settings, history, info, description, navbarControlToggle }: IHeader) {
    const isDesktopOrLaptop = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })
    const isTabletOrMobile = useMediaQuery({ query: SCREEN_SIZE_MOBILE })

    const [searching, setSearching] = useState<string>("")

    const dispatch = useDispatch()

    // changed each to be on click rather than real time to reduce input lag
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
        onSearchReset(e)
        dispatch(reset())
        dispatch(resetActiveData())
        dispatch(resetActiveCity())
        dispatch(resetActiveCharacter())
    }

    return (
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

            <Buttons
                books={books}
                places={places}
                characters={characters}
                settings={settings}
                history={history}
                info={info}
                description={description !== ""}
                navbarControlToggle={navbarControlToggle}
            />
        </div>
    )
}