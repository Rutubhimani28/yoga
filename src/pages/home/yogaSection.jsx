import { Typography, Grid, Box } from "@mui/material";
import bg2 from "../../assets/images/bg_2.jpg";
import lotus from "../../assets/images/lotus.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const YogaSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      mb={1}
      spacing={4}
      justifyContent="center"
      alignItems="center"
      className="!py-19"
    >
      <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
        <Box
          component="img"
          src={bg2}
          alt="Yoga Background"
          className="w-full max-w-[500px] h-[200px] sm:h-[300px] md:h-[350px] object-cover rounded-md shadow-md"
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={isMdUp ? "center" : "flex-start"}
        px={{ xs: 2, sm: 3, md: 4 }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          textTransform={"uppercase"}
          textAlign={isMdUp ? "center" : "left"}
          className=" !font-bold"
        >
          Life in Divine Yoga{" "}
        </Typography>
        <Box
          className="flex justify-around"
          alignItems={isMdUp ? "center" : "flex-start"}
        >
          <img src={lotus} width={100} height={100} alt="Lotus" />
          <Typography variant="h6" className="!my-6 ps-5">
            "I am standing on my own altar, The Poses are my prayers"
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          textAlign={isMdUp ? "center" : "left"}
        >
          Experience holistic wellness with expert guidance and peaceful
          surroundings.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          className="whitespace-pre-line max-w-[80ch] mx-auto"
          textAlign={isMdUp ? "center" : "left"}
        >
          Discover peace and strength through mindful yoga practice. Our classes
          help you connect body and mind for lasting wellness.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default YogaSection;
