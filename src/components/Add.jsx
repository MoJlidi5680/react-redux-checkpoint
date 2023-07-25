import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../Slices/TaskSlice'


const Add = () => {
  const [newtask,setnewtask]=useState(
    {
      id:0,
      description:"",
      isDone:false
    }
  )
const dispatch=useDispatch()

  return (
    <div>
        <input type="text" onChange={(e)=>setnewtask({...newtask,description:e.target.value,id:Math.random()*100})}/>
        <button onClick={()=>dispatch(addtask(newtask))}>Add</button>
      
    </div>
  )
}

export default Add
