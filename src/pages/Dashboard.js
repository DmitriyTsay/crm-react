
//Components
import TicketCard from '../components/TicketCard';

export default function Dashboard() {

    const tickets = [
        {
            category: 'Q1 2021',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Tsay Dmitriy',
            avatar: '',
            status: 'done',
            priority: 5,
            progress: 100,
            description: 'Make a video showcasing how to work with NFTs',
            timestamp: '2022-08-12T01:45:20+0000',
        },
        {
            category: 'Q1 2021',
            color: 'green',
            title: 'FrontEnd development',
            owner: 'Tsay Dmitriy',
            avatar: './avatar.jpg',
            status: 'work in progress',
            priority: 2,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs',
            timestamp: '2022-08-12T01:45:20+0000',
        },
        {
            category: 'Q2 2022',
            color: 'green',
            title: 'FrontEnd development',
            owner: 'Tsay Dmitriy',
            avatar: './avatar.jpg',
            status: 'stuck',
            priority: 2,
            progress: 70,
            description: 'Make a video showcasing how to work with NFTs',
            timestamp: '2022-08-12T01:45:20+0000',
        }
    ];

    const uniqueCategories = [
        ...new Set(tickets.map(( { category } ) => category))
    ]

    console.log(uniqueCategories);

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard 
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}