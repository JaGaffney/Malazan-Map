import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toggle from 'react-toggle'

import { FaExternalLinkAlt } from "react-icons/fa";

import { SortingState, useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';

import { updateActiveCity, resetActiveCity, setAreas, resetAreas } from "../../state/features/engine"
import { cityData } from "../../data/city"
import { getCityIDByName } from '../utils/helpers';

import Reset from '../generics/Reset';
import Note from '../generics/Note';
import Spacer from '../generics/Spacer';
import ItemToggle from '../generics/ItemToggle';
import Panel from './Panel';
import { IClose } from '../interfaces/close.interface';


export default function Locations({ onCloseHandler }: IClose) {
    const [data, setData] = useState(Object.values(cityData))
    const [sorting, setSorting] = useState<SortingState>([
        {
            id: "name",
            desc: false,
        },
    ])

    const activeCity = useSelector((state: any) => state.filter.activeCity)
    const areas = useSelector((state: any) => state.filter.areas)
    const dispatch = useDispatch()


    const locationDisplayHandler = (update: boolean) => {
        dispatch(resetActiveCity())
        if (update) {
            Object.keys(cityData).map((i, k) => dispatch(updateActiveCity(parseInt(i))))
        }
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
            cell: (props: any) => <td className="panel__nohover-hover"><a href={props.getValue()} target="_blank"><FaExternalLinkAlt /></a></td>
        },
        {
            header: 'Display',
            enableSorting: false,
            cell: (props: any) =>
                <td>
                    <Toggle
                        defaultChecked={activeCity.includes(getCityIDByName(props.row.original.name))}
                        icons={false}
                        onChange={() => dispatch(updateActiveCity(getCityIDByName(props.row.original.name)))}
                        className="reactToggle"
                    />
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
        <Panel name="Map Labels" screenLocation="right" onCloseHandler={onCloseHandler}>
            <div className="panel__item-container  panel__header-draggable">

                <h5>Areas</h5>
                <Note message="Displays labels above the map" />
                <ItemToggle name="Continents" data={areas} handler={() => dispatch(areas ? resetAreas() : setAreas())} />

                <Spacer />

                <h5>Citys / POI</h5>
                <Note message="Information and location of relevant POI" />
                {Object.keys(cityData).length === activeCity.length ? (
                    <Reset message="Reset" handler={() => locationDisplayHandler(false)} />
                ) : (
                    <Reset message="Display all on map" handler={() => locationDisplayHandler(true)} />
                )
                }

                <table className="panel__item-table">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => {
                            return (
                                <tr id={headerGroup.id} className="panel__item-table-item" style={{ textAlign: "left" }}>
                                    {headerGroup.headers.map((header, k) => {
                                        return (
                                            <th key={k} className={`${header.column.getCanSort() && "panel__item-table-header"}`} colSpan={header.colSpan} onClick={header.column.getToggleSortingHandler()}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        )
                                    })}
                                </tr>)
                        })}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row, k) => {
                            return (
                                <tr key={k}
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
        </Panel>
    )
}
