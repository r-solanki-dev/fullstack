import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const names = persons.map((person) => {return person.name})

  const handleSetPersons = (event) => {
    event.preventDefault()
    console.log(event.target.value)

    if (names.includes(newName) === true) {
      alert(`${newName} is already in the phonebook.`)
    }
    else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }

    setNewName('')
    setNewNumber('')
  }
  
  const [newName, setNewName] = useState('')

  const handleSetNewName = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')

  const handleSetNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const [nameFilter, setNameFilter] = useState('')

  const handleSetNameFilter = (event) => {
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
      <div>
        filter shown with <input id='filterField' value={nameFilter} onChange={handleSetNameFilter}></input>
      </div>
      <h2>Add New</h2>
      <form onSubmit={handleSetPersons}>
        <div>
          name: <input id='nameField' value={newName} onChange={handleSetNewName}/>
        </div>
        <div>
          number: <input id='phoneField' value={newNumber} onChange={(handleSetNewNumber)}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App