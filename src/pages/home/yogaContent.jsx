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
      sx={{
        py: 4,
        backgroundImage: `url(${bacImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        opacity: "0.95",
        backgroundColor: "rgba(255,255,255,0.2)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Box
          component="img"
          src={aboutImg}
          alt="Yoga Practice"
          sx={{
            width: { xs: "100%", sm: "90%", md: "100%" },
            maxWidth: 500,
            height: "auto",
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            textAlign: "left",
            maxWidth: 600,
            mx: "auto",
            p: 3,
          }}
        >
          <Box
            sx={{
              mb: 4,
              backgroundColor: "rgba(255,255,255,0.85)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              textTransform="uppercase"
              sx={{ fontWeight: "bold" }}
            >
              Body & Mind Balance
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem" }}
              className="text-[#999999]"
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 4,
              backgroundColor: "rgba(255,255,255,0.85)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              textTransform="uppercase"
              sx={{ fontWeight: "bold" }}
            >
              Healthy Daily Life
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem" }}
              className="text-[#999999]"
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              textTransform="uppercase"
              sx={{ fontWeight: "bold" }}
            >
              Improves your flexibility
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem" }}
              className="text-[#999999]"
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
