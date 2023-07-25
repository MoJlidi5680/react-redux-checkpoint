import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from './Slices/TaskSlice'

export const store = configureStore({
  reducer: {
    taskslice:TaskSlice
  },
})