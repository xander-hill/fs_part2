import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [prevID, setPrevID] = useState(4)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: prevID + 1,
      
    }
    console.log(persons.some(person => person.name === newName))
    persons.some(person => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject)), setPrevID(prevID + 1);
      
      setNewName('')
      setNewNumber('')
      console.log('New name added', newName)
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
      <Persons persons = {filteredPersons} />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
