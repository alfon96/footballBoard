import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import positions from "../../data/positions.json";
import { updatePlayer } from "../../firebase";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import Row from "react-bootstrap/Row";

function ModalForm({ modalInfo, onHide, players, setPlayers }) {
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState({
    name: modalInfo.playerInfo.name ?? null,
    number: modalInfo.playerInfo.number ?? null,
    position: modalInfo.playerInfo.position ?? null,
    isCaptain: modalInfo.playerInfo.isCaptain ?? null,
  });

  const handleEdit = () => {
    const isFormStateIncomplete =
      formState.name === "" ||
      formState.number === "" ||
      formState.position === "";

    if (isFormStateIncomplete) {
      setMessage("Please provide player surname, number and position");
      return;
    }

    const duplicatePlayer = players.find(
      (player) =>
        player.number === formState.number &&
        player.id !== modalInfo.playerInfo.id
    );

    if (duplicatePlayer) {
      setMessage(
        `The player <${duplicatePlayer.name}> already has this shirt number!`
      );
      return;
    }

    setMessage("");
    const playerInfoEdited = {
      name: formState.name,
      number: formState.number,
      position: formState.position,
    };

    updatePlayer(modalInfo.playerInfo.id, playerInfoEdited);
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id === modalInfo.playerInfo.id) {
          return {
            ...player,
            name: playerInfoEdited.name,
            number: playerInfoEdited.number,
            position: playerInfoEdited.position,
          };
        }
        return player;
      })
    );
    onHide();
  };

  return (
    <Modal show={modalInfo.show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="display-6 ">
          {modalInfo.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-3 form-container ">
          <Row className="mb-3 d-flex flex-column justify-content-center align-items-center  w-100 ">
            <Form.Group
              as={Col}
              style={{ color: "#ddd" }}
              className="w-100 text-center mt-3 fs-3 text-warning "
            >
              <Form.Label>Surname</Form.Label>
              <Form.Control
                value={formState.name}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                required
                type="text"
                placeholder="KVARA"
                className="text-center fs-5 "
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              style={{ color: "#ddd" }}
              className="w-100 text-center mt-3 fs-3 text-warning"
            >
              <Form.Label>Number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  value={formState.number}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      number: e.target.value,
                    }))
                  }
                  type="number"
                  placeholder="77"
                  className="text-center fs-5 "
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please insert the shirt number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              style={{ color: "#ddd" }}
              className="w-100 text-center mt-3 fs-3 text-warning"
            >
              <Form.Label>Player Position</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={formState.position}
                className="text-center fs-5"
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    position: e.target.value,
                  }))
                }
              >
                {Object.entries(positions).map(([key, value], index) => {
                  return (
                    <option key={index} value={key.trim()}>
                      {key} : {value}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Row>

          {message !== "" && (
            <p className="text-danger fs-6 mt-4 text-center">{message}</p>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          variant="primary"
          className="fs-5"
          onClick={handleEdit}
        >
          Edit Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
