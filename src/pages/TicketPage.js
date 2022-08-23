import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CategoriesContext from '../CategoriesContext';

export default function TicketPage({editMode}) {

    const [ inputState, setInputState ] = useState({
        title: '',
        description: '',
        category: 'none',
        priority: '1',
        time: new Date(),
        progress: 0,
        owner: '',
        avatar: '',
        status: 'work-in-progress',
    })

    const [ newCategoryStatus, setNewCategoryStatus ] = useState(false);

    const { categories, setCategories } = useContext(CategoriesContext);

    let { id } = useParams();
    
    // Hook to fetch TicketData if editMode is enabled
    useEffect(() => {
        if (!editMode) {
            return 
        }

        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/tickets/${id}`)
            
            const success = response.status == 200 
            if (success) {
                const ticketData = response.data.data;
                console.log(ticketData);
                setInputState((prevInputState) => {
                    return {
                        ...ticketData
                    }
                })
            }
        }
        
        fetchData();
    }, [])


    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!editMode) {
            const response = await axios.post(`${process.env.BACKEND}/tickets`, {
                inputState
            })
            const success = response.status === 200;
            if (success) {
                navigate('/')
            }  
        } else {
            const response = await axios.put(`${process.env.BACKEND}/tickets/${id}`, {
                inputState
            })
            const success = response.status == 200;
            if (success) {
                navigate('/') 
            }
        }
    }

    function handleChange(event) {
        const { value, name } = event.target;

        setInputState((prevInputState) => {
            return {
                ...prevInputState,
                [name]: value,
            }
        })
    }

    const toggleCategory = () => {
        setNewCategoryStatus((prevCategoryStatus) => {
            return !prevCategoryStatus;
        })

        if (newCategoryStatus) {
            setInputState((prevInputState) => {
                return {
                    ...prevInputState,
                    category: 'none'
                }
            })
        }
    }
    
    return (
        <div className="ticket-page">
            <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
            <form className='ticket-edit' onSubmit={handleSubmit}>
                <section>
                    {/* Title */}
                    <label htmlFor="title">Ticket Title</label>
                    <input 
                        type='text'
                        id='title'
                        name='title'
                        onChange={(event) => {handleChange(event)}}
                        value={inputState.title}
                        required={true}
                    />
                    
                    {/* Description */}
                    <label htmlFor="description">Description</label>
                    <input 
                        type='text'
                        id='description'
                        name='description'
                        onChange={(event) => {handleChange(event)}}
                        value={inputState.description}
                        required={true}
                    />

                    {/* Category */}
                    <label htmlFor="category">Category</label>
                    {newCategoryStatus
                        ?
                        <input 
                            id='category'
                            name='category'
                            value={inputState.category}
                            onChange={handleChange}
                        />
                        :
                        <select 
                            id='category'
                            name='category'
                            value={inputState.category}
                            onChange={handleChange}
                        >
                            {categories?.map((category) => {
                                return <option>{category}</option>
                            })}
                            <option>none</option>
                        </select>
                    }

                    {/* New Category - toggle checkbox */}
                    <label htmlFor="newCategory">New Category</label>
                    <div>
                        <input 
                            type='checkbox'
                            id='newCategory'
                            name='newCategory'
                            onChange={(event) => {toggleCategory(event)}}
                            checked={newCategoryStatus}
                        />
                    </div>

                    {/* Priority */}
                    <label htmlFor="priority">Priority</label>
                    <div className='priority-container'>
                        <input 
                            type='radio'
                            name="priority"
                            onChange={(event) => {handleChange(event)}}
                            value={1}
                            checked={inputState.priority === '1'}
                        /> 1
                        <input 
                            type='radio'
                            name="priority"
                            onChange={(event) => {handleChange(event)}}
                            value={2}
                            checked={inputState.priority === '2'}
                        /> 2
                        <input 
                            type='radio'
                            name="priority"
                            onChange={(event) => {handleChange(event)}}
                            value={3}
                            checked={inputState.priority === '3'}
                        /> 3
                        <input 
                            type='radio'
                            name="priority"
                            onChange={(event) => {handleChange(event)}}
                            value={4}
                            checked={inputState.priority === '4'}
                        /> 4
                        <input 
                            type='radio'
                            name="priority"
                            onChange={(event) => {handleChange(event)}}
                            value={5}
                            checked={inputState.priority === '5'}
                        /> 5
                    </div>

                    {/* Progress (only if editMode is enabled) */}
                    { editMode && <label htmlFor='progress'>Progress</label> }
                    { editMode && <input 
                        type='range'
                        id='progress'
                        name='progress'
                        min={0}
                        max={100}
                        onChange={(event) => {handleChange(event)}}
                        value={inputState.progress}
                    /> }

                    {/* Status */}
                    <label htmlFor="status">Status</label>
                    <select 
                        id='status'
                        name='status'
                        value={inputState.status}
                        onChange={handleChange}
                    >
                        <option>work-in-progress</option>
                        <option>done</option>
                        <option>stuck</option>
                    </select>

                    {/* Submit */}
                    <input id="submit" type="submit" value={`${editMode ? 'Update' : 'Create'}`} />
                </section>

                {/* Owner and Avatar section */}
                {!editMode && <section>
                    <label htmlFor='owner'>Owner</label>
                    <input 
                        id='owner'
                        name='owner'
                        type='text'
                        onChange={(event) => {handleChange(event)}}
                        value={inputState.owner}
                        required={true}
                    />

                    <label htmlFor='avatar'>Avatar</label>
                    <input 
                        id='avatar'
                        name='avatar'
                        type='url'
                        onChange={(event) => {handleChange(event)}}
                        value={inputState.avatar}
                    />

                    {inputState.avatar && <div className='avatar-preview'>
                        <img src={inputState.avatar} alt='avatar' />
                    </div>}
                </section> }
            </form>
        </div>
    )
}