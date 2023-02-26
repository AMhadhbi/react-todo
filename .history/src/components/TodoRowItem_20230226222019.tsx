import { FC} from "react";

 export const TodoRowItem: FC<{
rowNumber: number,
rowDescription: string,
rowAssigned : string
}> = (props) => {
    return (
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td scope="row">{props.rowDescription}</td>
            <td scope="row">{props.rowAssigned}</td>
        </tr>

    );
}

