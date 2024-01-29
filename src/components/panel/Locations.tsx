import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineMenu, HiOutlineMenuAlt4, HiOutlineMinus } from "react-icons/hi";

import { updateActiveCity, resetActiveCity } from "../../state/features/engine"
import { cityData } from "../../data/city"
import { bookColor } from '../utils/color';
import { validFilterQuery } from '../utils/helpers';
import ScrollContainer from 'react-indiana-drag-scroll';
import Draggable from 'react-draggable';
import Title from './Title';

export default function Locations(props) {
    const activeCity = useSelector((state: any) => state.filter.activeCity)
    const search = useSelector((state: any) => state.filter.search)
    const dispatch = useDispatch()

    return (
        <Draggable handle="h5" >
            <div className="panel panel__place panel__draggable">

                <ScrollContainer className="panel-scroll" draggingClassName={"timeline__container-drag"} horizontal={false}>
                    <div className="panel__item">

                        <div className="panel__item-container  panel__header-draggable">

                            <Title name={"Points of interest"} onCloseHandler={props.onCloseHandler} />

                            <div className={`panel__item-container-info`} onClick={() => dispatch(resetActiveCity())}>
                                <span>Reset</span>
                            </div>

                            <table className="panel__item-table">
                                <thead>
                                    <tr className="panel__item-table-item" style={{ textAlign: "left" }}>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Intro</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cityData.map((i, k) => {
                                        let active = ""
                                        if (activeCity.includes(k)) {
                                            active = "panel__item-container-info-active"
                                        }

                                        if (validFilterQuery(i.name, search)) {
                                            return (
                                                <tr key={k}
                                                    className={`panel__item-container-info ${active}`}
                                                    style={{ display: "table-row", textAlign: "left" }}
                                                    onClick={() => dispatch(updateActiveCity(k))
                                                    }
                                                >
                                                    <td>{i.name}</td>
                                                    <td>
                                                        {i.type === 1 && "City"}
                                                        {i.type === 2 && "City"}
                                                        {i.type === 3 && "Settlement"}
                                                        {i.type === 4 && "Other"}
                                                    </td>
                                                    <td style={{ color: bookColor(i.introduction), textAlign: "center" }}>{i.introduction}</td>
                                                </tr>
                                            )
                                        } else {
                                            return null
                                        }
                                    })}
                                </tbody>

                            </table>

                        </div>


                    </div>

                </ScrollContainer>


            </div>
        </Draggable>


    )
}
