import '../App.css'
import React from 'react'

import MyDocument from '../components/PdfRenderer'
import { PDFViewer } from '@react-pdf/renderer'
import useGetRegistration from '../hooks/useGetRegistration'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function PdfViewer() {
    const { objectid } = useParams()
    const { loading, error, element } = useGetRegistration(objectid)
    useEffect(() => {
        console.log(element, loading, error)
    }, [element, loading, error])
    return element && loading === false && error === null ? (
        <>
            <PDFViewer>
                <MyDocument registratie={element} />
            </PDFViewer>
        </>
    ) : (
        'loading'
    )
}

export default PdfViewer
