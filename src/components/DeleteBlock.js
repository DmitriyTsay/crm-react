import deleteImage from '../images/delete.png'
import axios from 'axios'

export default function DeleteBlock({ documentId }) {

    const deleteTicket = async (e, documentId) => {
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND}/tickets/${documentId}`)
        const success = response.status == 204;

        if (success) {
            window.location.reload();
        }
    }

    return (
        <div className="delete-block" onClick={(e) => deleteTicket(e, documentId)}>
            <img src={deleteImage} alt="Delete" />
        </div>
    )
}