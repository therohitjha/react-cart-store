import React, { useState } from "react";
import SortingModal from "./SortingModal";
import FilterModal from './FilterModal'

export default function Filter() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  return (
    <div className="row filter-container">
      <div className="col sortingCol" onClick={handleShow}>
        <i class="fas fa-sort"></i>
        <span>Sorting</span>
      </div>
      <div className="col filterCol" onClick={handleFilterShow}>
        <i class="fas fa-filter"></i>
        <span>Filter</span>
      </div>
      <SortingModal
        show={show}
        handleClose={handleClose}
      />
      <FilterModal
        show={showFilter}
        handleClose={handleFilterClose}
      />
    </div>
  );
}
