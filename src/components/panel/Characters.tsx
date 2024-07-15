
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import ScrollContainer from 'react-indiana-drag-scroll';
import Draggable from 'react-draggable';

import { updateActiveCharacter, resetActiveCharacter } from "../../state/features/engine"
import characters from "../../data/characters"
import { validFilterQuery } from '../utils/helpers';
import { bookColor } from '../utils/color'

import { eventIcons } from "../../data/icons";
import Title from './Title';

interface ICharacters {
    onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Characters({ onCloseHandler }: ICharacters) {
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const search = useSelector((state: any) => state.filter.search)
    const dispatch = useDispatch()

    const findRaceByName = (name: string): string => {
        switch (name) {
            case ("human"):
                return eventIcons.human
            case ("soultaken"):
                return eventIcons.soultaken
            case ("Tiste Andii"):
            case ("Tiste Edur"):
            case ("tisti"):
                return eventIcons.tisti
            case ("T'lan Imass"):
            case ("undead"):
                return eventIcons.tlanimass
            case ("trell"):
            case ("Barghast"):
            case ("Teblor"):
                return eventIcons.tribal
            case ("jaghurt"):
                return eventIcons.jaghurt
            case ("ascended"):
                return eventIcons.ascended
            default:
                return eventIcons.warren
        }
    }

    return (

        <Draggable handle="h5" >
            <div className="panel panel__characters panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable">

                            <Title name={"Characters"} onCloseHandler={onCloseHandler} />


                            <div className="panel__item-container-info" onClick={() => dispatch(resetActiveCharacter())}>
                                <button>Show all</button>
                            </div>

                            <table className="panel__item-table">
                                <thead>
                                    <tr className="panel__item-table-item" style={{ textAlign: "left" }}>
                                        <th>Name</th>
                                        <th>Race</th>
                                        <th>Book</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Object.keys(characters).map((i: any, k: number) => {
                                        console.log(activeCharacter)
                                        let active = ""
                                        if (activeCharacter.includes(parseInt(i)) || activeCharacter.length === 0) {
                                            active = "panel__item-container-info-active"
                                        }
                                        if (validFilterQuery(characters[i].name, search)) {
                                            return (
                                                <tr key={k} className={`panel__item-container-info panel__item-container-info-inactive ${active}`} style={{ display: "table-row", textAlign: "left" }} onClick={() => dispatch(updateActiveCharacter(parseInt(i)))}>
                                                    <td>{characters[i].name}</td>
                                                    <td><ReactSVG src={findRaceByName(characters[i].race)} className={active} /></td>
                                                    <td style={{ color: bookColor(parseInt(characters[i].intro)), textAlign: "center" }}>{characters[i].intro}</td>
                                                </tr>
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    })}
                                </tbody>

                            </table>

                        </div>
                    </div>

                </ScrollContainer>

            </div >

        </Draggable >
    )
}
