import React from "react";
import "../../scss/style.scss";
import { Modal } from "react-bootstrap";
import Sorting from './Sorting'


function SortingModal({ show, handleClose }) {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Sorting
      </Modal.Header>
      <Modal.Body>
          <Sorting handleClose={handleClose}/>
      </Modal.Body>
    </Modal>
  );
}

export default SortingModal;
