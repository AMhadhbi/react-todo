import { FC} from "react";

 const TodoRowItem: FC<{
rowNumber: number,
rowDescription: string,
rowAssigned : string
}> = (props) => {
    return (
        <tr>
            <th scope="row">{pros.rowNumber}</th>
            <td scope="row">{prpos.rowDescription}</td>
            <td scope="row">{prpos.rowAssigned}</td>
        </tr>
      

    );
}

