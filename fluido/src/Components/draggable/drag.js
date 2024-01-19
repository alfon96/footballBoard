import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./drag.module.css";

export const Drag = ({
  children,
  parentRef,
  correctiveAction,
  playerHeight,
  playerNameStartingHeight,
}) => {
  const playerAspectRatio = 0.8122743682;

  const playerWidth = playerHeight * playerAspectRatio;
  return (
    <motion.div
      drag
      style={{
        width: playerWidth * correctiveAction,
        height: (playerHeight + playerNameStartingHeight) * correctiveAction,
      }}
      dragConstraints={parentRef}
      dragElastic={0.8}
      dragMomentum={false}
      className={`${classes.container} ${classes.grabbable} m-0 p-0`}
      initial={false}
    >
      {children}
    </motion.div>
  );
};
