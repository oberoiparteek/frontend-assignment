import React from "react";
import "./TableRow.css";
function TableRow({ row = {}, columnKeys = [], noData = false }) {
  if (noData)
    return (
      <div className="table-row">
        <div className="cell no-data">No Data Available</div>
      </div>
    );

  return (
    <div className="table-row">
      {columnKeys?.map((key) => (
        <div className="cell" key={key}>
          {row[key]}
        </div>
      ))}
    </div>
  );
}

export default TableRow;
