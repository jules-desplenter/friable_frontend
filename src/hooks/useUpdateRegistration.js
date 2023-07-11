import axios from 'axios'

const useUpdateRegistration = (id) => {
    const postRegistration = (postData, setResponse) => {
        axios
            .put(`registration/${id}`, postData, {
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

export default useUpdateRegistration
