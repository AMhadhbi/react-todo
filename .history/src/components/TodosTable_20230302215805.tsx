import React from "react";
import { Todo } from "../models/Todo";
import { TodoRowItem } from "./TodoRowItem";


export const TodosTable: React.FC<{
    todos : Todo[],
    deleteTodo: 
}> = (props) => {
    return (
<table className="table table-primary table-hover">
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" >Description</th>
        <th scope="col">Assigned</th>
      </tr>
        </thead>
        <tbody>
          {
              props.todos.map( (item) =>
              <TodoRowItem 
              rowNumber={item.rowNumber}
              rowDescription={item.rowDescription}
              rowAssigned={item.rowAssigned}
              />)
          }
        </tbody>
      </table>
    );
};