import { createSlice, current } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterChange(state, action) {
            return action.payload

            console.log(current(state))
        }
    }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer