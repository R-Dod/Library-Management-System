import React, { useMemo } from "react"
import { useTable } from 'react-table'
import Data from '../components/members.json'
import { COLUMNS } from './memberColumn'

export const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])

    const TableInstance = useTable({
        columns,
        data
    })

    console.log(data)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = TableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => {
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => {
                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>   
                            })}
                    </tr>   
                    })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell=>{
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>                                    
                                })}
                            </tr>                            
                        )
                    })
                }

            </tbody>

        </table>
    )
}