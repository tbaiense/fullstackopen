import { useState } from 'react'

const Anecdote = ({ text, votes }) => (
  <>
    <p>
      {text}
    </p>
    <p> has votes: {votes} </p>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [ selected, setSelected ] = useState(-1)
  const [ votes, setVotes ] = useState(Array(anecdotes.length).fill(0))

  const selectRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected]++

    setVotes(copy)
  }

  const mostVotedIdx = votes.reduce(
    (idxMax, anecdoteVotes, idx) => (anecdoteVotes > votes[idxMax] ? idx : idxMax), 0
  )

  return (
    <>
      <div>
        <h1>Anecdotes of the day</h1>
        { selected !== -1
          ? <Anecdote
              text={anecdotes[selected]}
              votes={votes[selected]}
            />
          : <p>Click on the button</p>
        }

        {
          selected == -1
            ? ""
            : <button onClick={voteAnecdote}>vote</button>
        }
        <button onClick={selectRandomAnecdote}>random anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {
          votes[mostVotedIdx] !== 0
            ? <Anecdote
                text={anecdotes[mostVotedIdx]}
                votes={votes[mostVotedIdx]}
              />
            : <p>Vote on some anecdote first</p>
        }
      </div>
    </>
  )
}

export default App
