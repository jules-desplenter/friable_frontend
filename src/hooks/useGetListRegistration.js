import { useState, useEffect } from 'react'
import axios from 'axios'

function useGetListRegistration(id) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [element, setElement] = useState(null)

    useEffect(() => {
        async function fetchElement() {
            try {
                const response = await axios.get(`registration`)
                setElement(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchElement()
    }, [id])

    return { loading, error, element }
}

export default useGetListRegistration
