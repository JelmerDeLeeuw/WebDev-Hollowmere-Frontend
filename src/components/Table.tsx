import "../styles/Table.less";
import Button from "./Button";

function Table({ columns, data, showButton = false, buttonLabel = ""}) {

  const gridColumns = `repeat(${columns.length}, minmax(0, 1fr))`;

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr className="table-header-row" style={{ gridTemplateColumns: gridColumns }}>
            {columns.map((column) => (<th className="table-header-data" key={column.key}>{column.label}</th>))}
          </tr>
        </thead>

        <tbody className="table-body">
          {data.map((row, index) => (
            <tr className="table-row" key={row.id ?? index} style={{ gridTemplateColumns: gridColumns }}>
              {columns.map((column, columnIndex) => (
                <td className="table-data" key={column.key}>
                  { showButton && columnIndex === columns.length - 1 ? 
                    (<Button className="row-button" title={buttonLabel}/>) : (row[column.key])
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;