import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { edittask } from '../Slices/TaskSlice';

const Task = ({ el }) => {
  const [showEdit,setshowEdit]=useState(false)
  const [newdesc,setnewdesc]=useState("")
  const dispatch=useDispatch()
    return (
      <div className='task'>
        <h1 className={el.isDone?"done":null}>{el.description}</h1>
        <button onClick={()=>{setshowEdit(!showEdit);dispatch(edittask({id: el.id,task:{...el,description:newdesc}}))}}>{showEdit?"confirm":"Edit"}</button>
        {showEdit?<input type="text" onChange={(e)=>setnewdesc(e.target.value)}/>:null}
        
      </div>
    );
  };
  
  export default Task;
  