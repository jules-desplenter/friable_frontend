import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
            const response = await axios.post('blob', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response.data)
            setTimeout(() => {
                props.refresh()
            }, 1000)
        } catch (error) {
            console.error(error)
        }
        props.setIsOpen(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    )
}

export default FileUpload
