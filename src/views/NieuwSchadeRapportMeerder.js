import '../App.css'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DynamicForm from '../components/DynamicForm'
import useGetHeightAndWidth from '../hooks/UseGetHeightAndWidth'
import useAddMultipleManifest from '../hooks/useAddMultipleManifest'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function NieuwSchaderapportMeerdere(props) {
    const location = useLocation()
    const [height, setHeight] = useState([])
    const [width, setWidth] = useState([])
    useEffect(() => {
        for (let i of location.state.names) {
            const { height, width } = fetch(
                'http://localhost:8182/iiif/2/' + i + '/info.json',
            )
                .then((response) => response.json())
                .then((json) => {
                    setHeight((prevHeight) => [...prevHeight, json.height])
                    setWidth((prevWidth) => [...prevWidth, json.width])
                })
        }
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(height, width)
    }, [height, width])

    const postmanifest = useAddMultipleManifest()
    const [response, setResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event, formData) => {
        event.preventDefault()
        formData['height'] = height
        formData['width'] = width
        formData['label'] = formData['label'].split(',')
        formData['imagelink'] = location.state.names.map(
            (e) => 'http://localhost:8182/iiif/2/' + e,
        )
        postmanifest(formData, setResponse)
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
                    <div className="w-full flex justify-center pt-20">
                        <img
                            className="h-96"
                            src={
                                'http://localhost:8182/iiif/2/' +
                                location.state.names[0] +
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

export default NieuwSchaderapportMeerdere
