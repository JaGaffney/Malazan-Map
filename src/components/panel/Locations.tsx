import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineMenu, HiOutlineMenuAlt4, HiOutlineMinus } from "react-icons/hi";

import { updateActiveCity, resetActiveCity } from "../../state/features/engine"
import { cityData } from "../../data/city"
import { calculateColorCityType, calculateColorOwner } from '../utils/color';
import { validFilterQuery } from '../utils/helpers';
import ScrollContainer from 'react-indiana-drag-scroll';
import Draggable from 'react-draggable';

export default function Locations() {
    const activeCity = useSelector((state: any) => state.filter.activeCity)
    const search = useSelector((state: any) => state.filter.search)
    const dispatch = useDispatch()

    return (
        <Draggable handle="h5" >
            <div className="panel panel__place panel__draggable">

                <ScrollContainer className="panel-scroll" draggingClassName={"timeline__container-drag"} horizontal={false}>
                    <div className="panel__item">

                        <div className="panel__item-container  panel__header-draggable">
                            <h5>Points of interest</h5>
                            <div className={`panel__item-container-info`} onClick={() => dispatch(resetActiveCity())}>
                                <span>Reset</span>
                            </div>

                            {cityData.map((i, k) => {
                                const defaultColorType = calculateColorCityType(i.type).classname
                                const defaultColorOwner = calculateColorOwner(i.owner).classname
                                let active = ""
                                if (activeCity.includes(k)) {
                                    active = "panel__item-container-info-active"
                                }

                                if (validFilterQuery(i.name, search)) {
                                    return (
                                        <div key={k} className={`panel__item-container-info ${defaultColorOwner} ${active}`} onClick={() => dispatch(updateActiveCity(k))}>
                                            <span>{i.name}</span>
                                            <span className={defaultColorType}>
                                                {i.type === 1 && <HiOutlineMenu />}
                                                {i.type === 2 && <HiOutlineMenuAlt4 />}
                                                {i.type === 3 && <HiOutlineMinus />}
                                            </span>

                                        </div>
                                    )
                                } else {
                                    return null
                                }
                            })}

                        </div>


                    </div>

                </ScrollContainer>


            </div>
        </Draggable>


    )
}
