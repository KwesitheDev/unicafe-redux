import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }

  const handleCreate = (event) => {
    event.preventDefault()
    const content = event.target[0].value
    dispatch(createAnecdote(content))
  }

  const sortedAnecdotes = anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm handleCreate={handleCreate}/>
    </div>
  )
}

export default App