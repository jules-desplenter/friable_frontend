import axios from 'axios'

const useAddRegistration = () => {
    const postRegistration = (postData, setResponse) => {
        axios
            .post('Registration', postData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                setResponse(response.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return postRegistration
}

export default useAddRegistration
