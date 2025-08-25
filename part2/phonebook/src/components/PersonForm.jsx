import { useState } from 'react'

const PersonForm = (props) => {

  const handleCreatePerson = props.onSubmit

  const [newName, setNewName] = useState('')

  const handleSetNewName = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')

  const handleSetNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  function handleSubmit(event) {
    handleCreatePerson(event)
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-2'>
          name: <input id='nameField' value={newName} onChange={handleSetNewName}/>
      </div>
      <div className='mb-2'>
          number: <input id='phoneField' value={newNumber} onChange={(handleSetNewNumber)}/>
      </div>
      <div>
          <button className='btn btn-outline-primary' type='submit'>Add</button>
      </div>
    </form>
  )
}

export default PersonForm