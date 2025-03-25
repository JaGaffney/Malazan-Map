import { useDispatch, useSelector } from 'react-redux'
import Draggable, { DraggableCore } from "react-draggable"
import ScrollContainer from 'react-indiana-drag-scroll';

import { bookColor } from '../utils/color';

import characters from "../../data/characters"
import book from "../../data/books"

import { resetActiveData, updateActiveCharacter } from "../../state/features/engine"
import Title from '../generics/Title';
import Note from '../generics/Note';

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
                <Title name={`${activeData.name}`} nameColor={bookColor(activeData.book)} onCloseHandler={onCloseHandler} />


                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">


                        <div className="panel__item-container panel__header-draggable panel__item-maxWidth" >
                            <h4>Chapter Summary</h4>
                            <div className="panel__item-container-info description-large">
                                {activeData.description.map((i: string, k: number) => {
                                    return (
                                        <p className="panel__item-container-info-description " key={k}>{i}</p>
                                    )
                                })}
                            </div>


                            <h4>Key Characters in chapter</h4>
                            <Note message={"select character to display their timeline events."} />
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

                            <p className="panel__item-container-info-description"><i>{book[activeData.book].name}{activeData.citation !== "" && `: ${activeData.citation}`}</i></p>
                        </div>
                    </div>
                </ScrollContainer>

            </div>
        </Draggable>
    )
}
