import '../App.css'
import React, { useEffect, useRef, useState } from 'react'
import mirador from 'mirador/dist/es/src/index'
import annotationPlugins from 'mirador-annotations-intl'
import AspNetAdapter from './aspnetAdapter'
function MiradorViewer(props) {
    const myElement = useRef(null)
    const [clicked, setClicked] = useState(true)

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
                    manifestId:
                        'https://localhost:7148/api/Manifest/' +
                        props.id +
                        '/manifest.json',
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
                    ),
                exportLocalStorageAnnotations: false,
            },
        }
        mirador.viewer(config, [...annotationPlugins])
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
    }, [myElement, clicked, props.id])
    return (
        <>
            <div style={containerStyle}>
                <div ref={myElement} id="app"></div>
            </div>
        </>
    )
}

export default MiradorViewer