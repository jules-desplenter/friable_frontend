import '../App.css'
import React from 'react'
import useGetBlobList from '../hooks/UseGetBlobList'
import TableBlob from '../components/TableBlob'
import Modal from 'react-modal'
import FileUpload from '../components/FileUpload'
import { useState } from 'react'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

function BlobList() {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00'
    }

    function closeModal() {
        setIsOpen(false)
    }

    const { post, refresh } = useGetBlobList()
    console.log(post)
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>Add your painting</div>
                <div>
                    <FileUpload
                        setIsOpen={setIsOpen}
                        refresh={refresh}
                    ></FileUpload>
                </div>
            </Modal>
            <div className="w-full flex justify-center pt-16">
                <div className="w-1/2">
                    {post ? <TableBlob data={post}></TableBlob> : null}
                </div>
            </div>

            <div
                onClick={openModal}
                className="bg-greenCustom rounded-2xl fixed bottom-0 right-0 m-6 cursor-pointer text-white hover:bg-blackCustom"
            >
                <p className="mx-4 my-1">Voeg schilderij toe</p>
            </div>
        </>
    )
}

export default BlobList
