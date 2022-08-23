
import { Link } from 'react-router-dom'

import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'

export default function TicketCard({color, ticket}) {

    return (
        <div className="ticket-card">
            <Link to={`/ticket/${ticket.documentId}`} id='link'>
                <div className={`ticket-color`} style={{background: `${color}`}}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket} />
                <StatusDisplay ticket={ticket} />
                <ProgressDisplay ticket={ticket}/>
                <PriorityDisplay ticket={ticket}/>
            </Link>
            <DeleteBlock documentId={ticket.documentId}/>
        </div>
    )
}