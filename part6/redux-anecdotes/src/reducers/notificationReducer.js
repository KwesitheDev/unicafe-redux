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
        }
    }
})

export const { setCreateNotification, setVoteNotification } = notificationSlice.actions
export default notificationSlice.reducer