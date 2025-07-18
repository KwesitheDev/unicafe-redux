import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'



  
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const handleCreate = (event) => {
    event.preventDefault()
    const content = event.target[0].value
    dispatch(createAnecdote(content))
    event.target[0].value = ''
}
  return (
    <div>
          <h2>create new</h2>
          <form onSubmit={handleCreate}>
            <div> <input /></div>
             <button type="submit">create</button>
          </form>
    </div>
  )
}

export default AnecdoteForm