
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'

import { updateActiveCharacter, resetActiveCharacter } from "../../state/features/engine"
import characters, { ICharacter } from "../../data/characters"
import { findRaceByName, getCharacterIDByName } from '../utils/helpers';

import { defaultSeries } from '../../data/books';

import { flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table"
import { FaExternalLinkAlt } from 'react-icons/fa';
import Reset from '../generics/Reset';
import Panel from './Panel';
import { IClose } from '../interfaces/close.interface';

export default function Characters({ onCloseHandler }: IClose) {
    // table settings
    const [data, setData] = useState<ICharacter[]>(Object.values(characters))
    const [sorting, setSorting] = useState<SortingState>([
        {
            id: "name",
            desc: true,
        },
    ])

    const [activeSeries, setActiveSeries] = useState(defaultSeries)
    const activeCharacter = useSelector((state: any) => state.filter.activeCharacter)

    const dispatch = useDispatch()

    const updateActiveSeries = (series: string) => {
        let toggle: boolean = activeSeries[series]
        setActiveSeries(prevValue => ({ ...prevValue, [series]: !toggle }))
    }

    const resetCharacters = (e: any) => {
        e.preventDefault()
        setActiveSeries(defaultSeries)
        dispatch(resetActiveCharacter())
    }

    const columns: any = [
        {
            header: 'Name',
            id: "name",
            accessorKey: 'name',
            sortingFn: 'myCustomSorting',
            cell: (props: any) => <td>{props.getValue()[0]}</td>
        },
        {
            header: 'Race',
            accessorKey: 'race',
            sortingFn: 'alphanumeric', // use custom global sorting function
            cell: (props: any) => <td>{<ReactSVG src={findRaceByName(props.getValue())} />}</td>
        },
        {
            header: 'Aliases',
            cell: (props: any) => <td>{props.row.original.name.length > 1 ? (
                props.row.original.name.filter((aliase: string) => aliase != props.row.original.name[0]).map((aliase: string, ii: number, row: string[]) => (
                    <span>{aliase}{ii + 1 === row.length ? "" : ", "}</span>
                ))) : ""}</td>,
        },
        {
            header: 'Affiliation',
            accessorKey: 'affiliation',
            sortingFn: 'myCustomSorting',
            cell: (props: any) => <td className="tablerow-minwidth">{props.getValue().map((aff: string, ii: number, row: string[]) => (
                <span>{aff}{ii + 1 === row.length ? "" : ", "}</span>
            ))}</td>
        },
        {
            header: 'Role',
            accessorKey: 'role',
            sortingFn: 'alphanumeric',
            cell: (props: any) => <td>{props.getValue()}</td>
        },
        {
            header: 'Wiki',
            accessorKey: 'wiki',
            enableSorting: false,
            cell: (props: any) => <td className="panel__nohover-hover"><a href={props.getValue()} target="_blank"><FaExternalLinkAlt /></a></td>
        },
    ]

    function myCustomSorting(rowA: any, rowB: any, columnId: any): number {
        return rowA.getValue(columnId)[0] < rowB.getValue(columnId)[0] ? 1 : -1
    }

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        sortingFns: {
            myCustomSorting: myCustomSorting
        },

        enableSorting: true,
    })

    return (
        <Panel name="Characters" screenLocation="middle" onCloseHandler={onCloseHandler}>
            <div className="panel__item-container panel__header-draggable">
                <div className="toggle__button">
                    <Reset message="Reset" handler={resetCharacters} />

                    {Object.keys(defaultSeries).map((i: string, k: number) => {
                        return (
                            <button className={`toggle__button-item ${activeSeries[i] ? "toggle__button-active" : ""}`} key={k} onClick={() => updateActiveSeries(i)}>{i}</button>
                        )
                    })}

                </div>

                <table className="panel__item-table">
                    <thead>

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

                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => {
                            const characterID = getCharacterIDByName(row.original.name)

                            const contains = Object.keys(activeSeries).some(element => {
                                if (activeSeries[element]) {
                                    return row.original.series.includes(element);
                                }

                            });
                            if (contains === false) {
                                return null
                            }

                            let active = ""
                            if (activeCharacter.includes(characterID) || activeCharacter.length === 0) {
                                active = "panel__item-container-info-active"
                            }

                            return (
                                <tr key={row.id}
                                    className={`panel__item-container-info panel__item-container-info-inactive ${active}`}
                                    style={{ display: "table-row", textAlign: "left" }}
                                    onClick={() => dispatch(updateActiveCharacter(characterID))}
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

