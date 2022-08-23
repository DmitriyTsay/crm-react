import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import CategoriesContext from '../CategoriesContext';
require('dotenv').config();


//Components
import TicketCard from '../components/TicketCard';

export default function Dashboard() {

    const [ tickets, setTickets ] = useState([]);
    const { categories, setCategories } = useContext(CategoriesContext);
    
    // Dummy Data (!)
    // const tickets = [
    //     {
    //         category: 'Q1 2021',
    //         color: 'red',
    //         title: 'NFT Safety 101 Video',
    //         owner: 'Tsay Dmitriy',
    //         avatar: '',
    //         status: 'done',
    //         priority: 5,
    //         progress: 100,
    //         description: 'Make a video showcasing how to work with NFTs',
    //         timestamp: '2022-08-12T01:45:20+0000',
    //     },
    //     {
    //         category: 'Q1 2021',
    //         color: 'green',
    //         title: 'FrontEnd development',
    //         owner: 'Tsay Dmitriy',
    //         avatar: './avatar.jpg',
    //         status: 'work in progress',
    //         priority: 2,
    //         progress: 40,
    //         description: 'Make a video showcasing how to work with NFTs',
    //         timestamp: '2022-08-12T01:45:20+0000',
    //     },
    //     {
    //         category: 'Q2 2022',
    //         color: 'green',
    //         title: 'FrontEnd development',
    //         owner: 'Tsay Dmitriy',
    //         avatar: './avatar.jpg',
    //         status: 'stuck',
    //         priority: 2,
    //         progress: 70,
    //         description: 'Make a video showcasing how to work with NFTs',
    //         timestamp: '2022-08-12T01:45:20+0000',
    //     }
    // ];

    // Getting data from database
    useEffect(() => {
        async function fetchTickets() {
            const response = await axios.get(`${process.env.BACKEND}/tickets`);
            
            const dataObject = response.data.data;
            
            const keysArray = Object.keys(dataObject);
            const valuesArray = Object.values(dataObject);
            
            let ticketsArray = [];
    
            for (let i = 0; i < valuesArray.length; i++) {
                valuesArray[i] = {
                    ...valuesArray[i],
                    documentId: keysArray[i]
                }
    
                ticketsArray.push(valuesArray[i]);
            }
    
            setTickets(ticketsArray);
        }

        fetchTickets();
    },[])
    
    useEffect(() => {
        setCategories([...new Set(tickets?.map(({category}) => category))])
    }, [tickets])

    const uniqueCategories = [
        ...new Set(tickets.map(( { category } ) => category))
    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)',
    ]

    console.log(tickets);

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets.length === 0 && <h3>No tickets yet were created</h3>}
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard 
                                    id={_index}
                                    color={colors[categoryIndex ? categoryIndex : categoryIndex % colors.length]}
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