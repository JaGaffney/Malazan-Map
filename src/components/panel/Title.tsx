import React from 'react'

import { HiX } from "react-icons/hi";
import { IPanel } from './panel.inteface';

interface ITitle extends IPanel {
    nameColor?: string;
    name: string;

}
export default function Title({ nameColor, name, onCloseHandler }: ITitle) {
    return (
        <div className="panel__item-container-header">
            <h5 style={{ color: nameColor ? nameColor : "inherit" }}>{name}</h5>
            <button onClick={() => onCloseHandler(false)}><HiX /></button>
        </div>
    )
}
