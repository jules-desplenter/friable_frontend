import axios from 'axios'

const useAddManifest = () => {
    const postmanifest = (postData, setResponse) => {
        axios.post('manifest/create', postData, {
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

export default useAddManifest
