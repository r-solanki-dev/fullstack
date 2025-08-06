import { useState } from 'react'

const PersonForm = (props) => {

  const handleSetPersons = props.onSubmit

  const [newName, setNewName] = useState('')

  const handleSetNewName = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')

  const handleSetNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  function handleSubmit(event) {
    handleSetPersons(event)
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default PersonForm