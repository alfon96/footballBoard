import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function ModalForm({ modalInfo, onHide }) {
  
  const [formState, setFormState] = useState({
    name: modalInfo.playerInfo.name ?? null,
    number: modalInfo.playerInfo.number ?? null,
    position: modalInfo.playerInfo.position ?? null,
    isCaptain: modalInfo.playerInfo.isCaptain ?? null,
  });
  return (
    <Modal
      show={modalInfo.show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalInfo.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-3 form-container ">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="KVARA"
              value={formState.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="00"
              value={formState.number}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Left Wing"
              value={formState.position}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
