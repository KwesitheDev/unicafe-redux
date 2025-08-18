import axios from 'axios'

export const getAnecdote = () => {
    return axios.get('http://localhost:3001/anecdotes')
}
