import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getTasks = createAsyncThunk("todo/fetch", 
  async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos")
    return response.data
  }
)
export const GetTasksReducer = {
  [getTasks.pending]: ( state ) => {
    state.isLoading = true
  },
  [getTasks.fulfilled]: ( state, { payload } ) => {
    state.tasks = payload
  },
  [getTasks.rejected]: ( _ ) => {
    alert("error")
  }
}