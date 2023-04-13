import '../App.css'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DynamicForm from '../components/DynamicForm'
import useGetHeightAndWidth from '../hooks/UseGetHeightAndWidth'
import useAddManifest from '../hooks/useAddManifest'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NieuwSchaderapport() {
    const { url } = useParams()
    useEffect(() => console.log(url), [url])
    const { height, width } = useGetHeightAndWidth(url)
    const postmanifest = useAddManifest()
    const [response, setResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event, formData) => {
        event.preventDefault()
        formData['height'] = height
        formData['width'] = width
        formData['imagelink'] = 'http://localhost:8182/iiif/2/' + url
        postmanifest(formData, setResponse)
        console.log(response)
        setLoading(true)
        setTimeout(() => {
            navigate('/schaderapport/' + formData['objectNumber'])
        }, 1000)
    }

    const fields = [
        { name: 'label', label: 'label', type: 'text' },
        { name: 'date', label: 'date', type: 'text' },
        { name: 'classification', label: 'classificatie', type: 'text' },
        { name: 'objectNumber', label: 'objectnummmer', type: 'text' },
        { name: 'artist', label: 'artist', type: 'text' },
        { name: 'medium', label: 'medium', type: 'text' },
        { name: 'techniek', label: 'techniek', type: 'text' },
        { name: 'provenance', label: 'provenance', type: 'textBox' },
    ]

    return (
        <>
            {loading ? (
                <div>uploading the manifest</div>
            ) : (
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
                        <div className="w-1/4 mt-6 mb-6">
                            <DynamicForm
                                fields={fields}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default NieuwSchaderapport
