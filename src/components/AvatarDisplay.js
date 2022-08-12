
import blankAvatar from '../images/blank-avatar.jpg';

export default function AvatarDisplay({ticket}) {
    return (
        <div className="avatar-container">
            <div className="image-container">
                <img className="avatar" src={ticket.avatar ? ticket.avatar : blankAvatar} alt={`Avatar of ${ticket.owner}`} /> 
            </div>
            <p>{ticket.owner} </p>  
        </div>
    )
}