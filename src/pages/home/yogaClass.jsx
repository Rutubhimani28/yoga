
import class1 from "../../assets/images/classes-1.jpg";
import class2 from "../../assets/images/classes-2.jpg";
import class3 from "../../assets/images/classes-3.jpg";
import class4 from "../../assets/images/classes-4.jpg";
import class5 from "../../assets/images/classes-5.jpg";
import class6 from "../../assets/images/classes-6.jpg";
import { useLocation } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const YogaClass = () => {
  const { pathname } = useLocation();

  const yogaClasses = [
    {
      id: 1,
      title: "Private & Group Lessons",
      image: class1,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
    },
    {
      id: 2,
      title: "Yoga for Pregnant",
      image: class2,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
    },
    {
      id: 3,
      title: "Yoga for Beginners",
      image: class3,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
    },
    {
      id: 4,
      title: "Yoga Barre",
      image: class4,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
    },
    {
      id: 5,
      title: "Yoga Core",
      image: class5,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
    },
    {
      id: 6,
      title: "Yoga Restore",
      image: class6,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
    },
  ];

  return (
    <Box className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <Box className="max-w-7xl mx-auto">
        <Box className="!text-center mb-12 flex flex-col justify-center items-center">
          {pathname !== "/classes" && (
            <>
              <Typography
                variant="h4"
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                Our Yoga Classes
              </Typography>
              <Typography className="text-lg text-gray-600 max-w-2xl mx-auto !text-center">
                Discover the perfect yoga class for your journey. From beginners
                to advanced practitioners, we offer a variety of classes to suit
                your needs and schedule.
              </Typography>
            </>
          )}
        </Box>

        <Grid container spacing={4}>
          {yogaClasses.map((yogaClass) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={yogaClass.id}>
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <Box className="relative h-48 overflow-hidden yogaClassCard">
                  <CardMedia
                    component="img"
                    height="100%"
                    image={yogaClass.image}
                    alt={yogaClass.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Box className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 !-z-10"></Box>

                  <Box className="absolute top-4 left-4 bg-gradient-to-r bg-[#7e7d7a] text-white px-3 py-2 rounded-lg shadow-lg z-10 text-xs space-y-1">
                    <Box className="flex items-center space-x-2 font-medium">
                      <span>👤 {yogaClass.instructor}</span>
                    </Box>
                    <Box className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{yogaClass.schedule}</span>
                    </Box>
                    <Box className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{yogaClass.time}</span>
                    </Box>
                  </Box>
                </Box>

                <CardContent className="p-6">
                  <Typography
                    variant="h6"
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-500 transition-colors duration-300"
                  >
                    {yogaClass.title}
                  </Typography>

                  <Box className="space-y-2 mb-4">
                    <Box className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-grey" />
                      <span>{yogaClass.schedule}</span>
                    </Box>
                    <Box className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-grey" />
                      <span>{yogaClass.time}</span>
                    </Box>
                  </Box>

                  <Button
                    fullWidth
                    className="bg-gradient-to-r from-gray-600 to-gray-800 !text-white py-3 px-4 rounded-lg font-medium hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book This Class
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default YogaClass;
