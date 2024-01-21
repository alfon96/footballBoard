import Image from "react-bootstrap/Image";
import classes from "./Player.module.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Player = ({
  player,
  kit,
  totalPlayerHeight,
  totalPlayerWidth,
  playerShirtHeight,
  isEditing = false,
  setModalShow,
}) => {
  const kitSrc = require(`../../assets/kits/${kit}/${
    player.position === "GK" ? "goalkeeperKit" : "kit"
  }.png`);

  return (
    <>
      <div
        className={`${classes.container}   m-0 p-0`}
        style={{ height: totalPlayerHeight, width: totalPlayerWidth }}
      >
        <div
          className={`${classes.shirtContainer}  m-0 p-0`}
          style={{ height: playerShirtHeight, width: totalPlayerWidth }}
        >
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
                fontSize: `${totalPlayerHeight * 0.018}rem`,
              }}
            >
              {player.number}
            </p>
          </div>
          {/* Name */}

          {/* Badges */}
          <div
            className={`${classes.containerBadges}  d-flex flex-column align-items-center justify-content-start`}
          >
            {/* Captain Badge */}
            {player?.isCaptain && (
              <Badge
                bg="warning"
                className={`${classes.captainBadge}  m-0 text-center d-flex justify-content-center align-items-center`}
                style={{
                  fontSize: `${totalPlayerHeight * 0.008}rem`,
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
                    playerInfo: player,
                  })
                }
                style={{
                  transform: "scale(0.8)",
                  margin: 0,
                  color: "#eee",
                  fontSize: `${totalPlayerHeight * 0.008}rem`,
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
                    playerInfo: player,
                  })
                }
                style={{
                  transform: "scale(0.8)",
                  margin: 0,
                  color: "#eee",
                  fontSize: `${totalPlayerHeight * 0.008}rem`,
                }}
              >
                {" "}
                &#10540;
              </Button>
            )}
          </div>
        </div>
        <div
          className={`${classes.nameContainer}  m-0 p-0`}
          style={{
            height: totalPlayerHeight - playerShirtHeight,
            width: totalPlayerWidth,
          }}
        >
          <p
            className={`${classes.playerNameText} rounded-2 px-2  m-0`}
            style={{
              fontSize: `${totalPlayerHeight * 0.011}rem`,
            }}
          >
            {player.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Player;
