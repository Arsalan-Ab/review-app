interface TableProps {
    columns: string[],
    rows: any[][]
}

function BasicTable({ columns, rows }: TableProps) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    {
                        columns.map((header,indx) => (
                            <th className="h6" key={indx} scope="col">{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, indx) => (
                        <tr key={indx}>
                            {row.map((cell, cellIndx) => (
                                <td key={cellIndx}>{cell}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default BasicTable;