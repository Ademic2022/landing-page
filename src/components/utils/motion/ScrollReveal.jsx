import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const ScrollReveal = ({ children, type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      x: type === "first" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Box ref={ref}>
      <motion.div initial="hidden" animate={controls} variants={variants}>
        {children}
      </motion.div>
    </Box>
  );
};

export default ScrollReveal;
