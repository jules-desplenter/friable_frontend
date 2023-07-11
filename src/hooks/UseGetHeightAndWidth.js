import { useState, useEffect } from 'react'

const useGetHeightAndWidth = (url) => {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        fetch(
            'https://cantaloupe.greenbush-39a95729.francecentral.azurecontainerapps.io/iiif/2/' +
                url +
                '/info.json',
        )
            .then((response) => response.json())
            .then((json) => {
                setHeight(json.height)
                setWidth(json.width)
            })
            .catch(function (err) {
                console.info(err + ' url: ' + url)
            })
    }, [url])

    return { height, width }
}

export default useGetHeightAndWidth
