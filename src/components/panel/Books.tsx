import React from 'react'
import { bookColor } from '../utils/color'


const Book = (props) => {
    return (
        <div className="panel__item-container-info" style={{ color: bookColor(props.book) }}>
            <span>Book {props.book}</span>
            <span>{props.status}</span>
        </div>
    )
}

export default function Books() {
    return (
        <div className="panel__item-container">
            <h5>Progress</h5>
            <Book book={1} status={"complete"} />
            <Book book={2} status={"complete"} />
        </div>
    )
}
