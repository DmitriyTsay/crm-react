const PORT = 8000

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express()
app.use(cors());
app.use(express.json());

const url = process.env.URL
const token = process.env.ASTRA_TOKEN

// Getting all tickets
app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }

    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err});
    }
})

// Creating new ticket
app.post('/tickets', async (req,res) => {
    const inputState = req.body.inputState

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: inputState
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err});
    }

})

// Fetchind TicketData for editing
app.get('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId

    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }

    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err});
    }
})

// Updating ticket
app.put('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId
    const inputState = req.body.inputState

    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: inputState
    }

    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err});
    }
})

// Deleting ticket
app.delete('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId

    const options = {
        method: 'DELETE',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }

    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(204).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message:err});
    }
})

app.listen(PORT, () => console.log(`server running on ${PORT}`));