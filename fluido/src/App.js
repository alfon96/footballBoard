import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pitch from "./Components/Pitch/Pitch";
import Player from "./Components/Player/Player";
import { Drag } from "./Components/draggable/drag";
import { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Toolbar from "./Components/Toolbar/Toolbar";
import { useState } from "react";
import { useEffect } from "react";
import ManageData from "./Components/ManageData/ManageData";
import SimpleToast from "./Components/ManageData/SimpleToast";
import ModalForm from "./Components/Modals/ModalForm";
import SimpleModal from "./Components/Modals/SimpleModal";
import { getPlayers } from "./firebase";

function App() {
  const playerShirtStartingHeight = 76.95;
  const playerNameStartingHeight = 27.48;
  const playerTotalHeight =
    playerShirtStartingHeight + playerNameStartingHeight;
  const [backgroundColor, setBackgroundColor] = useState("#1b718d");
  const constraintsRef = useRef(null);
  const [lineColor, setLineColor] = useState("#fbff00");
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasDraw, setCanvasDraw] = useState(null);
  const [brushSize, setBrushSize] = useState(3);
  const [kit, setKit] = useState(0);
  const [players, setPlayers] = useState([]);
  const [showPlayers, setShowPlayers] = useState(false);
  const [playerSize, setPlayerSize] = useState(playerTotalHeight);
  const [screenAspectRatio, setScreenAspectRatio] = useState(0);
  const [showToast, setShowToast] = useState({
    show: false,
    type: "success",
    message: "",
  });
  const [modalShow, setModalShow] = useState({
    show: false,
    type: "edit",
    playerInfo: null,
  });
  const [formState, setFormState] = useState({
    name: "",
    number: "",
    position: "",
  });

  useEffect(() => {
    // Function to update screenAspectRatio
    const updateAspectRatio = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      setScreenAspectRatio(aspectRatio);
    };

    // Listen for resize events
    window.addEventListener("resize", updateAspectRatio);

    // Initial call to set aspect ratio
    updateAspectRatio();
    console.log(screenAspectRatio);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateAspectRatio);
    };
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersList = await getPlayers();
      setPlayers(playersList);
    };

    fetchPlayers();
  }, []);

  const initialRatio = 1.36;
  const correctiveActionForScreenResize = screenAspectRatio / initialRatio;
  const correctiveActionForSizeChange = playerSize / playerTotalHeight;
  const correctiveAction =
    correctiveActionForScreenResize * correctiveActionForSizeChange;

  return (
    <Container
      fluid
      ref={constraintsRef}
      className="d-flex flex-column pt-2 justify-content-center screen  position-absolute bg-dark"
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
        playerHeight={playerSize}
        setPlayerHeight={setPlayerSize}
      ></Toolbar>
      <div className="mt-3  prevent-select"></div>
      <Pitch
        isDrawing={isDrawing}
        setCanvasDraw={setCanvasDraw}
        lineColor={lineColor}
        brushSize={brushSize}
        correctiveAction={correctiveActionForScreenResize}
        backgroundColor={backgroundColor}
      ></Pitch>

      <Row className=" my-3 bg-dark p-4 d-flex justify-content-center align-items-center gap-3">
        {showPlayers &&
          players.map((player) => {
            return (
              <Drag
                key={player.number}
                parentRef={constraintsRef}
                correctiveAction={correctiveAction}
                playerHeight={playerShirtStartingHeight}
                playerNameStartingHeight={playerNameStartingHeight}
              >
                <Player
                  playerShirtStartingHeight={playerShirtStartingHeight}
                  playerNameStartingHeight={playerNameStartingHeight}
                  key={player.number}
                  player={player}
                  kit={kit}
                  correctiveAction={correctiveAction}
                ></Player>
              </Drag>
            );
          })}
      </Row>
      <Row className=" mt-5 p-3 d-flex justify-content-center bench align-items-center bg-warning">
        <ManageData
          modalShow={modalShow}
          setModalShow={setModalShow}
          players={players}
          setPlayers={setPlayers}
          kit={kit}
          correctiveAction={correctiveAction}
          playerTotalHeight={playerTotalHeight}
          setShowToast={setShowToast}
          formState={formState}
          setFormState={setFormState}
        ></ManageData>
        {showToast && (
          <SimpleToast
            setShowToast={setShowToast}
            showToast={showToast}
            formState={formState}
          ></SimpleToast>
        )}
      </Row>

      {modalShow.show && modalShow.type === "editing" && (
        <ModalForm
          modalInfo={modalShow}
          onHide={() => setModalShow(false)}
          players={players}
          setPlayers={setPlayers}
        ></ModalForm>
      )}

      {modalShow.show && modalShow.type === "remove" && (
        <SimpleModal
          modalInfo={modalShow}
          onHide={() => setModalShow(false)}
          kit={kit}
          correctiveAction={correctiveAction}
          playerTotalHeight={playerTotalHeight}
          setPlayers={setPlayers}
        ></SimpleModal>
      )}
    </Container>
  );
}

export default App;
