import { useState, useEffect } from 'react'
import axios from 'axios'

function useGetManifest(id) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [element, setElement] = useState(null)

    useEffect(() => {
        async function fetchElement() {
            try {
                const response = await axios.get(
                    `Manifest/${id}/manifest.json`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                'token',
                            )}`,
                        },
                    },
                )
                setElement(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchElement()
    }, [id])

    const refresh = async () => {
        try {
            const response = await axios.get(`Manifest/${id}/manifest.json`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            setElement(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, element, refresh }
}

export default useGetManifest
