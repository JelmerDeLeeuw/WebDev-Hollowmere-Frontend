
import "../styles/Table.less";
import Button from "./Button";

type Props = {
  rows: any[];
  headers: string[];
  showButton?: boolean;
  buttonLabel?: string;
  action?: (item: any) => void;
};

function Table(props: Props) {
  return (
    <table className="table">
      <thead className="table-header">
        <tr className="table-header-row">
          {props.headers.map((header, index) => (
            <th key={index} className="table-header-data" colSpan={1}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="table-body">
        {props.rows.map((row, index) => (
          <tr className="table-row" key={`${row.id}-${index}`}>
            {row.values.map((cell, cellIndex) => (
              <td key={cellIndex} className="table-data" style={{gridColumn: `span ${cell.colspan ?? 1}`}}>
                {cell.label && (
                  <span>{cell.label}</span>
                )}
              </td>
            ))}

            {props.showButton && (
              <td key="action" className="table-data">
                <Button
                  className="row-button"
                  title={props.buttonLabel ?? ""}
                  onSelect={() => props.action?.(row)}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
