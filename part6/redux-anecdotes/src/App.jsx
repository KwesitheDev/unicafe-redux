import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterList from './components/AnecdoteFilter'
import Notification from './components/Notification'

const App = () => {
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