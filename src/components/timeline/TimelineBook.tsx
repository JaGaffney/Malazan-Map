import React from 'react'
import { bookColor } from '../utils/color'
import book from "../../data/books"


function TimelineBook({ bookData, eventData }: any) {
    return (
        <div className="book">
            <div className="back" style={{ backgroundColor: bookColor(bookData) }}></div>

            <div className="page6" style={{ maskImage: `url(${eventData.icon})`, backgroundColor: "black" }}></div>
            <div className="page5" style={{ maskImage: `url(${book[bookData].icon})`, backgroundColor: "black" }}></div>

            <div className="page4"></div>
            <div className="page3"></div>
            <div className="page2"></div>
            <div className="page1"></div>

            <div className="front" style={{ backgroundColor: bookColor(bookData) }}><span>{book[bookData].book}</span></div>
        </div>
    )
}

export default TimelineBook