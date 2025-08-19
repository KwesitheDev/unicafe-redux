import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'
export const getAnecdotes = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const createAnecdote = async (newAnecdote) => {
    const res = await axios.post(baseUrl, newAnecdote)
    return res.data
}

export const updateNote = async (updatedNote) =>{
    const res = await axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote)
    return res.data
}
