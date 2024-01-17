import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pitch from "./Components/Pitch/Pitch";
import Player from "./Components/Player/Player";
import { Drag } from "./Components/draggable/drag";
import { useRef } from "react";
import players from "./data/players.json";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  const constraintsRef = useRef(null);
  return (
    <Container fluid ref={constraintsRef} className="screen m-0 p-0">
      <Container fluid className="m-0 p-5 bg-success pitch ">
        <Pitch></Pitch>
      </Container>

      <Row className=" px-5 d-flex justify-content-center align-items-center ">
        <Col xs={12} className="mt-5 d-flex flex-wrap"></Col>

        {players.map((player) => {
          return (
            <Drag key={player.number} parentRef={constraintsRef}>
              <Player
                key={player.number}
                number={player.number}
                name={player.name}
                position={player.position}
                isCaptain={player?.isCaptain}
              ></Player>
            </Drag>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
