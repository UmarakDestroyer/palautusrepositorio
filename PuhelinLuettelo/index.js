require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const Person = require("./models/persons")

const url =
app.use(express.static('dist'))
app.use(cors())
morgan.token("body", (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.json())

const errorHandler = (error, req, res, next)=>{
	console.log(error.message)
	if(error.name === "CastError"){
		return res.status(400).send({error:"malwormation"})
	}
	next(error)	
}
app.use(errorHandler)
let persons = [
]

app.get('/api/persons/:id', (req, res) => {
  if (person) {
	  res.json(person)
  }
  else {
	  res.status(404).end()
}})


app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  Person.findByIdAndDelete(id)
	.then(result => {
		res.status(204).end()
	})
	.catch(error => next(error))
  persons = persons.filter(person => person.id != id)

})

app.put('/api/persons/:id', (req, res) => {
	const id = req.params.id;

	if(!req.body.name || !req.body.number){
		res.json(persons.find(person=>person.id == id))
	}
	const person = {
		name: req.body.name,
		number: req.body.number }

	Person.findByIdAndUpdate(id,person, {new: true})
	.then(updatedPerson =>{
		res.json(updatedPerson)
	})
	.catch(err =>{console.log("ei onnistunut");next(err)})
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

	const new_person = new Person( {
		name: person.name, 
		number: person.number, 
	})

	persons = persons.concat(new_person)
	new_person.save().then(result => {
		res.json(result);

	})
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(result=>{
  res.json(result)})
})

app.get('/info', (req, res) => {
  let date_ob = new Date();
  let info = `<div>Phonebook has info for ${persons.length} people</div>${date_ob}`
  res.send(info)
})

const PORT = process.env.PORT || 3001
console.log("ongelma tulee tämän jälkeen")
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
