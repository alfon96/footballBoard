import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const SimpleToast = ({ setShowToast, showToast, formState }) => {
  return (
    <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
      <Toast
        onClose={() => setShowToast((prev) => ({ ...prev, show: false }))}
        show={showToast.show}
        delay={6000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">TableFluidBall</strong>
          <small>{showToast.type === "success" ? "✅" : "❌"}</small>
        </Toast.Header>
        <Toast.Body>
          {showToast.type === "success" ? (
            `${formState.name} Succesfully Added!`
          ) : (
            <p className="fs-6"> Error: {showToast.message}</p>
          )}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default SimpleToast;
