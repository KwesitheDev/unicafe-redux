import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterList from './components/AnecdoteFilter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes)
  }, [])

  return (
    <div>
      <Notification />
      <FilterList />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App