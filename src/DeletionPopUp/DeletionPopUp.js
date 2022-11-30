import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DeletionPopUp.css";
import DeletionProcess from "./DeletionProcess";

function DeletionPopUp(props) {
  const [show, setShow] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let idData = 0;

  // if

  const deleteHandler = () => {
    setDeleteFlag(true);
    idData = 40;
    console.log("ini di deletion pop up");
    console.log(props.id);
    props.onDelete1(props.id);
  };

  const deletionStatusHandler = () => {
    // console.log("delete");
    setDeleteFlag(false);
  };

  return (
    <>
      <div onClick={handleShow} className="card-container">
        <h1 className="card-text">
          {props.username} ({props.age} years old)
        </h1>
      </div>
      {deleteFlag ? (
        <DeletionProcess id={idData} deletionStatus={deletionStatusHandler} />
      ) : null}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deletion Pop Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Are you sure to delete this data?</div>
          <div>Username: {props.username}</div>
          <div>Age: {props.age}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletionPopUp;
