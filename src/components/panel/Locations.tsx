import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaWikipediaW } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

import { updateActiveCity, resetActiveCity, setAreas, resetAreas } from "../../state/features/engine"
import { cityData } from "../../data/city"

import { findRaceByName, getCityIDByName, validFilterQuery } from '../utils/helpers';
import ScrollContainer from 'react-indiana-drag-scroll';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";
import Draggable from 'react-draggable';
import Title from './Title';
import { IPanel } from './panel.inteface';
import { SortingState, useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
import { ReactSVG } from 'react-svg';

export default function Locations({ onCloseHandler }: IPanel) {
    const [data, setData] = useState(Object.values(cityData))
    const [sorting, setSorting] = useState<SortingState>([
        {
            id: "name",
            desc: false,
        },
    ])

    const activeCity = useSelector((state: any) => state.filter.activeCity)
    const areas = useSelector((state: any) => state.filter.areas)
    const search = useSelector((state: any) => state.filter.search)
    const dispatch = useDispatch()

    const showAllLocation = () => {
        dispatch(resetActiveCity())
        Object.keys(cityData).map((i, k) => dispatch(updateActiveCity(parseInt(i))))
    }


    const columns: any = [
        {
            header: 'Name',
            accessorKey: 'name',
            sortingFn: 'alphanumeric',
            cell: (props: any) => <td>{props.getValue()}</td>
        },
        {
            header: 'Areas',
            accessorKey: 'area',
            sortingFn: 'alphanumeric',
            cell: (props: any) => <td>{props.getValue()}</td>
        },
        {
            header: 'Wiki',
            accessorKey: 'wiki',
            enableSorting: false,
            cell: (props: any) => <td className="panel__nohover-hover"><a href={props.getValue()}><FaExternalLinkAlt /></a></td>
        },
        {
            header: 'Display',
            //accessorKey: 'type',
            enableSorting: false,
            cell: (props: any) =>
                <td
                    className="panel__nohover-hover"
                    onClick={() => dispatch(updateActiveCity(getCityIDByName(props.row.original.name)))}
                >
                    {activeCity.includes(getCityIDByName(props.row.original.name)) ? <FiEyeOff /> : <FiEye />}
                </td>

        },

    ]

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableSorting: true,
    })


    return (
        <Draggable handle="h5" >
            <div className="panel panel__place panel__draggable">

                <ScrollContainer hideScrollbars={false} horizontal={false} className="panel-scroll" draggingClassName={"timeline__container-drag"}>
                    <div className="panel__item">

                        <div className="panel__item-container  panel__header-draggable">

                            <Title name={"Points of interest"} onCloseHandler={onCloseHandler} />


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
                                {table.getHeaderGroups().map(headerGroup => {
                                    return (
                                        <tr id={headerGroup.id} className="panel__item-table-item" style={{ textAlign: "left" }}>
                                            {headerGroup.headers.map((header) => {
                                                return (
                                                    <th className={`${header.column.getCanSort() && "panel__item-table-header"}`} colSpan={header.colSpan} onClick={header.column.getToggleSortingHandler()}>
                                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                                    </th>
                                                )
                                            })}
                                        </tr>)
                                })}

                                <tbody>
                                    {table.getRowModel().rows.map(row => {
                                        return (
                                            <tr key={row.id}
                                                className={`panel__item-container-info panel__item-container-info-inactive panel__item-container-info-active panel__nohover`}
                                                style={{ display: "table-row", textAlign: "left" }}

                                            >
                                                {row.getVisibleCells().map(cell => {
                                                    return (
                                                        flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )
                                                    )
                                                })}
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
