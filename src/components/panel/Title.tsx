import React from 'react'

import { HiX } from "react-icons/hi";


export default function Title(props) {

    const onCloseHandler = () => {
        props.onCloseHandler(false)
    }

    return (
        <div className="panel__item-container-header">
            <h5 style={{ color: props.nameColor ? props.nameColor : "inherit" }}>{props.name}</h5>
            <button onClick={onCloseHandler}><HiX /></button>
        </div>
    )
}
