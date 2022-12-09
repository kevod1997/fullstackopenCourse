import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }
  const mostVoted = votes.indexOf(Math.max(...votes))

  // const anecdotesWithVotes = anecdotes.map((anecdote, index) => {
  //   return {
  //     anecdote: anecdote,
  //     votes: votes[index]
  //   }
  // })


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
 
      {/* <table>
        <thead>
          <tr>
            <th>Anecdote</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {anecdotesWithVotes.map((item, index) => (
            <tr key={index}>
              <td>{item.anecdote}</td>
              <td>{item.votes}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


