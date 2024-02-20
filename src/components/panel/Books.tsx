import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiStar, HiOutlineStar } from "react-icons/hi";
import Draggable, { DraggableCore } from "react-draggable"

import { resetActiveBooks, updateActiveBooks } from "../../state/features/engine"
import { bookColor, seriesColor } from '../utils/color'
import books from "../../data/books"
import ScrollContainer from 'react-indiana-drag-scroll';
import Title from './Title';

const Book = (props) => {
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const dispatch = useDispatch()

    const activeBookColor = activeBooks.includes(props.id) ? bookColor(props.id) : ""

    return (
        <tr className="panel__item-container-info" style={{ color: activeBookColor, display: "table-row", textAlign: "left" }} onClick={() => dispatch(updateActiveBooks(props.id))}>
            <span>{activeBooks.includes(props.id) ? <HiStar /> : <HiOutlineStar />}</span>
            <td>{props.year}</td>
            <td>{props.name}</td>
            <td style={{ color: seriesColor(props.author) }}>{props.series}</td>
            <td style={{ textAlign: "center" }}>{props.book}</td>
        </tr>
    )
}

export default function Books(props) {
    const dispatch = useDispatch()

    return (
        <Draggable handle="h5" >
            <div className="panel panel__books panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable" >

                            <Title name={"Books"} onCloseHandler={props.onCloseHandler} />

                            <div className="panel__item-container-info" onClick={() => dispatch(resetActiveBooks())}>
                                <span>Show all</span>
                            </div>

                            <table className="panel__item-table">
                                <thead>
                                    <tr className="panel__item-table-item" style={{ textAlign: "left" }}>
                                        <th></th>
                                        <th>Year</th>
                                        <th>Name</th>
                                        <th>Series</th>
                                        <th>Book</th>
                                    </tr>
                                </thead>

                                <tbody>


                                    {Object.keys(books).map((i, k) => {
                                        return (
                                            <Book key={k}
                                                id={books[i].id}
                                                book={books[i].book}
                                                name={books[i].name}
                                                year={books[i].year}
                                                series={books[i].series}
                                                author={books[i].author}
                                            />
                                        )

                                    })}

                                </tbody>

                            </table>
                        </div>


                    </div>
                </ScrollContainer>

            </div>
        </Draggable>
    )
}
