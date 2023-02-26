import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          <>
        <tr>
          <th scope="row">2</th>
          <td scope="row">Learn React</td>
          <td scope="row">Nizar</td>
        </tr>

        </tbody>
      </table>
    </div>
    </div>
  </div>
  );
}

export default App;
