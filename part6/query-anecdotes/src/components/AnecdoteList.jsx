import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from '../services/requests'
import { useSetNotification } from '../contexts/NotificationContext'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const setNotification = useSetNotification()

  const { data: anecdotes, isLoading } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
  })

  const voteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      queryClient.setQueryData(['anecdotes'], (old) =>
        old.map((a) => (a.id === updatedAnecdote.id ? updatedAnecdote : a))
      )
      setNotification(`you voted '${updatedAnecdote.content}'`)
    },
  })

  if (isLoading) return <div>loading anecdotes...</div>

  const handleVote = (anecdote) => {
    voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
  }

  const sortedAnecdotes = [...anecdotes].sort(
    (a, b) => b.votes - a.votes
  )

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
