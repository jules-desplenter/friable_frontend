import axios from 'axios'

const useAddMultipleManifest = () => {
    const postmanifest = (postData, setResponse) => {
        axios.post('manifest/createMultiple', postData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token',
                )}`,
            },
        }).then((response) => {
            setResponse(response.data)
        })
    }

    return postmanifest
}

export default useAddMultipleManifest
