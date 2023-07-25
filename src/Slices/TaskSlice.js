
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
      id: Math.random() * 100,
      description: "Learn HTML",
      isDone: true
    },
    {
      id: Math.random() * 100,
      description: "Learn CSS",
      isDone: false
    },
    {
      id: Math.random() * 100,
      description: "Learn JS",
      isDone: true
    },
  ]
}

export const TaskSlice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    addtask:(state,action)=>{
      state.tasks=[...state.tasks,action.payload]
      
    },
    edittask:(state,action)=>{
      const taskIndex=state.tasks.findIndex(el=>el.id===action.payload.id)
      state.tasks[taskIndex]=action.payload.task
    }
    
      
}})

// Action creators are generated for each case reducer function
export const {  addtask , edittask} = TaskSlice.actions

export default TaskSlice.reducer