import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader/TableHeader";
import "./DataTable.css";
import TableRow from "./TableRow/TableRow";
import TablePagination from "./TablePagination/TablePagination";

function DataTable({ items, isLoading, error }) {
  if (isLoading) return (<div className="loading"> Loading...</div>)
  if (error) return (<div className="error">Error occurred : {error?.message}</div>)
         
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * 5;
  const currentItems = items.slice(offset, offset + 5) || [];
  const total = Math.ceil(items.length / 5) || 1;
  
  return (
    <div className="data-table-wrapper">
      <div className="data-table">
        <TableHeader
          titlesList={["S.No.", "Percentage funded", "Amount pledged"]}
        />
        {currentItems?.length > 0 ? (
          currentItems?.map((item) => (
            <TableRow
              row={item}
              key={item["s.no"]}
              columnKeys={["s.no", "percentage.funded", "amt.pledged"]}
            />
          ))
        ) : (
          <TableRow
            noData={true}
          />
        )}
      </div>
      <TablePagination
        currentPage={currentPage}
        setCurrentPage = {setCurrentPage}
        total={total}
      />
    </div>
  );
}

export default DataTable;
