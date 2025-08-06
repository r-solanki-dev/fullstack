import { useState } from "react"

const Filter = (props) => {

  const setParentNameFilter = props.onChange

  const [nameFilter, setNameFilter] = useState('')

  const handleSetNameFilter = (event) => {
    setNameFilter(event.target.value)
    setParentNameFilter(event)
  }

  return (
    <div>
      filter shown with <input id='filterField' value={nameFilter} onChange={handleSetNameFilter}></input>
    </div>
  )
}

export default Filter