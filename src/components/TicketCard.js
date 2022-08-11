
import { Link } from 'react-router-dom'

import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'

export default function TicketCard() {
    return (
        <div className="ticket-card">
            <Link>
                <div className="ticket-color"></div>
                <h3>title</h3>
                <AvatarDisplay />
                <StatusDisplay />
                <ProgressDisplay />
                <PriorityDisplay />
            </Link>
            <DeleteBlock />
        </div>
    )
}