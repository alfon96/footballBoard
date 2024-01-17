import * as React from "react";
import { motion } from "framer-motion";
import classes from "./drag.module.css";

export const Drag = ({ children, parentRef }) => {
  return (
    <motion.div
      drag
      dragConstraints={parentRef}
      dragElastic={8}
      dragMomentum={false}
      className={`${classes.container}   ${classes.grabbable}`}
    >
      {children}
    </motion.div>
  );
};
