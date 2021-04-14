const { request } = require('express')
const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')

app.use(express.static('build'))

morgan.token('body', request => JSON.stringify(request.body))

app.use(express.json())
app.use(cors())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },

]


const generateId = () => {
    const id = Math.floor(Math.random(1000000000))
    return id
}

app.get('/', (req,res) => {
    res.send('<h1>Server is alive</h1>')
})
app.get('/api/persons', (req,res) => {
    res.json(persons)
    
})

app.get('/info', (request,response) => {
    const idCount = persons.length
    const time = new Date();
    
    response.send(`<ul>Phonebook has info for ${idCount} people</ul>
    <ul> ${time}</ul>`)
    
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
    const body = request.body
    if(!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    if(persons.filter(person => person.name === body.name).length > 0) {
        return response.status(400).json({
            error: "name already exists"
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})