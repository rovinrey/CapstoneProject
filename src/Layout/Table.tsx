function Table(props: any) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {props.headers.map((header: string, index: number) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row: any[], rowIndex: number) => (
                        <tr key={rowIndex}>
                            {row.map((cell: any, cellIndex: number) => (    
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>   
                    ))}
                </tbody>
            </table>          
        </>
    );
}
export default Table;