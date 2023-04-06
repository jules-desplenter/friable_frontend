import '../App.css'
import React from 'react'
import useGetBlobList from '../hooks/UseGetBlobList'
import TableBlob from '../components/TableBlob'

function BlobList() {
    const bloblist = useGetBlobList()
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-1/2">
                    {bloblist ? <TableBlob data={bloblist}></TableBlob> : null}
                </div>
            </div>
            <a
                href="/bloblist"
                className="bg-greenCustom rounded-2xl fixed bottom-0 right-0 m-6"
            >
                <p className="mx-4 my-1">Voeg rapport toe</p>
            </a>
            <a
                href="/bloblist"
                className="bg-greenCustom rounded-2xl fixed bottom-0 right-0 m-6"
            >
                <p className="mx-4 my-1">Voeg schilderij toe</p>
            </a>
        </>
    )
}

export default BlobList
