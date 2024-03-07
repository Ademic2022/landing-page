import { Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardMedia } from "@mui/material";
import Reveal from "../utils/motion/Reveal";
import { motion } from "framer-motion";

const Section2 = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "80px" }}
      justifyContent="center"
      alignItems="center"
      id="services"
    >
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Reveal>
          {/* First Row in Left Column */}
          <Grid container spacing={2}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Noto Sans",
                fontSize: { xs: "30px", md: "35px" },
                fontWeight: 700,
                letterSpacing: "0px",
                textAlign: "left",
                color: "#2B2B2B",
                marginLeft: { xs: "12px", md: "65px" },
              }}
            >
              Solve customer problems instantly using AI
            </Typography>
          </Grid>

          {/* Second Row in Left Column */}
          <Grid container spacing={2} marginLeft={{ md: "40px" }}>
            {/* First Column in Second Row */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "25px",
                  letterSpacing: "0.25px",
                  textAlign: "left",
                  color: "#2B2B2B",
                }}
              >
                Reduce your response time
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  letterSpacing: "0.15000000596046448px",
                  textAlign: "left",
                  // marginLeft: { md: "65px" },
                }}
              >
                Respond to customer messages using conversational AI that
                emulates human language. Kluster can address customer’s
                inquiries through AI-powered conversations.
              </Typography>
            </Grid>
            {/* Second Column in Second Row */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "25px",
                  letterSpacing: "0.25px",
                  textAlign: "left",
                  color: "#2B2B2B",
                }}
              >
                24/7 Support
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  letterSpacing: "0.15px",
                  textAlign: "left",
                }}
              >
                Put personalized support within reach so customers can get fast
                answers on their queries and problems
              </Typography>
            </Grid>
          </Grid>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            style={{ display: "inline-block" }}
          >
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                marginTop: "20px",
                borderRadius: "20px",
                position: "relative",
                marginLeft: { md: "60px" },
                "&:hover": {
                  border: `1.5px solid ${theme.palette.blue.normal}`,
                },
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Reveal>
      </Grid>

      {/* Right Column */}
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
      >
        <Reveal
          y="-100"
          transition={{ type: "spring", bounce: 0.8, delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <CardMedia
              component="img"
              image="/images/img2.png"
              alt="Image"
              style={{ width: "330px", height: "360px" }}
            />
          </motion.div>
        </Reveal>
      </Grid>
    </Grid>
  );
};

export default Section2;
