import React from "react";



export const TodosTable: React.FC<{
    todos :[
    {
        rowNumber: number,
        rowDescription: string,
        rowAssigned: string
    }
    ];
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
          <TodoRowItem 
          rowNumber={props.todos[0].rowNumber}
          rowDescription={props.todos[0].rowDescription}
          rowAssigned={props.todos[0].Rowassigned}
          />
          <TodoRowItem 
          rowNumber={props.todos[1].rowNumber}
          rowDescription={props.todos[1].rowDescription}
          rowAssigned={props.todos[1].Rowassigned}
          />
        </tbody>
      </table>
    );
};