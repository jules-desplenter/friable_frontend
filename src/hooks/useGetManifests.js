import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetManifest = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get('manifest').then((response) => {
            setPost(response.data)
        })
    }, [])

    return post
}

export default useGetManifest
