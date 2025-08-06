const Persons = (props) => {
  
  const filteredPersons = props.filteredPersons

  return(
    filteredPersons.map((person) =>
      <p key={person.id}>{person.name} {person.number}</p>
    )
  )
}

export default Persons