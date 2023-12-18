import { useState } from 'react'
const Filter = ({newSearch, searchFilter}) =>{
	return(
  		<div>filter shown with: <input value={newSearch} onChange={searchFilter} /></div>
	) 

}
const PersonForm = ({addPerson, newPerson, handleNameChange, handleNumberChange}) =>{
	return ( 

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={handleNameChange} />
        </div>
  	<div>number: <input value={newPerson.number} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
	)
}
const Persons = ({newSearch, persons}) =>{
	return (
	  <ul> {persons.filter((person)=> person.name.toLowerCase().includes(newSearch.toLowerCase())).map((person, id)=><li key={id}>{person.name} {person.number}</li>)}
	  </ul>
	)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newPerson, setNewPerson] = useState({name: "", number: ""})
  const [newSearch, setNewSearch] = useState("")
  const addPerson = (event) => {
	  event.preventDefault()
	  if (persons.map(({name})=>name).includes(newPerson.name)){
		alert(`${newPerson.name} is already added to the phonebook`)
		return 
	  }
	  const newPersonObject = {
		  name: newPerson.name, 
		  number: newPerson.number
	  }
	  setPersons(persons.concat(newPersonObject))
	  event.target.value = ""
	  setNewPerson({name: "", number: ""})
  }

  const handleNameChange = (event) =>{
	  event.preventDefault()
	  setNewPerson({...newPerson, name: event.target.value})
	  
  }

  const handleNumberChange = (event) =>{
	  event.preventDefault()
	  setNewPerson({...newPerson, number: event.target.value})
	  
  }

  const searchFilter = (event) =>{
	  event.preventDefault()
	  setNewSearch(event.target.value)
	  
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} searchFilter={searchFilter} />

      <h3>Add a new</h3>

      <PersonForm
	addPerson={addPerson} newPerson={newPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}    
      />

	  
      <h2>Numbers</h2>
	  

      <Persons persons={persons} newSearch={newSearch} /> 
    </div>
  )

}

export default App
