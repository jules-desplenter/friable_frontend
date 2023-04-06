import React, { useState, useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'

const TableBlob = ({ data }) => {
    const [filterValue, setFilterValue] = useState('')

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Painting',
                accessor: 'uri',
                Cell: ({ value }) => {
                    return <img alt="painting" src={value} className="h-10" />
                },
            },
            {
                Header: 'Schaderapport maken',
                accessor: 'name2',
                Cell: ({ value }) => {
                    return (
                        <div className="bg-greenCustom px-2 pt-1 rounded-2xl h-8 flex align-center">
                            <a href={'/nieuwschade/' + value}>
                                Schaderapport maken
                            </a>
                        </div>
                    )
                },
            },
        ],
        [],
    )

    const tableData = useMemo(() => data, [data])

    const tableInstance = useTable(
        {
            columns,
            data: tableData,
        },
        useGlobalFilter,
        useSortBy,
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
    } = tableInstance

    const handleFilterChange = (event) => {
        const value = event.target.value
        setGlobalFilter(value)
        setFilterValue(value)
    }

    return (
        <>
            <div className="w-full flex justify-begin">
                <input
                    type="text"
                    placeholder="Search"
                    value={filterValue}
                    onChange={handleFilterChange}
                    className="mt-6 w-20 border-2 rounded-2xl pl-2 ml-0 align-center"
                />
            </div>
            <table {...getTableProps()} className="w-full">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            className="w-full flex mb-2 border-b-2 pb-2 mb-4"
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps(),
                                    )}
                                    className={
                                        (column.isSorted
                                            ? column.isSortedDesc
                                                ? 'desc'
                                                : 'asc'
                                            : '',
                                        'w-1/3')
                                    }
                                >
                                    {column.render('Header')}
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' ↓'
                                            : ' ↑'
                                        : ''}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr
                                {...row.getRowProps()}
                                className="w-full flex align-center mb-4"
                            >
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="w-1/3 justify-center flex"
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableBlob
