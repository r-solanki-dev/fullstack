import personService from "../services/persons"
import { Fragment } from "react"
import '../App.css'

const Persons = (props) => {
  
  const filteredPersons = props.filteredPersons
  const refreshData = props.refreshData

  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          refreshData()
        }
      )
    } else {
      console.log("Cancel remove person.")
    }
  }

  return(
    filteredPersons.map((person) =>
      <div key={person.id}>
        <p className="person-item">{person.name} {person.number}</p>
        <button 
          className="person-item"
          onClick={() => {
            handleDelete(person.name, person.id)}
          }   
        >
          Delete
        </button>
      </div>
    )
  )
}

export default Persons