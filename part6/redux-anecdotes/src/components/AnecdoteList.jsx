import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { addVote } from '../reducers/anecdoteReducer'
import { setVoteNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state =>
    state.anecdotes.filter(a =>
      a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  )
  const sortedAnecdotes = [...anecdotes].sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
  const handleVote = (anecdote) => {
    const id = anecdote.id
    console.log('vote', anecdote.id)
    dispatch(addVote(anecdote))
    dispatch(setNotification(setVoteNotification(anecdote.content), 10))
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
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )


}

export default AnecdoteList