import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./drag.module.css";

export const Drag = ({ children, parentRef, playerWidth, playerHeight }) => {
  const playerAspectRatio = 0.8122743682;

  return (
    <motion.div
      drag
      style={{
        width: playerWidth,
        height: playerHeight,
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
