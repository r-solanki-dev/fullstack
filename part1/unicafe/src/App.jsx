import { useState } from 'react'

const Button = (props) => {
  let [label, value, handleClick] = [props.label, props.value, props.handleClick]

  return (
    <button onClick={() => handleClick(value+1)}>{label}</button>
  )
}

const StatisticsLine = (props) => {
  let [label, value] = [props.label, props.value]
  
  return (
    <p>{label}: {value}</p>
  )
}

const Statistics = (props) => {

  const [good, neutral, bad] = [props.good, props.neutral, props.bad]

  const all = good + bad + neutral
  const avg = (good * 1) + (bad * -1) / all
  const pos = (good) / all * 100 + "%"

  function getStatistics () {
    return (
      <div>
          <StatisticsLine label="Good" value={good}/>
          <StatisticsLine label="Neutral" value={neutral}/>
          <StatisticsLine label="Bad" value={bad}/>
          <StatisticsLine label="All" value={all}/>
          <StatisticsLine label="Average" value={avg}/>
          <StatisticsLine label="Positive" value={pos}/>
      </div>
    )
  }

  return (
    <>
      <h3>Statistics</h3>
      {
        good + bad + neutral > 0 ? getStatistics() : <p>No feedback given</p>
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>
        Give Feedback
      </h1>
      <Button label="Good" value={good} handleClick={setGood}></Button>
      <Button label="Neutral" value={neutral} handleClick={setNeutral}></Button>
      <Button label="Bad" value={bad} handleClick={setBad}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App