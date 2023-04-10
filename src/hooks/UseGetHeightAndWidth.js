import { useState, useEffect } from 'react'

const useGetHeightAndWidth = (url) => {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8182/iiif/2/' + url + '/info.json')
            .then((response) => response.json())
            .then((json) => {
                setHeight(json.height)
                setWidth(json.width)
            })
    }, [url])

    return { height, width }
}

export default useGetHeightAndWidth
