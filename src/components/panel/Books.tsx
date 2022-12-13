import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiStar, HiOutlineStar } from "react-icons/hi";

import { resetActiveBooks, updateActiveBooks } from "../../state/features/engine"
import { bookColor } from '../utils/color'



const Book = (props) => {
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const dispatch = useDispatch()

    return (

        <div className="panel__item-container-info" style={{ color: bookColor(props.book) }} onClick={() => dispatch(updateActiveBooks(props.book))}>
            <span>Book {props.book} - {props.status}</span>
            <span>{activeBooks.includes(props.book) ? <HiStar /> : <HiOutlineStar />}</span>
        </div>
    )
}

export default function Books() {
    const dispatch = useDispatch()


    return (
        <div className="panel__item-container">
            <h5>Books</h5>
            <div className="panel__item-container-info" onClick={() => dispatch(resetActiveBooks())}>
                <span>Show all</span>
            </div>
            <Book book={1} status={"complete"} />
            <Book book={2} status={"complete"} />
            <Book book={3} status={"in progress"} />
        </div>
    )
}
