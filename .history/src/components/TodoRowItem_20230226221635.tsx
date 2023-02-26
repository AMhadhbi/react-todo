import { isPropertyAccessOrQualifiedName } from "typescript";

export const TodoRowItem: FC<{
rowNumber: number,
rowDescription: string,
rowAssigned : string
}> = (props) => {
    return (
        <tr>
            <th scope="row">{isPropertyAccessOrQualifiedName[Symbol].}</th>
            <td scope="row">play football</td>
            <td scope="row">Achraf</td>
        </tr>
      

    );
}

