import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoRowItem } from './components/TodoRowItem';
import { TodosTable } from './components/TodosTable';


function App() {
  const todos = [
    {rowNumber: 1, rowDescription : "play football", Rowassigned: 'Achraf'},
    {rowNumber: 2, rowDescription : "Learn React", Rowassigned: 'Nizar'},
  ];

  return (
  <div className="container mt-5">
    <div className="card">
    <div className="card-header">YourTodos</div>
    <div className="card-body">
     <TodosTable
    </div>
    </div>
  </div>
  );
}

export default App;
