import React from "react";
import { Todo } from "../models/Todo";


export const TodosTable: React.FC<{
    todos : Todo[]
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
              T
          }
        </tbody>
      </table>
    );
};