import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ResetModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reset
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h5>Reset Profile</h5>
          <p>You’re going to Reset your profile. Are you sure ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No, Keep It.
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes, Reset!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResetModal;
