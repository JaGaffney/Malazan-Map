import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";

import { addShadows, removeShadows, addDeserts, removeDeserts, addForests, removeForests } from "../../state/features/settings"



export default function Textures() {
    const shadowsData = useSelector((state) => state.settings.shadows)
    const desertData = useSelector((state) => state.settings.deserts)
    const forestData = useSelector((state) => state.settings.forest)
    const dispatch = useDispatch()

    return (
        <div className="panel__item">
            <div className="panel__item-container">
                <h5>Textures</h5>

                <div className="panel__item-container-info" onClick={() => dispatch(shadowsData ? removeShadows() : addShadows())}>
                    <span>Remove Shadows</span>
                    <span>{shadowsData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>
                <div className="panel__item-container-info" onClick={() => dispatch(desertData ? removeDeserts() : addDeserts())}>
                    <span>Remove Deserts</span>
                    <span>{desertData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>

                <div className="panel__item-container-info" onClick={() => dispatch(forestData ? removeForests() : addForests())}>
                    <span>Remove Forests</span>
                    <span>{forestData ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                </div>
            </div>
        </div>
    )
}
