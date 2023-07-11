import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetManifest = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get('manifest',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        }).then((response) => {
            setPost(response.data)
        })
    }, [])

    return post
}

export default useGetManifest
