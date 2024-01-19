import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const SimpleToast = ({ setShowToast, showToast }) => {
  return (
    <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={6000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">TableFluidBall</strong>
          <small>✅</small>
        </Toast.Header>
        <Toast.Body>New Player Succesfully Added!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default SimpleToast;
