import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  //Variables
  const [selected, setSelected] = useState(Math.floor(Math.random() * 6))
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const [maxVotes, setMax] = useState(0)

  //Event Handler
  const pointHandler = (props) => {
    const copy = { ...points }
    //Increment the property 2 value by one
    copy[selected] += 1
    setPoints(copy)

    //Find the anecdote with the highest vote
    const copyMax = Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b);
    setMax(copyMax)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={() => pointHandler(props)}>vote</button>
        <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[maxVotes]}</p>
        <p>has {points[maxVotes]} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)