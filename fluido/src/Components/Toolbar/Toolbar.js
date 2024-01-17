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
  players,
  setShowPlayers,
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
    if (kit < 1) {
      setKit(1);
    } else {
      setKit(0);
    }
  };

  return (
    <ButtonToolbar
      aria-label="Toolbar with button groups "
      className="mt-3 p-0 mb-0"
    >
      <ButtonGroup className="" aria-label="First group">
        <Button variant="dark" onClick={() => setShowPlayers((prev) => !prev)}>
          Players
        </Button>
        <Button variant="dark" onClick={handleChangeKit}>
          Kits
        </Button>
        <Button
          variant="dark"
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
      </ButtonGroup>

      <ButtonGroup className="ms-4" aria-label="First group">
        <Button
          variant="dark"
          onClick={() => {
            setIsDrawing((prevValue) => !prevValue);
          }}
        >
          Enable Drawing
        </Button>{" "}
        {isDrawing && (
          <>
            <Button variant="dark" onClick={handleUndo}>
              Undo
            </Button>{" "}
            <Button variant="dark" onClick={handleDeleteAll}>
              Delete All Lines
            </Button>{" "}
            <input
              style={{ height: "100%" }}
              type="color"
              value={lineColor}
              onChange={(e) => setLineColor(e.target.value)}
            />
            <div
              className="d-flex px-3 justify-content-center align-items-center h-100 bg-dark rounded-end-3"
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
