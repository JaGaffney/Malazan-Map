import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiStar, HiOutlineStar } from "react-icons/hi";
import Draggable, { DraggableCore } from "react-draggable"

import { resetActiveBooks, updateActiveBooks } from "../../state/features/engine"
import { bookColor } from '../utils/color'
import ScrollContainer from 'react-indiana-drag-scroll';
import Title from './Title';

const Book = (props) => {
    const activeBooks = useSelector((state: any) => state.filter.activeBooks)
    const dispatch = useDispatch()

    return (
        <div className="panel__item-container-info" style={{ color: bookColor(props.book) }} onClick={() => dispatch(updateActiveBooks(props.book))}>
            <span>Book {props.book} - {activeBooks.includes(props.book) ? props.name : "???"}</span>
            <span>{activeBooks.includes(props.book) ? <HiStar /> : <HiOutlineStar />}</span>
        </div>
    )
}

export default function Books(props) {
    const dispatch = useDispatch()

    return (
        <Draggable handle="h5" >
            <div className="panel panel__books panel__draggable">

                <ScrollContainer className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable" >

                            <Title name={"Books"} onCloseHandler={props.onCloseHandler} />

                            <div className="panel__item-container-info" onClick={() => dispatch(resetActiveBooks())}>
                                <span>Show all</span>
                            </div>

                            <Book book={1} name={"Gardens of the Moon"} />
                            <Book book={2} name={"Deadhouse Gates"} />
                            <Book book={3} name={"Memories of Ice"} />
                            <Book book={4} name={"House of Chains"} />
                            <Book book={5} name={"Midnight Tides"} />
                            <Book book={6} name={"The Bonehunters"} />
                            <Book book={7} name={"Reaper's Gale"} />
                            <Book book={8} name={"Toll the Hounds"} />
                            <Book book={9} name={"Dust of Dreams"} />
                            <Book book={10} name={"The Crippled God"} />
                        </div>
                    </div>
                </ScrollContainer>

            </div>
        </Draggable>
    )
}
