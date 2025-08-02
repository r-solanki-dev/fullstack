import React from 'react'

const Course = (props) => {
  const [name, parts] = [props.course.name, props.course.parts]

  const exercisesList = parts.map((part) => {return part.exercises})  

  const totalExercises = exercisesList.reduce((prev, curr) => {
    prev += curr
    return(prev)
  })
  
  
  return (
    <>
      <h2>{name}</h2>
      {parts.map(part => 
        <p key={part.id}>
          {(part.name + " " + String(part.exercises))}
        </p>
      )}
      <p><strong>total of {totalExercises} exercises</strong></p>
    </>
  )
}

export default Course