import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const YogaCards = () => {
  const yogaFeatures = [
    {
      title: "Outdoor Activities",
      description:
        "Reconnect with nature through our outdoor yoga sessions, where you can harmonize your breath with the gentle breeze and embrace the healing energy of the sun.",
      icon: <WbSunnyIcon color="warning" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Experienced Trainers",
      description:
        "Practice safely and mindfully with guidance from our certified yoga instructors, dedicated to nurturing your body, mind, and spirit at every step.",
      icon: <PeopleIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      title: "Happy Environment",
      description:
        "Join a supportive and uplifting community where positivity flows freely, fostering inner peace and joyful transformation through yoga.",
      icon: <EmojiEmotionsIcon color="secondary" sx={{ fontSize: 40 }} />,
    },
  ];
  return (
    <Grid
      container
      mt={2}
      mb={2}
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
      className="py-10 bg-[#f7f7f7]"
    >
      {yogaFeatures.map((feature, index) => (
        <Grid item size={{ xs: 12, sm: 6 , md :3}} key={index} display="flex">
          <Card
            sx={{
              maxWidth: 400,
              borderRadius: 3,
              boxShadow: 1,
              "&:hover": {
                boxShadow: 3,
                transform: "scale(1.02)",
              },
              transition: "all 0.3s ease",
              flexGrow: 1,
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                p: 4,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #f3e5f5 0%, #fce4ec 100%)",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                  mb: 2,
                  fontSize: "1.5rem",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.6,
                  fontSize: "1.1rem",
                }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default YogaCards;
