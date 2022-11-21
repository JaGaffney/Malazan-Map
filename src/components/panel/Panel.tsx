import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

import Header from './Header'
import Locations from './Locations'
import WorldMap from './WorldMap'
import Characters from './Characters'
import Acknowledgements from './Acknowledgements'
import Books from './Books'



export default function Panel() {
    const [characters, setCharacters] = useState(true)
    const [locations, setLocations] = useState(true)
    const [books, setBooks] = useState(true)

    return (
        <ScrollContainer className="panel" draggingClassName={"timeline__container-drag"} horizontal={false}>

            <Header />
            <WorldMap />
            <div className="panel__item">
                <button className="panel__item-button" onClick={() => setCharacters(!characters)}>{characters ? <HiOutlineEyeOff /> : <HiOutlineEye />}</button>
                {characters ? <Characters /> : <div className="panel__item-container"><h5>Characters</h5></div>}
            </div>
            <div className="panel__item">
                <button className="panel__item-button" onClick={() => setLocations(!locations)}>{locations ? <HiOutlineEyeOff /> : <HiOutlineEye />}</button>
                {locations ? <Locations /> : <div className="panel__item-container"><h5>Points of interest</h5></div>}
            </div>
            <div className="panel__item">
                <button className="panel__item-button" onClick={() => setBooks(!books)}>{books ? <HiOutlineEyeOff /> : <HiOutlineEye />}</button>
                {books ? <Books /> : <div className="panel__item-container"><h5>Books</h5></div>}
            </div>
            <div className="panel__item">
                <Acknowledgements />
            </div>





        </ScrollContainer>
    )
}
