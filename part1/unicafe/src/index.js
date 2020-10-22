import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = (props) => (
  <>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  </>
)

const Statistics = (props) => {
  if (props.stats.total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={props.stats.good} />
            <Statistic text="neutral" value={props.stats.neutral} />
            <Statistic text="bad" value={props.stats.bad} />
            <Statistic text="all" value={props.stats.total} />
            <Statistic text="average" value={props.stats.average} />
            <Statistic text="positive" value={props.stats.percentage + "%"} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {

  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  //Button functionality
  const increaseGood = (handleClick) => setClicks({ ...clicks, good: clicks.good + 1 })
  const increaseNeutral = (handleClick) => setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  const increaseBad = (handleClick) => setClicks({ ...clicks, bad: clicks.bad + 1 })

  //Maths
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good - clicks.bad) / total
  const percentage = (100 * clicks.good) / total

  //Stats object
  const stats = {
    good: clicks.good,
    neutral: clicks.neutral,
    bad: clicks.bad,
    total: total,
    average: average,
    percentage: percentage
  }

  return (
    <div>
      <div>
        <h1>Leave feedback </h1>
        <Button handleClick={increaseGood} text='good' />
        <Button handleClick={increaseNeutral} text='neutral' />
        <Button handleClick={increaseBad} text='bad' />
      </div>
      <Statistics stats={stats} />
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)