import React from 'react';

import './App.css';
import { NewTodoForm } from './components/NewTodoForm';

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
     <button className="btn btn-primary">Add Todo</button>
     <NewTodoForm></NewTodoForm>
    </div>
    </div>
  </div>
  );
}

export default App;
