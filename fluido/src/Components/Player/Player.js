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
  isEditing = false,
}) => {
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

          {/* Captain Badge */}
          {isCaptain && (
            <Badge
              bg="warning"
              className={`${classes.captainBadge} text-dark m-0 text-center d-flex justify-content-center align-items-center`}
              style={{ fontSize: `${0.8 * correctiveAction}rem` }}
            >
              C
            </Badge>
          )}
          {/* Editing tools */}
          {isEditing && (
            <Badge
              bg="warning"
              className={`${classes.captainBadge} text-dark m-0 text-center d-flex justify-content-center align-items-center`}
              style={{
                fontSize: `${0.8 * correctiveAction}rem`,
                cursor: "pointer",
              }}
              onClick={() => console.log("clicked!")}
            >
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
