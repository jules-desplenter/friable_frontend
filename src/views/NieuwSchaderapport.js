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
    const { height, width } = useGetHeightAndWidth(url)
    const postmanifest = useAddManifest()
    const [response, setResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event, formData) => {
        event.preventDefault()
        console.log(formData['objectNumber'])
        formData['height'] = height
        formData['width'] = width
        formData['label'] = formData['objectNumber']
        formData['imagelink'] =
            'https://cantaloupe.greenbush-39a95729.francecentral.azurecontainerapps.io/iiif/2/' +
            url
        postmanifest(formData, setResponse)
        setLoading(true)
        setTimeout(() => {
            navigate('/schaderapport/' + formData['objectNumber'])
        }, 1000)
    }

    const fields = [
        { name: 'objectNumber', label: 'Inventory number', type: 'text' },
        { name: 'description', label: 'description', type: 'text' },
        { name: 'artist', label: 'artist', type: 'text' },
        { name: 'classification', label: 'classificatie', type: 'text' },
    ]

    return (
        <>
            {loading ? (
                <div>uploading the manifest</div>
            ) : (
                <>
                    <div className="w-full flex justify-center pt-20">
                        <img
                            className="h-96"
                            src={
                                'https://cantaloupe.greenbush-39a95729.francecentral.azurecontainerapps.io/iiif/2/' +
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
