import Image from "react-bootstrap/Image";
import classes from "./Player.module.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Player = ({
  name,
  number,
  position,
  isCaptain,
  kit,
  correctiveAction,
  isEditing = false,
  setModalShow,
}) => {
  const playerInfo = { name, number, position, isCaptain };
  const kitSrc = require(`../../assets/kits/${kit}/${
    position === "GK" ? "goalkeeperKit" : "kit"
  }.png`);

  return (
    <>
      <div className={`${classes.container}   m-0 p-0`}>
        <div className={`${classes.shirtContainer}  m-0 p-0`}>
          <Image
            src={kitSrc}
            className={classes.kitImage}
            draggable="false"
          ></Image>
          {/* Number */}
          <div
            className={`${classes.playerNumberContainer} d-flex justify-content-center`}
          >
            <p
              className={`${classes.playerNumberText}  ${
                kit === 1 && classes.playerNumberTextLightKit
              }`}
              style={{
                fontSize: `${2.06 * correctiveAction}rem`,
              }}
            >
              {number}
            </p>
          </div>
          {/* Name */}

          {/* Badges */}
          <div
            className={`${classes.containerBadges}  d-flex flex-column align-items-center justify-content-start`}
          >
            {/* Captain Badge */}
            {isCaptain && (
              <Badge
                bg="warning"
                className={`${classes.captainBadge}  m-0 text-center d-flex justify-content-center align-items-center`}
                style={{
                  fontSize: `${0.8 * correctiveAction}rem`,
                  color: "#333",
                }}
              >
                C
              </Badge>
            )}
            {/* Editing tools */}
            {isEditing && (
              <Button
                size="sm"
                variant="primary"
                onClick={() =>
                  setModalShow({
                    show: true,
                    type: "editing",
                    playerInfo: playerInfo,
                  })
                }
                style={{
                  transform: "scale(0.8)",
                  margin: 0,
                  color: "#eee",
                  fontSize: `${0.8 * correctiveAction}rem`,
                }}
              >
                {" "}
                &#9998;
              </Button>
            )}
            {isEditing && (
              <Button
                size="sm"
                variant="danger"
                onClick={() =>
                  setModalShow({
                    show: true,
                    type: "remove",
                    playerInfo: playerInfo,
                  })
                }
                style={{
                  transform: "scale(0.8)",
                  margin: 0,
                  color: "#eee",
                  fontSize: `${0.8 * correctiveAction}rem`,
                }}
              >
                {" "}
                &#10540;
              </Button>
            )}
          </div>
        </div>
        <div className={`${classes.nameContainer}  m-0 p-0`}>
          <p
            className={`${classes.playerNameText} rounded-2 px-2  m-0`}
            style={{
              fontSize: `${1.25 * correctiveAction}rem`,
            }}
          >
            {name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Player;
