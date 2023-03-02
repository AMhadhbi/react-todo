import { FC } from "react";

 export const TodoRowItem: FC<{
rowNumber: number,
rowDescription: string,
rowAssigned : string,
deleteTodo : Function;
}> = (props) => {
    return (
        <tr onClick={}>
            <th scope="row">{props.rowNumber}</th>
            <td scope="row">{props.rowDescription}</td>
            <td scope="row">{props.rowAssigned}</td>
        </tr>
    );
};

