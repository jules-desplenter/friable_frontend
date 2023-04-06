import '../App.css'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Mirador from 'mirador/dist/mirador.min.js'

function SchadeRapportEditor() {
    const { url } = useParams()
    useEffect(() => console.log(url), [url])

    const containerStyle = {
        width: '50%',
        height: 'calc(100vh - 58px)',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
    }

    document.addEventListener('DOMContentLoaded', () => {
        Mirador.viewer({
            id: 'app',
            windows: [
                {
                    manifestId:
                        'https://localhost:7148/api/manifest/https://iiif.io/api/cookbook/recipe/001-mvm-image/manifest.json',
                    sideBarOpen: false,
                },
            ],
        })
        let blubber = document.getElementsByClassName('MuiIconButton-label')
        blubber.item(7) ? blubber.item(7).click() : console.log('not found')
    })

    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-1/2">joepie</div>
                <div style={containerStyle}>
                    <div id="app"></div>
                </div>
            </div>
        </>
    )
}

export default SchadeRapportEditor
