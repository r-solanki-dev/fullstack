import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const names = persons.map((person) => {return person.name})

  const ids = persons.map((person) => {return person.id})
  const nextId = Math.max(...ids) + 1

  const handleSetPersons = (event) => {
    event.preventDefault()

    const newName = event.target[0].value
    const newNumber = event.target[1].value

    if (names.includes(newName) === true) {
      alert(`${newName} is already in the phonebook.`)
    }
    else {
      setPersons(persons.concat({name: newName, number: newNumber, id: nextId}))
    }
  }

  const [nameFilter, setNameFilter] = useState('')

  function handleSetNameFilter(event) {
    setNameFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person => {
    const str1 = person.name.toLowerCase()
    const str2 = nameFilter.toLowerCase()

    return str1.includes(str2)
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSetNameFilter}/>
      <h2>Add New</h2>
      <PersonForm onSubmit={handleSetPersons}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App