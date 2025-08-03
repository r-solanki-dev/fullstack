import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const handleSetPersons = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name: newName}))
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
          name: <input value={newName} onChange={handleSetNewName}/>
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