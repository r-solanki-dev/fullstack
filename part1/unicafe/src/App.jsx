import { useState } from 'react'

const Statistics = (props) => {

  const [good, neutral, bad] = [props.good, props.neutral, props.bad]

  const all = good + bad + neutral
  const avg = (good * 1) + (bad * -1) / all
  const pos = (good) / all

  function getStatistics () {
    return (
      <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {all}</p>
          <p>Average: {avg}</p>
          <p>Positive: {pos}%</p>
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
      <button 
        onClick={() => setGood(good+1)}>
          Good
      </button>
      <button 
        onClick={() => setNeutral(neutral+1)}>
          Neutral
      </button>
      <button 
        onClick={() => setBad(bad+1)}>
          Bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App