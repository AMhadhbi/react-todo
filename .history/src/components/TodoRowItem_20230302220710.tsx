import { FC } from "react";

 export const TodoRowItem: FC<{
rowNumber: number,
rowDescription: string,
rowAssigned : string,
deleteTodo : Function;
}> = (props) => {

    const handleDeleteTodo = () => {
        props.deleteTodo (props.rowNumber);
    }


    return (
        <tr onClick={handleDeleteTodo} style={{}}>
            <th scope="row">{props.rowNumber}</th>
            <td scope="row">{props.rowDescription}</td>
            <td scope="row">{props.rowAssigned}</td>
        </tr>
    );
};

