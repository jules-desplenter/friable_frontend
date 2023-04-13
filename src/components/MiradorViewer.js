import '../App.css'
import React, { useEffect, useRef, useState } from 'react'
import mirador from 'mirador/dist/es/src/index'
import annotationPlugins from 'mirador-annotations-intl'
import AspNetAdapter from './aspnetAdapter'

function MiradorViewer(props) {
    const myElement = useRef(null)
    const [manifestUrl, setManifestUrl] = useState(
        'https://localhost:7148/api/Manifest/' + props.id + '/manifest.json',
    )

    const containerStyle = {
        width: '50%',
        height: 'calc(100vh - 58px)',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
    }

    useEffect(() => {
        let config = {
            id: 'app',
            windows: [
                {
                    manifestId: manifestUrl,

                    // sideBarOpen: false,
                    defaultSideBarPanel: 'annotations',
                    sideBarOpenByDefault: true,
                },
            ],
            annotation: {
                adapter: (canvasId) =>
                    new AspNetAdapter(
                        canvasId,
                        'https://localhost:7148/api/annotation',
                        setManifestUrl,
                    ),
            },
        }
        let cool = mirador.viewer(config, [...annotationPlugins])
        console.log(cool.render())
        setTimeout(() => {
            cool.render()
            console.log('rerendert')
        }, 5000)
        // setTimeout(() => {
        //     if (clicked) {
        //         let blubber = document.getElementsByClassName(
        //             'MuiIconButton-label',
        //         )
        //         blubber.item(7)
        //             ? blubber.item(7).click()
        //             : console.log('not found')
        //         setClicked(false)
        //     }
        // }, 100)
    }, [myElement, props.id, setManifestUrl, manifestUrl])
    return (
        <>
            <div style={containerStyle}>
                <div ref={myElement} id="app"></div>
            </div>
        </>
    )
}

export default MiradorViewer
