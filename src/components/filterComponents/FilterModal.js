import React from "react";
import "../../scss/style.scss";
import { Modal } from "react-bootstrap";
import { Range } from "rc-slider";
import 'rc-slider/assets/index.css';

function FilterModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Filter</Modal.Header>
      <Modal.Body>
        <div className="filterModalContainer">
          <div className="filterBody">
            <Range defaultValue={[100, 1000]} min={100} max={1000}/>
          </div>

          <div className="filterCancelApply">
            <div className="filterCancel" onClick={handleClose}>
              Cancel
            </div>
            <div className="filterApply">Apply</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FilterModal;
