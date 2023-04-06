import '../App.css'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DynamicForm from '../components/DynamicForm'

function NieuwSchaderapport() {
    const { url } = useParams()
    useEffect(() => console.log(url), [url])

    const handleSubmit = (event, formData) => {
        event.preventDefault()
        console.log(formData)
    }

    const fields = [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'date', label: 'date', type: 'text' },
        { name: 'classificatie', label: 'classificatie', type: 'text' },
        { name: 'object nummmer', label: 'objectNummmer', type: 'text' },
        { name: 'artist', label: 'artist', type: 'text' },
        { name: 'medium', label: 'medium', type: 'text' },
        { name: 'techniek', label: 'techniek', type: 'text' },
    ]

    return (
        <>
            <div className="w-full flex justify-center mt-6">
                <img
                    className="h-96"
                    src={
                        'http://localhost:8182/iiif/2/' +
                        url +
                        '/full/max/0/default.jpg'
                    }
                    alt="selected painting"
                />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-1/4 mt-6">
                    <DynamicForm fields={fields} handleSubmit={handleSubmit} />
                </div>
            </div>
        </>
    )
}

export default NieuwSchaderapport
