import { createSlice } from '@reduxjs/toolkit'
import { GetTasksReducer } from './counter.thunk'

const initialState = {
  value: 0,
  name: 'abbas',
  tasks: [],
  isloading: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        changeName: (state, n) => {
            state.name = n.payload
        }
    },
    extraReducers: {
        ...GetTasksReducer
    }
})

// Action creators are generated for each case reducer function
export const { increment, changeName } = counterSlice.actions

export default counterSlice.reducer