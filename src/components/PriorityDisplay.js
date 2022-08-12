export default function PriorityDisplay({ticket}) {
    return (
        <div className="priority-container">
            <p>{ticket.priority}</p>
            <h2 style={{color: ticket.priority >= 1 ? "yellow" : ""}}>🟊</h2>
            <h2 style={{color: ticket.priority >= 2 ? "yellow" : ""}}>🟊</h2>
            <h2 style={{color: ticket.priority >= 3 ? "yellow" : ""}}>🟊</h2>
            <h2 style={{color: ticket.priority >= 4 ? "yellow" : ""}}>🟊</h2>
            <h2 style={{color: ticket.priority >= 5 ? "yellow" : ""}}>🟊</h2>
        </div>
    )
}