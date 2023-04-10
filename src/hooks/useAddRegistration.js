import axios from 'axios'

const useAddRegistration = () => {
    const postRegistration = (postData, setResponse) => {
        axios.post('Registration', postData).then((response) => {
            setResponse(response.data)
        })
    }

    return postRegistration
}

export default useAddRegistration
