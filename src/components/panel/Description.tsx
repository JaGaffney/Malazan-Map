import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Draggable, { DraggableCore } from "react-draggable"
import ScrollContainer from 'react-indiana-drag-scroll';

import { bookColor } from '../utils/color';
import characters from "../../data/characters"
import book from "../../data/books"

import { resetActiveData, updateActiveCharacter } from "../../state/features/engine"
import Title from './Title';

export default function Description() {
    const activeData = useSelector((state: any) => state.filter.activeData)
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const dispatch = useDispatch()

    const onCloseHandler = () => {
        dispatch(resetActiveData())
    }


    return (

        <Draggable handle="h5" >
            <div className="panel panel__books panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable" >

                            <Title name={`(${book[activeData.book].book}) ${activeData.name}`} nameColor={bookColor(activeData.book)} onCloseHandler={onCloseHandler} />

                            <div className="panel__item-container-info description-large">
                                {activeData.description.map((i: string, k: number) => {
                                    return (
                                        <p className="panel__item-container-info-description " key={k}>{i}</p>
                                    )
                                })}
                            </div>


                            <h4>Characters</h4>
                            <div className="panel__item-container-table">
                                {activeData.char.map((i: number, k: number) => {
                                    let active = ""
                                    if (activeCharacter.includes(i) || activeCharacter.length === 0) {
                                        active = "panel__item-container-info-active"
                                    }
                                    return (
                                        <div key={k} className={`panel__item-container-info panel__item-container-info-inactive ${active}`} onClick={() => dispatch(updateActiveCharacter(i))}>
                                            <span>{characters[i].name[0]}</span>
                                            {/* <ReactSVG src={findRaceByName(characters[i].race)} className={active} /> */}
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    </div>
                </ScrollContainer>

            </div>
        </Draggable>
    )
}
