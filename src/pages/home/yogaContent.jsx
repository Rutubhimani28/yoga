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
      <Grid item size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
        <Box
          component="img"
          src={aboutImg}
          alt="Yoga Practice"
          className="w-full sm:w-[90%] md:w-full max-w-[500px] h-auto"
        />
      </Grid>

      <Grid item size={{ xs: 12, md: 6 }}>
        <Box
          className="text-left max-w-[600px] mx-auto p-3"
        >
          <Box
            className="mb-4 bg-white/85 shadow-md rounded-md p-3"
          >
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
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
          </Box>
          <Box
            className="mb-4 bg-white/85 shadow-md rounded-md p-3"

          >
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
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
          </Box>

          <Box
            className="mb-4 bg-white/85 shadow-md rounded-md p-3"

          >
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
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default YogaContent;
