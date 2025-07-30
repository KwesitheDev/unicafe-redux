import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterList from './components/AnecdoteFilter'

const App = () => {
  return (
    <div>
      <FilterList />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App