import React from 'react';
import './App.css';
import Add from './components/Add';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Add/>
      <TaskList/>
    </div>
  );
}

export default App;
