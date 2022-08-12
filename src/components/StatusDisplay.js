export default function StatusDisplay({ticket}) {

    const getColor = (status) => {
        // let color;
        switch(status) {
            case 'done':
                return 'done'
            case 'work in progress':
                return 'in-progress'
            case 'stuck':
                return 'stuck';
            default:
                return ''
        }
    }

    return (
        <div className={`status-container ${getColor(ticket.status)}`}>
            {`${ticket.status}`}
        </div>
    )
}