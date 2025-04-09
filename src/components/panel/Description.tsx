import { useDispatch, useSelector } from 'react-redux'

import { bookColor } from '../utils/color';

import characters from "../../data/characters"
import book from "../../data/books"

import { resetActiveData, updateActiveCharacter } from "../../state/features/engine"
import Note from '../generics/Note';
import Panel from './Panel';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE_DESKTOP } from '../../state/CONSTANTS';

export default function Description({ onClickHandler }: any) {
    const activeData = useSelector((state: any) => state.filter.activeData)
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const isDesktopOrLaptop = useMediaQuery({ query: SCREEN_SIZE_DESKTOP })
    const dispatch = useDispatch()

    const onCloseHandler = () => {
        if (isDesktopOrLaptop) {
            dispatch(resetActiveData())
        } else {
            onClickHandler()
        }
    }

    return (
        <Panel name={`${activeData.name}`} nameColor={bookColor(activeData.book)} screenLocation="middle" onCloseHandler={onCloseHandler}>
            <div className="panel__item-container panel__header-draggable panel__item-maxWidth" >
                <h4>Summary</h4>
                <div className="panel__item-container-info description-large">
                    {activeData.description.map((i: string, k: number) => {
                        return (
                            <p className="panel__item-container-info-description " key={k}>{i}</p>
                        )
                    })}
                </div>

                <h4>Characters</h4>
                <Note message={"Select character below to display their timeline events."} />
                <div className="panel__item-container-table">
                    {activeData.char.map((i: number, k: number) => {
                        let active = ""
                        if (activeCharacter.includes(i) || activeCharacter.length === 0) {
                            active = "panel__item-container-info-active"
                        }
                        return (
                            <div key={k} className={`panel__item-container-info panel__item-container-info-inactive ${active}`} onClick={() => dispatch(updateActiveCharacter(i))}>
                                <span>{characters[i].name[0]}</span>
                            </div>
                        )
                    })}
                </div>

                <p className="panel__item-container-info-description"><i>{book[activeData.book].name}{activeData.citation !== "" && `: ${activeData.citation}`}</i></p>
            </div>
        </Panel>

    )
}
