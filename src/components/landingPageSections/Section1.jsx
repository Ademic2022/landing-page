import React from "react";
import { Button, Grid, Typography, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Reveal from "../utils/motion/Reveal";

const Section1 = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} alignItems="center" id="home">
      {/* First Column: Text */}
      <Grid item xs={12} md={6} sx={{ marginTop: { xs: 1, md: 10 } }}>
        <Reveal>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "Noto Sans",
              fontSize: { xs: "36px", md: "46px" },
              fontWeight: 700,
              letterSpacing: "0px",
              textAlign: "left",
              color: "#2B2B2B",
              marginLeft: { md: "80px" },
            }}
          >
            Enhance your customer support using our impactful solution
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Noto Sans",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "0.15000000596046448px",
              textAlign: "left",
              marginLeft: { md: "80px" },
            }}
          >
            Transform customer support through our AI-driven solution, providing
            unmatched efficiency and seamless assistance.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            style={{ display: "inline-block" }}
          >
            <Button
              color="inherit"
              variant="contained"
              sx={{
                marginTop: "20px",
                borderRadius: "20px",
                background: theme.palette.blue.normal,
                color: theme.palette.text.white,
                marginLeft: { md: "80px" },
                "&:hover": {
                  background: theme.palette.blue.hover,
                  color: theme.palette.text.secondary,
                },
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Reveal>
      </Grid>

      {/* Second Column: Image */}
      <Grid item xs={12} md={6}>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <CardMedia component="img" image="/images/img1.png" alt="Image" />
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Section1;
