import { Typography, Grid, Box } from "@mui/material";
import bg2 from "../../assets/images/bg_2.jpg";
const YogaSection = () => {
  return (
    <Grid
      container
      mt={1}
      mb={1}
      spacing={4}
      justifyContent="center"
      alignItems="center"
      className="py-5"
    >
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Box
          component="img"
          src={bg2}
          alt="Yoga Background"
          sx={{
            width: {
              xs: "100%",
              sm: 400,
              md: 500,
            },
            height: {
              xs: 200,
              sm: 300,
              md: 350,
            },
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={2}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          textTransform={"uppercase"}
          textAlign={"left"}
        >
          Strengthen Body, Calm Mind
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          textAlign={"left"}
        >
          Experience holistic wellness with expert guidance and peaceful
          surroundings.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{
            whiteSpace: "pre-line",
            maxWidth: "80ch",
            mx: "auto",
          }}
          textAlign={"left"}
        >
          Discover peace and strength through mindful yoga practice. Our classes
          help you connect body and mind for lasting wellness.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default YogaSection;
