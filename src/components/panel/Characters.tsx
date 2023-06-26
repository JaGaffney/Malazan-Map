import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiUser, HiOutlineUser } from "react-icons/hi2";
import { ReactSVG } from 'react-svg'

import { updateActiveCharacter, resetActiveCharacter } from "../../state/features/engine"
import characters from "../../data/characters"
import { validFilterQuery } from '../utils/helpers';
import ScrollContainer from 'react-indiana-drag-scroll';
import Draggable from 'react-draggable';

import { eventIcons } from "../../data/icons";
import Title from './Title';


export default function Characters(props) {
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
            case ("tisti"):
                return eventIcons.tisti
            case ("T'lan Imass"):
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

                <ScrollContainer className="panel-scroll" draggingClassName={"timeline__container-drag"}>

                    <div className="panel__item">
                        <div className="panel__item-container panel__header-draggable">

                            <Title name={"Characters"} onCloseHandler={props.onCloseHandler} />


                            <div className="panel__item-container-info" onClick={() => dispatch(resetActiveCharacter())}>
                                <span>Show all</span>
                            </div>
                            {Object.keys(characters).map((i, k) => {
                                let active = ""
                                if (activeCharacter.includes(parseInt(i))) {
                                    active = "panel__item-container-info-active"
                                }
                                if (validFilterQuery(characters[i].name, search)) {
                                    return (
                                        <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateActiveCharacter(parseInt(i)))}>
                                            <span>{characters[i].name}</span>
                                            {/* <span>{activeCharacter.includes(parseInt(i)) ? <HiUser /> : <HiOutlineUser />}</span> */}
                                            <ReactSVG src={findRaceByName(characters[i].race)} className={active} />
                                        </div>
                                    )
                                }
                                else {
                                    return null
                                }

                            })}
                        </div>
                    </div>

                </ScrollContainer>

            </div >

        </Draggable >
    )
}
