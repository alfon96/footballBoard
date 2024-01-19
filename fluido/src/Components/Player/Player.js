import Image from "react-bootstrap/Image";
import classes from "./Player.module.css";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";

const Player = ({
  name,
  number,
  position,
  isCaptain,
  kit,
  correctiveAction,
}) => {
  const kitSrc = require(`../../assets/kits/${kit}/${
    position === "P" ? "goalkeeperKit" : "kit"
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
                kit > 0 && classes.playerNumberTextLightKit
              }`}
              style={{
                fontSize: `${2.06 * correctiveAction}rem`,
              }}
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
