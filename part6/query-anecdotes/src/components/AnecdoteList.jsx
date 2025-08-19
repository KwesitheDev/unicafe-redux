import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from '../services/requests'

const AnecdoteList = () => {
  const queryClient = useQueryClient()

  const { data: anecdotes, isLoading } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
  })

  const voteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      // Update cache instead of refetching whole list
      queryClient.setQueryData(['anecdotes'], (old) =>
        old.map((a) => (a.id === updatedAnecdote.id ? updatedAnecdote : a))
      )
    },
  })

  if (isLoading) return <div>loading anecdotes...</div>

  const handleVote = (anecdote) => {
    voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
  }
    
  const sortedAnecdotes = [...anecdotes].sort((anec1,anec2) => (anec2.votes-anec1.votes))

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
