import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CancelModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cancel
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h5>Cancel Profile</h5>
          <p>You’re going to Cancel your profile. Are you sure ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yes, Cancel!
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No, Keep it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CancelModal;
