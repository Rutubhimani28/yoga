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
      icon: <WbSunnyIcon color="warning" className="font-[40px]" />,
    },
    {
      title: "Experienced Trainers",
      description:
        "Practice safely and mindfully with guidance from our certified yoga instructors, dedicated to nurturing your body, mind, and spirit at every step.",
      icon: <PeopleIcon color="primary" className="font-[40px]" />,
    },
    {
      title: "Happy Environment",
      description:
        "Join a supportive and uplifting community where positivity flows freely, fostering inner peace and joyful transformation through yoga.",
      icon: <EmojiEmotionsIcon color="secondary" className="font-[40px]" />,
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
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} className="flex">
          <Card
            className="max-w-[400px] rounded-md shadow-sm flex-grow transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.02]"

          >
            <CardContent
              className="text-center p-4 flex flex-col h-full justify-center"
            >
              <Box
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-3 bg-[linear-gradient(135deg,_#f3e5f5_0%,_#fce4ec_100%)]"
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h5"
                component="h3"
                className="font-bold text-gray-900 mb-2 text-[1.5rem]"
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                className="!text-gray-600 !leading-[1.6] !text-[1.1rem]"
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
