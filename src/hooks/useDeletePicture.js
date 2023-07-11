import axios from 'axios'

const useDeletePicture = () => {
    const deletePicture = (id, index) => {
        axios
            .delete(`Manifest/${id}/${index}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((response) => {
                console.log(response.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return deletePicture
}

export default useDeletePicture
