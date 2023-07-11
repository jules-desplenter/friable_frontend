import '../App.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetManifest from '../hooks/useGetManifest'
import TablePictures from '../components/TablePictures'
import Modal from 'react-modal'
import FileUploadManifest from '../components/FileUploadManifest'

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

function FotosToevoegen() {
    const [modalIsOpen, setIsOpen] = useState(false)

    const { objectid } = useParams()
    const { element, refresh } = useGetManifest(objectid)
    useEffect(() => {
        console.log(element?.items)
    }, [element])

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

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>
                    Add your picture from your computer to the damage report
                </h2>
                <button
                    onClick={closeModal}
                    className="bg-greenCustom rounded-2xl w-16 m-6 cursor-pointer text-white hover:bg-blackCustom"
                >
                    close
                </button>
                <div>Add your painting</div>
                <div>
                    <FileUploadManifest
                        setIsOpen={setIsOpen}
                        refresh={refresh}
                        id={objectid}
                    ></FileUploadManifest>
                </div>
            </Modal>
            {element ? (
                <TablePictures data={element.items} id={objectid} />
            ) : (
                <div>loading</div>
            )}
            <div
                onClick={openModal}
                className="bg-greenCustom rounded-2xl fixed bottom-0 right-0 m-6 cursor-pointer text-white hover:bg-blackCustom"
            >
                <p className="mx-4 my-1">Add new picture</p>
            </div>
        </>
    )
}

export default FotosToevoegen
