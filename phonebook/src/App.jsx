import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [prevID, setPrevID] = useState(4)
  const [searchQuery, setSearchQuery] = useState('')

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
