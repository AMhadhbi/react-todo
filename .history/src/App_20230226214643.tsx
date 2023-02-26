import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <div>YourTodo</div>
    <div>
      <table>
        <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col" >Description</th>
        <th scope="col">Assigned</th>
      </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td scope="row">play football</td>
          <td scope="row">Achraf</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td scope="row">play foybal</td>
          <td scope="row">Achraf</td>
        </tr>

        </tbody>
      </table>
    </div>
  </div>
  );
}

export default App;
