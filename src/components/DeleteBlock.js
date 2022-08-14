import deleteImage from '../images/delete.png'

export default function DeleteBlock() {
    return (
        <div className="delete-block">
            <img src={deleteImage} alt="Delete" />
        </div>
    )
}