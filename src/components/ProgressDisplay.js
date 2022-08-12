export default function ProgressDisplay(props) {
    return (
        <div className="progress-container">
            <p>{`${props.ticket.progress}%`}</p>
            <div className="empty-progress">
                <div 
                className="current-progress" 
                style={{width: `${props.ticket.progress}%`}}>
                </div>
            </div>
        </div>
    )
}