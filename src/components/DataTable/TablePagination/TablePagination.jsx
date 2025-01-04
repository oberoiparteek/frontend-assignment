import React, { useState } from "react";
import "./TablePagination.css";

function TablePagination({
  currentPage = 1,
  total,
  setCurrentPage,
}) {
  const [inputNumber, setInputNumber] = useState(0);

  const nextAction = () => {
    if (currentPage + 1 <= total) setCurrentPage(currentPage + 1);
  };

  const prevAction = () => {
    if (currentPage - 1 > 0) setCurrentPage(currentPage - 1);
  };

  const handleInputChange = (e) => setInputNumber(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber > 0 && inputNumber <= total) setCurrentPage(inputNumber);
  };


  return (
    <div className="table-pagination">
      <div className="actions">
        <button disabled={currentPage === 1} onClick={prevAction}>
          Prev
        </button>
        <span>{`${currentPage} of ${total} pages`}</span>
        <button disabled={currentPage === total} onClick={nextAction}>
          Next
        </button>
      </div>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="Jump to page"
        />{" "}
        &nbsp;
        <button disabled={inputNumber <= 0 || inputNumber > total} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TablePagination;
