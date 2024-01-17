import Image from "react-bootstrap/Image";
import firstKit from "../../assets/firstKit.png";
import firstKitGoalkeeper from "../../assets/firstKitGoalkeeper.png";
import classes from "./Player.module.css";
import Badge from "react-bootstrap/Badge";
import { Container, Row, Col } from "react-bootstrap";

const Player = ({ name, number, position, isCaptain }) => {
  const kit = position === "P" ? firstKitGoalkeeper : firstKit;

  return (
    <>

      <div className={`${classes.container}  m-0 p-0`}>
        <Image src={kit} className={classes.kitImage}></Image>
        {/* Number */}
        <div
          className={`${classes.playerNumberContainer} d-flex justify-content-center`}
        >
          <p className={classes.playerNumberText}>{number}</p>
        </div>
        {/* Name */}

        {/* Captain Badge */}
        {isCaptain && (
          <Badge bg="warning" className={classes.captainBadge}>
            C
          </Badge>
        )}
      </div>
      <div
        className={`${classes.playerNameContainer} d-flex m-0 justify-content-center`}
      >
        <p className={`${classes.playerNameText} rounded-2 px-2`}>{name}</p>
      </div>

    </>
  );
};

export default Player;
