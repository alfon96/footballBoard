import Image from "react-bootstrap/Image";
import fieldPitch from "../../assets/pitch/pitch.svg";
import classes from "./Pitch.module.css";
import CanvasDraw from "react-canvas-draw";
import { useState } from "react";

const Pitch = ({
  isDrawing,
  setCanvasDraw,
  lineColor,
  brushSize,
  screenHeight,
  backgroundColor,
}) => {
  // Configure canvas properties as required
  const canvasProps = {
    ref: setCanvasDraw,
    brushColor: lineColor,
    brushRadius: brushSize,
    lazyRadius: 0,
    canvasWidth: 1150,
    canvasHeight: screenHeight * 0.85,
    hideGrid: true,
    backgroundColor: "transparent",
    hideInterface: true,
  };

  return (
    <>
      <div
        className={`canvas-container rounded-5 mt-3 ${classes.preventSelect}`}
        style={{
          backgroundColor: backgroundColor,
          height: screenHeight * 0.85,
        }}
      >
        {/* This button is for demonstration; the functionality needs custom implementation. */}
        {isDrawing && (
          <CanvasDraw
            {...canvasProps}
            style={{ width: "100%", height: "100%" }}
            className="border"
          />
        )}
        <img src={fieldPitch} draggable="false" alt="Field Pitch"></img>
      </div>
    </>
  );
};

export default Pitch;
