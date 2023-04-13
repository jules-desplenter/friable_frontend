import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetBlobList = () => {
    const [post, setPost] = useState(null)

    const fetchBlobs = () => {
        axios.get('blob').then((response) => {
            setPost(response.data)
        })
    }

    const refresh = () => {
        fetchBlobs()
    }

    useEffect(() => {
        fetchBlobs()
    }, [])

    return { post, refresh }
}

export default useGetBlobList
