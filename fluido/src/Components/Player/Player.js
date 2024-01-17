import Image from "react-bootstrap/Image";
import classes from "./Player.module.css";
import Badge from "react-bootstrap/Badge";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Player = ({ name, number, position, isCaptain, kit }) => {
  const kitSrc = require(`../../assets/kits/${kit}/${
    position === "P" ? "goalkeeperKit" : "kit"
  }.png`);

  return (
    <>
      <div className={`${classes.container}  m-0 p-0`}>
        <Image src={kitSrc} className={classes.kitImage}></Image>
        {/* Number */}
        <div
          className={`${classes.playerNumberContainer} d-flex justify-content-center`}
        >
          <p
            className={`${classes.playerNumberText}  ${
              kit > 0 && classes.playerNumberTextLightKit
            }`}
          >
            {number}
          </p>
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
