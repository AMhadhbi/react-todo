import React, { useState } from 'react';

import { NewTodoForm } from './components/NewTodoForm';
import { TodosTable } from './components/TodosTable';

import './App.css';

function App() {
  // // const todos = [
  //   {rowNumber: 1, rowDescription : "play football", rowAssigned: 'Achraf'},
  //   {rowNumber: 2, rowDescription : "Learn React", rowAssigned: 'Nizar'},
  // ];

const [todos, setTodos] = useState([
  {rowNumber: 1, rowDescription : "play football", rowAssigned: 'Achraf'},
  {rowNumber: 2, rowDescription : "Learn React", rowAssigned: 'Nizar'},
]);
const addTodo = (description:string, assigned:string) => {
  let rowNumber=0;

  if (todos.length > 0) {
    rowNumber = todos[todos.length -1 ].rowNumber +1
  }
  else{
    rowNumber = 1
  }

  const newTodo = {
      rowNumber,
      rowDescription:description,
      rowAssigned:assigned
  };

  setTodos([...todos, newTodo]);
}

  const deleteTodo = (rowNumber : number) => {
      let filteredTodos = todos.filter((todo) => todo.rowNumber !== rowNumber);
      if (filteredTodos) {
        setTodos(filteredTodos);
      }
  }
  
  const [showAddNewTodoForm, setShowAddNewTodoForm] = useState(false);
  return (
  <div className="container mt-5">
    <div className="card">
    <div className="card-header">YourTodos</div>
    <div className="card-body">
     <TodosTable todos={todos} deleteTodo={deleteTodo}/>
     <button className="btn btn-primary" onClick={() => setShowAddNewTodoForm(!showAddNewTodoForm)}>{
       showAddNewTodoForm ? "Close New Todo" : "New Todo"
     }
     </button>
     {
       showAddNewTodoForm && <NewTodoForm addTodo = {addTodo}/>
     }
    </div>
    </div>
  </div>
  );
}

export default App;
