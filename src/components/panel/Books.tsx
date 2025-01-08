import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiStar, HiOutlineStar } from "react-icons/hi";
import Draggable, { DraggableCore } from "react-draggable"


import { resetActiveBooks, updateActiveBooks } from "../../state/features/engine"
import { bookColor, seriesColor } from '../utils/color'
import books from "../../data/books"
import ScrollContainer from 'react-indiana-drag-scroll';
import Title from './Title';
import { IPanel } from './panel.inteface';

interface IBook {
    id: number;
    book: number;
    name: string;
    author: string;
    series: string;
    year: string;
}
const Book = ({ id, year, name, author, series, book }: IBook) => {
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const dispatch = useDispatch()

    const activeBookColor = activeBooks.includes(id) ? bookColor(id) : ""

    return (
        <tr className="panel__item-container-info  panel__item-container-info-inactive " style={{ color: activeBookColor, display: "table-row", textAlign: "left" }} onClick={() => dispatch(updateActiveBooks(id))}>
            <td>{year.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td>{name}</td>
            <td style={{ color: seriesColor(author) }}>{series}</td>
            <td style={{ textAlign: "center" }}>{id != 100 && book}</td>
        </tr>
    )
}

export default function Books({ onCloseHandler }: IPanel) {
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const dispatch = useDispatch()

    const showAllBooks = () => {
        dispatch(resetActiveBooks())
        Object.keys(books).forEach((i, k) => {
            dispatch(updateActiveBooks(parseInt(i)))
        })
    }

    return (
        <Draggable handle="h5" >
            <div className="panel panel__books panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable" >

                            <Title name={"Books"} onCloseHandler={onCloseHandler} />


                            {Object.keys(books).length === activeBooks.length ? (
                                <div className={`panel__item-container-info `} onClick={() => dispatch(resetActiveBooks())}>
                                    <button>Reset</button>
                                </div>
                            ) : (
                                <div className="panel__item-container-info" onClick={() => showAllBooks()}>
                                    <button>Display all</button>
                                </div>
                            )
                            }

                            <table className="panel__item-table">
                                <thead>
                                    <tr className="panel__item-table-item" style={{ textAlign: "left" }}>
                                        <th>Year (bs)</th>
                                        <th>Name</th>
                                        <th>Series</th>
                                        <th>Book</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Object.keys(books).map((i: string, k: number) => {
                                        const id = parseInt(i)

                                        return (
                                            <Book key={k}
                                                id={id}
                                                book={books[id].book}
                                                name={books[id].name}
                                                year={books[id].year}
                                                series={books[id].series}
                                                author={books[id].author}
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
