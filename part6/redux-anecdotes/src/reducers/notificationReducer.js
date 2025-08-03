import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setVoteNotification(state, action) {
            const result = action.payload
            return ` You voted for '${result}'`
        },
        setCreateNotification(state, action) {
            const result = action.payload
            return ` You created '${result}'`
        },
        clearNotification(state, action) {
            return ''
        }
    }
})

export const { setCreateNotification, setVoteNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer