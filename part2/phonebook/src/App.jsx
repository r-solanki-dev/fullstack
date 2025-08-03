import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const handleSetPersons = (event) => {
    event.preventDefault()

    const names = persons.map((person) => {return person.name})

    if (names.includes(newName) === true) {
      alert(`${newName} is already in the phonebook.`)
    }
    else {
      setPersons(persons.concat({name: newName}))
    }
    event.target.value = ''
    setNewName('')
  }
  
  const [newName, setNewName] = useState('')

  const handleSetNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSetPersons}>
        <div>
          name: <input id='nameField' value={newName} onChange={handleSetNewName}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) =>
        <p key={person.name}>{person.name}</p>
      )}
    </div>
  )
}

export default App