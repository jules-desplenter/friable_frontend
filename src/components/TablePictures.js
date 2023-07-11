import React, { useState, useMemo, useEffect } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import { useNavigate } from 'react-router-dom'
import useDeletePicture from '../hooks/useDeletePicture'
const TablePictures = ({ data, id }, props) => {
    const navigate = useNavigate()
    const [filterValue, setFilterValue] = useState('')
    const [names, setNames] = useState([])
    const deletePicture = useDeletePicture()

    useEffect(() => {
        // Remove duplicates from the cool array
        const uniqueCool = [...new Set(names)]

        // Check for duplicates and remove all instances
        const nonDuplicateCool = names.filter(
            (item) => names.indexOf(item) === names.lastIndexOf(item),
        )

        // Only update state if there are duplicates
        if (uniqueCool.length !== nonDuplicateCool.length) {
            setNames(nonDuplicateCool)
        }
    }, [names])

    const handleDelete = (value) => {
        deletePicture(id, value)
    }

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'id',
                Cell: ({ value }) => {
                    return (
                        <button
                            className="cursor-pointer bg-darkBrown px-2 rounded-2xl mt-2 items-center hover:bg-blackCustom text-white"
                            onClick={() => {
                                let split = value.split('/')
                                split = split[split.length - 1].replace('p', '')
                                handleDelete(split)
                            }}
                        >
                            Delete
                        </button>
                    )
                },
            },
            {
                Header: 'Painting',
                accessor: 'items[0].items[0].body.id',
                Cell: ({ value }) => {
                    return <img alt="painting" src={value} className="h-10" />
                },
            },
            // {
            //     Header: 'Make damage report',
            //     accessor: 'name2',
            //     Cell: ({ value }) => {
            //         return (
            //             <div className="bg-greenCustom px-2 pt-1 rounded-2xl h-8 flex align-center text-white hover:bg-blackCustom">
            //                 <a href={'/nieuwschade/' + value}>
            //                     Make damage report
            //                 </a>
            //             </div>
            //         )
            //     },
            // },
            // {
            //     Header: 'Make damage report',
            //     accessor: 'name3',
            //     Cell: ({ value }) => {
            //         return (
            //             <>
            //                 <div
            //                     className="bg-greenCustom px-2 pt-1 rounded-2xl h-8 flex align-center text-white hover:bg-blackCustom"
            //                     onClick={() => handleClick(value)}
            //                 >
            //                     Add/Remove
            //                 </div>
            //             </>
            //         )
            //     },
            // },
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
            {names.length > 0 ? (
                <>
                    <div className=" ">
                        selected pictures:_
                        {names.map((e) => e + ', ')}
                    </div>
                    <div className="flex justify-center pt-4">
                        <div
                            onClick={() =>
                                navigate('/nieuwschademeer', {
                                    state: { names },
                                })
                            }
                            className="cursor-pointer bg-greenCustom text-white mx-2 rounded-2xl hover:bg-black w-32"
                        >
                            Make damage report
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
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

export default TablePictures
