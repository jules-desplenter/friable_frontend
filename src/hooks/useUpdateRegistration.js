import axios from 'axios'

const useUpdateRegistration = (id) => {
    const postRegistration = (postData, setResponse) => {
        axios.put(`registration/${id}`, postData).then((response) => {
            setResponse(response.data)
        })
    }

    return postRegistration
}

export default useUpdateRegistration
