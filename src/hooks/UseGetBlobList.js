import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetBlobList = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get('blob').then((response) => {
            setPost(response.data)
        })
    }, [])

    return post
}

export default useGetBlobList
