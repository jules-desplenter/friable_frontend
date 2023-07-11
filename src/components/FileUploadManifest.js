import React, { useState } from 'react'
import axios from 'axios'

const FileUploadManifest = (props) => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [selectedFileNames, setSelectedFileNames] = useState([])
    const [imageDimensions, setImageDimensions] = useState([])
    const { id } = props
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files)
        let fileNames = []
        let fileDimensions = []
        console.log(event.target.files, 'checkeding')
        for (let i of event.target.files) {
            console.log(i)
            fileNames.push(i.name)
            const reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (e) => {
                const img = new Image()
                img.src = e.target.result
                img.onload = () => {
                    fileDimensions.push({
                        width: img.naturalWidth,
                        height: img.naturalHeight,
                    })
                }
                img.src = e.target.result
            }
        }
        setSelectedFileNames(fileNames)
        setImageDimensions(fileDimensions)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        for (let i in selectedFiles) {
            const formData = new FormData()
            formData.append('file', selectedFiles[i])
            try {
                if (selectedFileNames[i] !== undefined) {
                    await axios.post('blob', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${localStorage.getItem(
                                'token',
                            )}`,
                        },
                    })
                    await axios.post(
                        'Manifest/AddPicture/' + id,
                        {
                            height: imageDimensions[i].height,
                            width: imageDimensions[i].width,
                            imageLink: `https://cantaloupe.greenbush-39a95729.francecentral.azurecontainerapps.io/iiif/2/${selectedFileNames[i]}`,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    'token',
                                )}`,
                            },
                        },
                    )
                }
            } catch (error) {
                console.error(error)
            }
        }
        props.setIsOpen(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" multiple onChange={handleFileChange} />
            <button
                type="submit"
                className="bg-greenCustom rounded-2xl w-16 m-6 cursor-pointer text-white hover:bg-blackCustom"
            >
                Upload
            </button>
        </form>
    )
}

export default FileUploadManifest
