import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

import personService from './services/persons'

const App = (props) => {

  // data for the starting state of the application
  const [persons, setPersons] = useState([]) 
  const [nameFilter, setNameFilter] = useState('')

  const ids = persons.map((person) => {return person.id})
  const nextId = Math.max(...ids) + 1
  const names = persons.map((person) => {return person.name})
  const filteredPersons = persons.filter(person => {
    const str1 = person.name.toLowerCase()
    const str2 = nameFilter.toLowerCase()
    return str1.includes(str2)
  })

  function handleSetPersons(event) {
    event.preventDefault()

    const newName = event.target[0].value
    const newNumber = event.target[1].value

    const newPersonObj = {name: newName, number: newNumber, id: nextId}

    if (names.includes(newName) === true) {
      alert(`${newName} is already in the phonebook.`)
    }
    else {
      axios
        .post('http://localhost:3001/persons', newPersonObj)
        .then(response => {
          if (response.status === 201) {
            setPersons(persons.concat(newPersonObj))
            console.log(response)
          }
          else {
            alert(`Failed to add ${newName} to the phonebook.`)
          }
        }
      )
    }
  }

  function handleSetNameFilter(event) {
    setNameFilter(event.target.value)
  }

  function getDataHook() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        console.log('Error getting persons')
      })
  }

  useEffect(getDataHook, [])  

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