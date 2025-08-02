import React from 'react'

const Course = (props) => {
  const [name, parts] = [props.course.name, props.course.parts]
  
  function getPartsData (part) {
    return [part.name, part.exercises]
  }
  
  return (
    <>
      <h1>{name}</h1>
      {parts.map(part => 
        <p key={part.id}>
          {(part.name + " " + String(part.exercises))}
        </p>
      )}
    </>
  )
}

export default Course