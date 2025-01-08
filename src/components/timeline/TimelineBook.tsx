import React from 'react'
import { bookColor } from '../utils/color'
import book from "../../data/books"
import { ReactSVG } from 'react-svg'


function TimelineBook({ bookData, eventData }: any) {
    return (
        <div className="book">
            <div className="back" style={{ backgroundColor: bookColor(bookData) }}></div>

            <ReactSVG className="page6" src={eventData.icon} />
            <ReactSVG className="page5" src={book[bookData].icon} />

            <div className="page4"></div>
            <div className="page3"></div>
            <div className="page2"></div>
            <div className="page1"></div>

            <div className="front" style={{ backgroundColor: bookColor(bookData) }}><span>{book[bookData].book === 0 ? "H" : book[bookData].book}</span></div>
        </div>
    )
}

export default TimelineBook