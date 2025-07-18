import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const  sortedAnecdotes = anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
  const handleVote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }

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
        </div>
    )

    
}

export default AnecdoteList