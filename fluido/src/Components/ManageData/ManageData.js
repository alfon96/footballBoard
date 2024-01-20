import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import SearchBar from "./SearchBar";
import positions from "../../data/positions.json";
import { createPlayer } from "../../firebase";

function ManageData({
  players,
  setPlayers,
  kit,
  correctiveAction,
  playerTotalHeight,
  setShowToast,
  formState,
  setFormState,
  modalShow,
  setModalShow,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormStateIncomplete =
      formState.name === "" ||
      formState.number === "" ||
      formState.position === "";

    if (isFormStateIncomplete) {
      setShowToast({
        show: true,
        type: "fail",
        message: "Please provide player's name, number and position",
      });
      return;
    }

    const duplicatePlayer = players.find(
      (player) => player.number === formState.number
    );

    if (duplicatePlayer) {
      setShowToast({
        show: true,
        type: "fail",
        message: `The number ${duplicatePlayer.number} is already assigned to ${duplicatePlayer.name}. Please choose a different number.`,
      });
      return;
    }

    const newPlayer = {
      name: formState.name.toUpperCase(),
      number: formState.number,
      position: formState.position,
      available: 1,
      injured: 0,
    };

    setShowToast({ show: true, type: "success" });
    setPlayers((prev) => [...prev, newPlayer]);

    createPlayer(newPlayer);
  };

  return (
    <div
      style={{ backgroundColor: "#464853" }}
      className="rounded-5 m-5 p-5 w-50 d-flex flex-column justify-content-center align-items-center "
    >
      <h1 className="text-center display-2 " style={{ color: "#ddd" }}>
        Manage Players
      </h1>

      <h5 className="text-center display-6 mt-5" style={{ color: "#ddd" }}>
        Search Players
      </h5>
      <SearchBar
        players={players}
        kit={kit}
        correctiveAction={correctiveAction}
        playerTotalHeight={playerTotalHeight}
        modalShow={modalShow}
        setModalShow={setModalShow}
        setShowToast={setShowToast}
      ></SearchBar>

      <h5 className="text-center display-6 mt-5" style={{ color: "#ddd" }}>
        Add Players
      </h5>
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center w-100 "
      >
        <Row className="mb-3 d-flex flex-column justify-content-center align-items-center  w-100 ">
          <Form.Group
            as={Col}
            style={{ color: "#ddd" }}
            className="w-100 text-center mt-3"
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
              className="text-center "
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            style={{ color: "#ddd" }}
            className="w-100 text-center mt-3"
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
                className="text-center "
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
            className="w-100 text-center mt-3"
          >
            <Form.Label>Player's position</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={formState.position}
              className="text-center fs-6"
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, position: e.target.value }))
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
        <Button type="submit" variant="primary" className="mt-3">
          Add New Player
        </Button>
      </Form>
    </div>
  );
}

export default ManageData;
