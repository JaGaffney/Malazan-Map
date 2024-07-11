import React from 'react'

import { HiX } from "react-icons/hi";

interface ITitle {
    nameColor?: string;
    name: string;
    onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Title({ nameColor, name, onCloseHandler }: ITitle) {
    return (
        <div className="panel__item-container-header">
            <h5 style={{ color: nameColor ? nameColor : "inherit" }}>{name}</h5>
            <button onClick={() => onCloseHandler(false)}><HiX /></button>
        </div>
    )
}
