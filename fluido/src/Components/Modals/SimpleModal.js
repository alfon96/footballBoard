import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Player from "../Player/Player";
import classes from "./SimpleModal.module.css";
import { deletePlayer } from "../../firebase";

const SimpleModal = ({
  modalInfo,
  onHide,
  kit,
  playerTotalHeight,
  correctiveAction,
  setPlayers,
}) => {
  //   name: modalInfo.playerInfo.name ?? null,
  //   number: modalInfo.playerInfo.number ?? null,
  //   position: modalInfo.playerInfo.position ?? null,
  //   isCaptain: modalInfo.playerInfo.isCaptain ?? null,

  return (
    <Modal show={modalInfo.show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to remove the player:</p>
        <div className="d-flex justify-content-center">
          <div
            key={modalInfo.playerInfo.number}
            className={classes.container}
            style={{ height: playerTotalHeight }}
          >
            <Player
              key={modalInfo.playerInfo.number}
              player={modalInfo.playerInfo}
              kit={kit}
              correctiveAction={correctiveAction}
              isEditing={false}
            ></Player>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deletePlayer(modalInfo.playerInfo.id);
            setPlayers((prev) =>
              prev.filter((player) => player.id !== modalInfo.playerInfo.id)
            );
            onHide();
          }}
        >
          Delete Player
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SimpleModal;
