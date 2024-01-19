import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import SearchBar from "./SearchBar";

function ManageData({
  players,
  setPlayers,
  kit,
  correctiveAction,
  playerTotalHeight,
  setShowToast,
}) {
  const [name, setName] = useState("Player");
  const [number, setNumber] = useState(0);
  const [position, setPosition] = useState("A");

  const handleSubmit = (event) => {
    event.preventDefault();

    const isDuplicateNumber = players.some(
      (player) => player.number === number
    );

    if (isDuplicateNumber) {
      alert(
        "Player with the same number already exists. Please choose a different number."
      );
      return;
    }

    const newPlayer = {
      name: name,
      number: number,
      position: position,
      kit: 99,
    };

    setShowToast(true);
    setPlayers((prev) => [...prev, newPlayer]);
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
            md="4"
            style={{ color: "#ddd" }}
            className="w-100 text-center mt-3"
          >
            <Form.Label>Surname</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="KVARA"
              className="text-center "
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            style={{ color: "#ddd" }}
            className="w-100 text-center mt-3"
          >
            <Form.Label>Number</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
            md="4"
            style={{ color: "#ddd" }}
            className="w-100 text-center mt-3"
          >
            <Form.Label>Player's position</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                type="text"
                placeholder="Left Wing"
                required
                className="text-center "
              />
              <Form.Control.Feedback type="invalid">
                Please choose a position.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit" className="mt-3">
          Add New Player
        </Button>
      </Form>
    </div>
  );
}

export default ManageData;
