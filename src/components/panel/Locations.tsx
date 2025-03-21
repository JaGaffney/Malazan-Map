import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaWikipediaW } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

import { updateActiveCity, resetActiveCity, setAreas, resetAreas } from "../../state/features/engine"
import { cityData } from "../../data/city"

import { validFilterQuery } from '../utils/helpers';
import ScrollContainer from 'react-indiana-drag-scroll';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";
import Draggable from 'react-draggable';
import Title from './Title';
import { IPanel } from './panel.inteface';

export default function Locations({ onCloseHandler }: IPanel) {

    const activeCity = useSelector((state: any) => state.filter.activeCity)
    const areas = useSelector((state: any) => state.filter.areas)
    const search = useSelector((state: any) => state.filter.search)
    const dispatch = useDispatch()

    const showAllLocation = () => {
        dispatch(resetActiveCity())
        Object.keys(cityData).map((i, k) => dispatch(updateActiveCity(parseInt(i))))
    }

    //const cityDataSorted: any = cityData.slice().sort((a, b) => a.name.localeCompare(b.name))

    return (
        <Draggable handle="h5" >
            <div className="panel panel__place panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">

                        <div className="panel__item-container  panel__header-draggable">

                            <Title name={"Labels for Points of interest"} onCloseHandler={onCloseHandler} />


                            <div className="panel__item-container-info" onClick={() => dispatch(areas ? resetAreas() : setAreas())}>
                                <span>Show Area Names</span>
                                <span>{!areas ? <HiOutlineCheckCircle /> : <HiCheckCircle />}</span>
                            </div>

                            {Object.keys(cityData).length === activeCity.length ? (
                                <div className={`panel__item-container-info `} onClick={() => dispatch(resetActiveCity())}>
                                    <button>Reset</button>
                                </div>
                            ) : (
                                <div className="panel__item-container-info" onClick={() => showAllLocation()}>
                                    <button>Display all</button>
                                </div>
                            )}

                            <table className="panel__item-table">
                                <thead>
                                    <tr className="panel__item-table-item" style={{ textAlign: "left" }}>
                                        <th>Name</th>
                                        <th>Area</th>
                                        <th>Wiki</th>
                                        <th>Show</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Object.keys(cityData).map((i: any, k: number) => {
                                        let active = ""
                                        if (activeCity.includes(parseInt(i))) {
                                            active = "panel__item-container-info-active"
                                        }

                                        return (
                                            <tr key={k}
                                                className={`panel__item-container-info panel__item-container-info-inactive ${active} panel__nohover`}
                                                style={{ display: "table-row", textAlign: "left" }}
                                            >
                                                <td>{cityData[i].name}</td>
                                                <td>{cityData[i].area}</td>
                                                <td className="panel__nohover-hover"><a href={cityData[i].wiki} target="_blank"><FaExternalLinkAlt /></a></td>
                                                <td className="panel__nohover-hover" onClick={() => dispatch(updateActiveCity(parseInt(i)))}>
                                                    {active ? <HiCheckCircle /> : <HiOutlineCheckCircle />}</td>
                                            </tr>
                                        )

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
