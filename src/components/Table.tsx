import "../styles/Table.less";
import Button from "./Button";

function Table({ columns, data, showButton = false, buttonLabel = "", action = null}) {

  const gridColumns = `repeat(${columns.length}, auto)`;
  return (
    // Volgende keer: knop iets later returnen
    <table className="table" style={{ gridTemplateColumns: gridColumns }}>
      <thead className="table-header">
        <tr className="table-header-row">
          {columns.map((column) => (
            <th className="table-header-data" key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody className="table-body">
        {data.map((row, index) => (
          <tr className="table-row" key={row.id ?? index}>
            {columns.map((column, columnIndex) => (
              <td className="table-data" key={column.key}>
                { showButton && columnIndex === columns.length - 1 ? 
                  (<Button className="row-button" title={buttonLabel} onSelect={() => action?.(row)}/>) : (row[column.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;