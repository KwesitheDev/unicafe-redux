import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setVoteNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state =>
    state.anecdotes.filter(a =>
      a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  )
  const sortedAnecdotes = anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
  const handleVote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
    dispatch(setVoteNotification(anecdotes.find(a => a.id === id).content))
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