const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const app = express()
app.use(express.static('dist'))
app.use(cors())
morgan.token("body", (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())

let persons = [
	{
	"id": 1,
	"name": "Arto Hellas",
	"number": "040-12345"

	}
]

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  person = persons.find(per => per.id==id)
  if (person) {
	  res.json(person)
  }
  else {
	  res.status(404).end()
}})


app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  info = info.filter(person => person.id != id)
  response.status(204).end()
})

app.post('/api/persons', (req, res) => {	
	const person = req.body
	if ( !person || !person.name || !person.number ){
		return res.status(400).json({
			error: 'content missing'
		})
	}
	const newId = Math.floor(Math.random()*10000)
	if (persons.map(per=>per.name).includes(person.name)){
		return res.status(400).json({
			error: 'name aleready in phonebook'
		})
	}

	const new_person = {
		name: person.name, 
		number: person.number, 
		id: newId}

	persons = persons.concat(new_person)

	res.json(person)

})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  let date_ob = new Date();
  let info = `<div>Phonebook has info for ${persons.length} people</div>${date_ob}`
  res.send(info)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
