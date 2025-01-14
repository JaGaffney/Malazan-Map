
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import ScrollContainer from 'react-indiana-drag-scroll';
import Draggable from 'react-draggable';

import { updateActiveCharacter, resetActiveCharacter } from "../../state/features/engine"
import characters from "../../data/characters"
import { validFilterQuery } from '../utils/helpers';

import { eventIcons } from "../../data/icons";
import Title from './Title';
import { IPanel } from './panel.inteface';
import { defaultSeries } from '../../data/books';


export default function Characters({ onCloseHandler }: IPanel) {

    const [activeSeries, setActiveSeries] = useState(defaultSeries)

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

    const updateActiveSeries = (series: string) => {
        let toggle: boolean = activeSeries[series]
        setActiveSeries(prevValue => ({ ...prevValue, [series]: !toggle }))
    }

    const weightedCharactersID: any = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
    }
    for (let key in characters) {
        let charWeight = characters[key].weight
        if (charWeight < 7) {
            weightedCharactersID[charWeight].push(parseInt(key))
        }
    }

    const resetCharacters = () => {
        setActiveSeries(defaultSeries)
        dispatch(resetActiveCharacter())
    }

    return (

        <Draggable handle="h5" >
            <div className="panel panel__characters panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable">

                            <Title name={"Main/POV Characters"} onCloseHandler={onCloseHandler} />




                            <div className="toggle__button">
                                <button className="toggle__button-reset" onClick={() => resetCharacters()}>Reset</button>
                                {Object.keys(defaultSeries).map((i: string, k: number) => {
                                    return (
                                        <button className={`toggle__button-item ${activeSeries[i] ? "toggle__button-active" : ""}`} key={k} onClick={() => updateActiveSeries(i)}>{i}</button>
                                    )
                                })}

                            </div>

                            <table className="panel__item-table">
                                <thead>
                                    <tr className="panel__item-table-item" style={{ textAlign: "left" }}>
                                        <th>Name</th>
                                        <th>Race</th>
                                        <th>Aliases</th>
                                        <th>Affiliations</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Object.keys(weightedCharactersID).map((id) => {
                                        return (
                                            weightedCharactersID[id].map((i: number, k: number) => {
                                                const names = characters[i].name
                                                const name = names[0]
                                                const contains = Object.keys(activeSeries).some(element => {
                                                    if (activeSeries[element]) {
                                                        return characters[i].series.includes(element);
                                                    }

                                                });
                                                if (contains === false) {
                                                    return null
                                                }

                                                let active = ""
                                                if (activeCharacter.includes(i) || activeCharacter.length === 0) {
                                                    active = "panel__item-container-info-active"
                                                }
                                                if (validFilterQuery(names[0], search)) {

                                                    return (
                                                        <tr key={k} className={`panel__item-container-info panel__item-container-info-inactive ${active}`} style={{ display: "table-row", textAlign: "left" }} onClick={() => dispatch(updateActiveCharacter(i))}>
                                                            <td className="tablerow-minwidth">{name}</td>
                                                            <td><ReactSVG src={findRaceByName(characters[i].race)} className={active} /></td>

                                                            <td>{names.length > 1 ? (
                                                                names.filter(aliase => aliase != name).map((aliase, ii, row) => (
                                                                    <span>{aliase}{ii + 1 === row.length ? "" : ", "}</span>
                                                                ))) : ""}</td>

                                                            <td className="tablerow-minwidth">{characters[i].affiliation.map((aff, ii, row) => (
                                                                <span>{aff}{ii + 1 === row.length ? "" : ", "}</span>
                                                            ))}</td>

                                                            <td>{characters[i].role}</td>
                                                        </tr>
                                                    )
                                                }
                                                else {
                                                    return null
                                                }
                                            }))
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
