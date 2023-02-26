
export const TodosTabl: React.FC<
{
    todos=[{
        rowNumber: number
        
    }]
}

> = () => {
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
          rowNumber={todos[0].rowNumber}
          rowDescription={todos[0].rowDescription}
          rowAssigned={todos[0].Rowassigned}
          />
          <TodoRowItem 
          rowNumber={todos[1].rowNumber}
          rowDescription={todos[1].rowDescription}
          rowAssigned={todos[1].Rowassigned}
          />
        </tbody>
      </table>
    );
};