import { useState } from 'react'

const Button = (props) => {
  let [label, value, handleClick] = [props.label, props.value, props.handleClick]

  return (
    <button className="btn btn-outline-secondary mx-2" onClick={() => handleClick(value+1)}>{label}</button>
  )
}

const StatisticsLine = (props) => {
  let [label, value] = [props.label, props.value]
  
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const [good, neutral, bad] = [props.good, props.neutral, props.bad]

  const all = good + bad + neutral
  const avg = (good * 1) + (bad * -1) / all
  const pos = (good) / all * 100 + "%"

  function getStatistics () {
    return (
      <table className="table">
          <StatisticsLine label="Good" value={good}/>
          <StatisticsLine label="Neutral" value={neutral}/>
          <StatisticsLine label="Bad" value={bad}/>
          <StatisticsLine label="All" value={all}/>
          <StatisticsLine label="Average" value={avg}/>
          <StatisticsLine label="Positive" value={pos}/>
      </table>
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
    <div className="container mx-1 my-2">
      <h1>
        Give Feedback
      </h1>
      <div className="mb-2">
        <Button label="Good" value={good} handleClick={setGood}></Button>
        <Button label="Neutral" value={neutral} handleClick={setNeutral}></Button>
        <Button label="Bad" value={bad} handleClick={setBad}></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App