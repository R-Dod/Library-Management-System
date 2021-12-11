import React, { useMemo } from "react"
import { useTable } from 'react-table'


export const BasicTable = () => {

  const columns = [
    { accessor: 'id', title: 'ID', type: 'number', width: 10 },
    { accessor: 'title', title: 'Title', width: 130 },
    { accessor: 'author', title: 'Author', width: 130 },
    { accessor: 'category', title: 'Category', width: 130 },
    { accessor: 'publisher', title: 'Publisher', width: 130 },
    { accessor: 'cost', title: 'Cost', type: 'number', width: 10 },
    { accessor: 'ISBN', title: 'ISBN', width: 10 }
  ]

  const TableInstance = useTable({
    columns,
    data
  })

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
                  row.cells.map(cell => {
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