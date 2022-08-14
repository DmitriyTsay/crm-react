import { useState } from 'react';

export default function TicketPage() {

    const [ inputState, setInputState ] = useState({
        title: '',
        description: '',
        category: 'none',
        newCategory: '',
        priority: '1',
        time: new Date(),
        progress: 0,
        owner: '',
        avatar: '',
        status: 'work-in-progress',
    })
    
    // Assumption that editMode is disabled
    const editMode = true;

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`Submitted`);
    }

    function handleChange(event) {
        const { value, name } = event.target;

        console.log(event.target.value);

        setInputState((prevInputState) => {
            return {
                ...prevInputState,
                [name]: value,
            }
        })
    }

    console.log(inputState);
    
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
                    <select 
                        id='category'
                        name='category'
                        value={inputState.category}
                        onChange={handleChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>none</option>
                    </select>

                    {/* New Category */}
                    <label htmlFor="newCategory">New Category</label>
                    <input 
                        type='text'
                        id='newCategory'
                        name='newCategory'
                        onChange={(event) => {handleChange(event)}}
                        value={inputState.newCategory}
                    />

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
                </section> }
            </form>
        </div>
    )
}