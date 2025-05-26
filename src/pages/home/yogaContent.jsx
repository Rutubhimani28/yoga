import { Typography, Grid, Box } from "@mui/material";
import bacImage from "../../assets/images/bg_3.jpg";
import aboutImg from "../../assets/images/about.png";
const YogaContent = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      height={"85vh"}
      className="py-4 bg-center bg-cover bg-white/20 bg-blend-overlay opacity-95 yogacontent-background"
    >
      <Grid
        item
        size={{ xs: 12, md: 6 }}
        className="flex justify-center w-full mb-6 md:mb-0"
      >
        <Box
          component="img"
          src={aboutImg}
          alt="Yoga Practice"
          className="w-full  md:w-full max-w-[500px] h-auto"
        />
      </Grid>

      <Grid item size={{ xs: 12, md: 6 }}>
        <Box className="text-left max-w-[600px] mx-auto p-3">
          <Box className="mb-4 bg-white/85 shadow-md rounded-md p-3">
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              textTransform="uppercase"
              className="!font-bold"
            >
              Body & Mind Balance
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className="text-[#999999] !font-[1.1rem]"
            >
              Yoga is the journey of the self, through the self, to the self. It
              brings harmony between body and mind, helping you find inner peace
              and physical strength in every breath and movement.
            </Typography>
          </Box>
          <Box className="mb-4 bg-white/85 shadow-md rounded-md p-3">
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              textTransform="uppercase"
              className="!font-bold"
            >
              Healthy Daily Life
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className="text-[#999999]  !font-[1.1rem]"
            >
              A healthy daily life begins with mindful choices — balanced meals,
              regular exercise, quality sleep, and moments of relaxation. These
              habits nourish both body and mind, leading to lasting energy and
              well-being.
            </Typography>
          </Box>

          <Box className="mb-4 bg-white/85 shadow-md rounded-md p-3">
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              textTransform="uppercase"
              className="!font-bold"
            >
              Improves your flexibility
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className="text-[#999999]  !font-[1.1rem]"
            >
              Regular stretching and yoga practices help lengthen muscles,
              release tension, and increase your range of motion. Improved
              flexibility not only enhances posture but also reduces the risk of
              injury in everyday activities.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default YogaContent;
