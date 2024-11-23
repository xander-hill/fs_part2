import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log('Effect')
    personService
      .getAll()
      .then(initalPersons => {
        setPersons(initalPersons)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    console.log(persons.some(person => person.name === newName))
    const isPersonExists = persons.some(person => person.name === newName)
    if (isPersonExists) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            const personToChange = persons.find(person => person.name === newName);
            const updatedPerson = {...personToChange, number: newNumber };
            
            personService
              .update(personToChange.id, updatedPerson)
              .then(returnedPerson => {
                setPersons(persons.map(person => person.id === personToChange.id ? returnedPerson : person))
              })
          }
         } else {
         personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          console.log('New name added', newName)
        })
    }
  }

  const deletePerson = (id, name) => {
    event.preventDefault()
    console.log(id)
    console.log(name)
    if (window.confirm(`Delete ${name}?`))
    {
      personService
        .deletePerson(id)
        .then(setPersons([...persons].filter(person => person.id !== id)))
    }
  }



  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearchQuery(event.target.value)
  }

  const filteredPersons= 
    [...persons].filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value = {searchQuery} onChange={handleSearchChange}/>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons = {filteredPersons} deleteEvent={deletePerson}/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
