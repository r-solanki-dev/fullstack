import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

import personService from './services/persons'

const App = (props) => {

  // data for the starting state of the application
  const [persons, setPersons] = useState([]) 
  const [nameFilter, setNameFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('')

  const ids = persons.map((person) => {return person.id})
  const nextId = Math.max(...ids) + 1

  const filteredPersons = persons.filter(person => {
    const str1 = person.name.toLowerCase()
    const str2 = nameFilter.toLowerCase()
    return str1.includes(str2)
  })

  function getDataHook() {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }

  function getPersonByName(searchName) {
    return persons.find((person) => person.name === searchName)
  }

  function handleCreatePerson(event) {
    event.preventDefault()

    const newName = event.target[0].value
    const newNumber = event.target[1].value

    const newPersonObj = {name: newName, number: newNumber, id: nextId.toString()}

    const searchPersonResult = getPersonByName(newName)

    if (searchPersonResult !== undefined) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        personService
          .update(searchPersonResult.id, newPersonObj)
          .then(() => {
            handlePostServer('success', `Updated ${newName} in the phonebook.`)
          })
      } else {
        console.log('Denied');
      }
    } else {
      personService
        .create(newPersonObj)
        .then(() => {
          handlePostServer('success', `Added ${newName} to the phonebook.`)
        }
      )
    }
  }

  function handleSetNameFilter(event) {
    setNameFilter(event.target.value)
  }

  function handlePostServer(notificationType, notificationMessage) {
    getDataHook()
    setNotificationType(notificationType)
    setNotificationMessage(notificationMessage)
    setTimeout(() => {
      setNotificationMessage('')
      setNotificationType('')
    }, 5000)
  }

  useEffect(getDataHook, [])  

  return (
    <div className='m-2'>
      <h2 className='mt-3'>Phonebook</h2>
      {!notificationMessage ? null :<Notification notifMessage={notificationMessage} notifType={notificationType}/>}
      <Filter onChange={handleSetNameFilter}/>
      <h2 className='mt-3'>Add New</h2>
      <PersonForm onSubmit={handleCreatePerson}/>
      <h2 className='mt-3'>Numbers</h2>
      <Persons filteredPersons={filteredPersons} refreshData={handlePostServer}/>
    </div>
  )
}

export default App