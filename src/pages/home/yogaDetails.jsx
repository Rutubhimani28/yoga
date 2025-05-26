import { Typography, Grid, Box, useTheme } from "@mui/material";
import aboutScrollImg from "../../assets/images/about.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
const YogaDetails = () => {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const stats = [
    { value: "150", label: "YOGA CLASSES" },
    { value: "1,000", label: "YOGA CONDUCTED" },
    { value: "65", label: "YEARS OF EXPERIENCE" },
    { value: "71,650", label: "HAPPY CUSTOMERS" },
  ];
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("md")]: {
          height: "500px",
        },
      }}
    >
      <Box
        component={motion.div}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${aboutScrollImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      />

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
        }}
      >
        {stats.map((stat, index) => (
          <Grid
            item
            xs={6}
            md={3}
            key={index}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                p: 3,
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  mb: 1,
                  [theme.breakpoints.up("md")]: {
                    fontSize: "3rem",
                  },
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.875rem",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "1rem",
                  },
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default YogaDetails;
