
//Components
import TicketCard from '../components/TicketCard';

export default function Dashboard() {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Tsay Dmitriy',
            avatar: '../images/avatar.jpeg',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs',
            timestamp: '2022-08-12T01:45:20+0000',
        },
        {
            category: 'Q1 2022',
            color: 'green',
            title: 'FrontEnd development',
            owner: 'Tsay Dmitriy',
            avatar: '../images/avatar.jpeg',
            status: 'done',
            priority: 2,
            progress: 70,
            description: 'Make a video showcasing how to work with NFTs',
            timestamp: '2022-08-12T01:45:20+0000',
        }
    ];

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                <TicketCard />
            </div>
        </div>
    )
}