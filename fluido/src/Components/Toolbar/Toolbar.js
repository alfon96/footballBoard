import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Slider from "@mui/material/Slider";
import Form from "react-bootstrap/Form";

function Toolbar({
  setIsDrawing,
  canvasDraw,
  isDrawing,
  lineColor,
  setLineColor,
  brushSize,
  setBrushSize,
  setBackgroundColor,
  backgroundColor,
  kit,
  setKit,
  showPlayers,
  setShowPlayers,
  playerHeight,
  setPlayerHeight,
}) {
  const handleUndo = () => {
    if (canvasDraw) {
      canvasDraw.undo();
    }
  };

  const handleDeleteAll = () => {
    if (canvasDraw) {
      canvasDraw.clear();
    }
  };

  const handleChangeKit = () => {
    if (kit < 3) {
      setKit((prev) => prev + 1);
    } else {
      setKit(0);
    }
  };

  const kitSrc = require(`../../assets/kits/${kit}/${"kit"}.png`);

  return (
    <ButtonToolbar
      aria-label="Toolbar with button groups "
      className="mt-3 p-0 mb-0"
    >
      <ButtonGroup className="" aria-label="First group">
        <Button
          variant="secondary"
          onClick={() => setShowPlayers((prev) => !prev)}
        >
          {showPlayers ? "Hide Players" : "Show Players"}
        </Button>
        <Button
          variant="secondary"
          className="d-flex p-0 m-0 justify-content-center align-items-center h-100"
          onClick={handleChangeKit}
        >
          <div className=" mx-3 p-0 text-center">Kits</div>
          <img
            style={{ height: "34px", width: "auto", boxFit: "cover" }}
            src={kitSrc}
          />
        </Button>
        <Button
          variant="secondary"
          className="d-flex p-0 m-0 justify-content-center align-items-center h-100"
        >
          <div className=" mx-3 p-0 text-center">Pitch</div>
          <input
            style={{ height: "100%" }}
            type="color"
            value={backgroundColor}
            className=" m-2 text-center"
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </Button>{" "}
        <div
          className="d-flex px-3 justify-content-center align-items-center h-100 bg-secondary rounded-end-3"
          style={{ whiteSpace: "nowrap", fontSize: "auto", color: "#ddd" }}
        >
          {" "}
          <p className="p-0 m-0 me-4 ">Player Size</p>
          <Form.Range
            value={playerHeight}
            min={0.5}
            step={0.025}
            max={2.5}
            onChange={(e) => setPlayerHeight(parseFloat(e.target.value))}
          />
        </div>
      </ButtonGroup>

      <ButtonGroup className="ms-4" aria-label="First group">
        <Button
          variant="secondary"
          onClick={() => {
            setIsDrawing((prevValue) => !prevValue);
          }}
        >
          {isDrawing ? "Disable Drawing" : "Enable Drawing"}
        </Button>{" "}
        {isDrawing && (
          <>
            <Button variant="secondary" onClick={handleUndo}>
              Undo
            </Button>{" "}
            <Button variant="secondary" onClick={handleDeleteAll}>
              Delete All Lines
            </Button>{" "}
            <input
              style={{ height: "100%" }}
              type="color"
              value={lineColor}
              onChange={(e) => setLineColor(e.target.value)}
            />
            <div
              className="d-flex px-3 justify-content-center align-items-center h-100 bg-secondary rounded-end-3"
              style={{ whiteSpace: "nowrap", fontSize: "auto", color: "#ddd" }}
            >
              {" "}
              <p className="p-0 m-0 me-4 ">Brush Size</p>
              <Form.Range
                value={brushSize}
                min={1}
                step={1}
                max={10}
                onChange={(e) => setBrushSize(parseFloat(e.target.value))}
              />
            </div>
          </>
        )}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Toolbar;
