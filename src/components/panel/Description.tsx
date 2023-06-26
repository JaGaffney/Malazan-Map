import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Draggable, { DraggableCore } from "react-draggable"
import ScrollContainer from 'react-indiana-drag-scroll';

import { bookColor } from '../utils/color';
import characters from "../../data/characters"
import AREAS from "../../data/areas"
import { resetActiveData } from "../../state/features/engine"
import Title from './Title';

export default function Description() {
    const activeData = useSelector((state: any) => state.filter.activeData)
    const dispatch = useDispatch()

    const onCloseHandler = (value) => {
        dispatch(resetActiveData())
    }

    return (

        <Draggable handle="h5" >
            <div className="panel panel__books panel__draggable">

                <ScrollContainer className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable" >
                            <>
                                <Title name={activeData.name} nameColor={bookColor(activeData.book)} onCloseHandler={onCloseHandler} />

                                <div className="panel__item-container-info">
                                    <span>Location: {AREAS[activeData.area - 1].name}</span>
                                    <span>Book: {activeData.book}</span>
                                </div>

                                <div className="panel__item-container-info">
                                    <span>{activeData.description}</span>
                                </div>

                                {activeData.char.map((i, k) => {
                                    return (
                                        <div className="panel__item-container-info" key={k}>
                                            <span>{characters[i].name}</span>
                                        </div>
                                    )
                                })}

                            </>
                        </div>
                    </div>
                </ScrollContainer>

            </div>
        </Draggable>
    )
}
