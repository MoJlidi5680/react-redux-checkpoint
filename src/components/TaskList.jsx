import React, { useState } from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.taskslice.tasks);
  const [Index,setIndex]=useState(0)

  return (
    <div>


    <button onClick={()=>setIndex(0)}>ALL</button>
    <button onClick={()=>setIndex(1)}>Done</button>
    <button onClick={()=>setIndex(2)}>Undone</button>
     
      {Index===0?tasks.map(el => <Task key={el.id} el={el}/>):Index===1?tasks.filter(el=>el.isDone===true).map(el => <Task key={el.id} el={el} />):tasks.filter(el=>el.isDone===false).map(el => <Task key={el.id} el={el} />)}
    </div>
  );
};

export default TaskList;
