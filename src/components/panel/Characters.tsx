import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiUser, HiOutlineUser } from "react-icons/hi2";

import { updateActiveCharacter, resetActiveCharacter } from "../../state/features/engine"
import characters from "../../data/characters"

export default function Characters() {
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)
    const dispatch = useDispatch()
    return (
        <div className="panel__item-container">
            <h5>Characters</h5>
            <div className="panel__item-container-info" onClick={() => dispatch(resetActiveCharacter())}>
                <span>Show all</span>
            </div>
            {Object.keys(characters).map((i, k) => {
                let active = ""
                if (activeCharacter.includes(parseInt(i))) {
                    active = "panel__item-container-info-active"
                }
                return (
                    <div key={k} className={`panel__item-container-info ${active}`} onClick={() => dispatch(updateActiveCharacter(parseInt(i)))}>
                        <span>{characters[i].name}</span>
                        <span>{activeCharacter.includes(parseInt(i)) ? <HiUser /> : <HiOutlineUser />}</span>
                    </div>
                )
            })}
        </div>
    )
}
