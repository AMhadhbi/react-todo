import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoRowItem } from './components/TodoRowItem';

function App() {
  return (
  <div className="container mt-5">
    <div className="card">
    <div className="card-header">YourTodos</div>
    <div className="card-body">
      <table className="table table-primary table-hover">
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" >Description</th>
        <th scope="col">Assigned</th>
      </tr>
        </thead>
        <tbody>
          <TodoRowItem/>


        </tbody>
      </table>
    </div>
    </div>
  </div>
  );
}

export default App;
