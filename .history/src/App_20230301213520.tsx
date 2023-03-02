import React from 'react';

import './App.css';

import { TodosTable } from './components/TodosTable';


function App() {
  const todos = [
    {rowNumber: 1, rowDescription : "play football", rowAssigned: 'Achraf'},
    {rowNumber: 2, rowDescription : "Learn React", rowAssigned: 'Nizar'},
  ];

  return (
  <div className="container mt-5">
    <div className="card">
    <div className="card-header">YourTodos</div>
    <div className="card-body">
     <TodosTable todos={todos}/>
     <button class>Add Todo</button>
    </div>
    </div>
  </div>
  );
}

export default App;
