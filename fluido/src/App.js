import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pitch from "./Components/Pitch/Pitch";
import Player from "./Components/Player/Player";
import { Drag } from "./Components/draggable/drag";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "./Components/Toolbar/Toolbar";
import { useDraw } from "./hooks/useDraw";
import fieldPitch from "./assets/pitch/pitch.svg";
import { useState } from "react";
import { useEffect } from "react";
import ManageData from "./Components/ManageData/ManageData";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#1b718d");
  const constraintsRef = useRef(null);
  const [lineColor, setLineColor] = useState("#fbff00");
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasDraw, setCanvasDraw] = useState(null);
  const [brushSize, setBrushSize] = useState(3);
  const [kit, setKit] = useState(0);
  const [players, setPlayers] = useState([]);
  const [showPlayers, setShowPlayers] = useState(false);

  useEffect(() => {
    const playersList = require("./data/players.json");

    setPlayers(playersList);
  }, []);

  return (
    <Container
      fluid
      ref={constraintsRef}
      style={{ backgroundColor: backgroundColor }}
      className="d-flex flex-column justify-content-center screen"
    >
      <Toolbar
        isDrawing={isDrawing}
        setIsDrawing={setIsDrawing}
        canvasDraw={canvasDraw}
        setLineColor={setLineColor}
        lineColor={lineColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        kit={kit}
        setKit={setKit}
        showPlayers={showPlayers}
        setShowPlayers={setShowPlayers}
      ></Toolbar>

      <Pitch
        isDrawing={isDrawing}
        setCanvasDraw={setCanvasDraw}
        lineColor={lineColor}
        brushSize={brushSize}
      ></Pitch>

      <Row className=" p-3  d-flex justify-content-center align-items-center ">
        {showPlayers &&
          players.map((player) => {
            return (
              <Drag key={player.number} parentRef={constraintsRef}>
                <Player
                  key={player.number}
                  number={player.number}
                  name={player.name}
                  position={player.position}
                  isCaptain={player?.isCaptain}
                  kit={kit}
                ></Player>
              </Drag>
            );
          })}
      </Row>

      <ManageData
        players={players}
        setPlayers={setPlayers}
        kit={kit}
      ></ManageData>
    </Container>
  );
}

export default App;
