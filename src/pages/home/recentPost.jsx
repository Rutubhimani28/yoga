import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { CalendarDays } from "lucide-react";
import { useLocation } from "react-router-dom";
import postFirst from "../../assets/images/image_1.jpg";
import postSecond from "../../assets/images/image_2.jpg";
import postThird from "../../assets/images/image_3.jpg";
import postFourth from "../../assets/images/classes-6.jpg";
import postFifth from "../../assets/images/classes-7.jpg";
import postSix from "../../assets/images/classes-5.jpg";

const posts = [
  {
    id: 1,
    date: "OCT 10, 2020",
    title: "The Power of Daily Yoga Practice",
    desc: "Discover how daily yoga can help you improve flexibility, strength, and inner peace.",
    image: postFirst,
  },
  {
    id: 2,
    date: "OCT 10, 2020",
    title: "Morning Yoga for a Fresh Start",
    desc: "Learn the benefits of morning yoga routines to energize your body and calm your mind.",
    image: postSecond,
  },
  {
    id: 3,
    date: "OCT 10, 2020",
    title: "Mastering Your Breath with Yoga",
    desc: "Explore effective breathing techniques in yoga to reduce stress and increase focus.",
    image: postThird,
  },
];

const posts1 = [
  {
    id: 1,
    date: "OCT 10, 2020",
    title: "Yoga for Beginners: Essential Poses to Start Your Journey",
    desc: "New to yoga? Discover the foundational poses that will help you build strength, flexibility, and confidence in your practice.",
    image: postFourth,
  },
  {
    id: 2,
    date: "OCT 10, 2020",
    title: "The Science Behind Yoga's Stress-Relief Benefits",
    desc: "Explore how regular yoga practice affects your nervous system and helps reduce cortisol levels for better stress management.",
    image: postFifth,
  },
  {
    id: 3,
    date: "OCT 10, 2020",
    title: "Advanced Yoga Poses to Challenge Your Practice",
    desc: "Ready to level up? Learn about advanced asanas that will test your balance, strength, and focus while deepening your practice.",
    image: postSix,
  },
];

const RecentPost = () => {
  const { pathname } = useLocation();
  return (
    <Box className="py-16 mb-5 mt-5">
      <Box className="max-w-7xl mx-auto px-4 text-center">
        {pathname !== "/blog" && (
          <>
            <p className="text-gray-500 font-medium mb-2">Our Blog</p>
            <h2 className="text-3xl font-bold mb-12">RECENT POST</h2>
          </>
        )}

        <Grid container spacing={4} justifyContent="center">
          {posts.map((post) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
              <Card className="shadow-lg rounded-xl overflow-hidden h-full flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />
                <CardContent className="text-left space-y-3 flex flex-col flex-grow">
                  <Box className="flex justify-center  items-center space-x-2">
                    <span className="bg-gray-400 text-white text-xs px-2 py-2.5  rounded flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                  </Box>

                  <Typography variant="h6" className="font-bold text-gray-800">
                    {post.title}
                  </Typography>

                  <Typography variant="body2" className="text-gray-600">
                    {post.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {pathname == "/blog" &&
            posts1.map((post) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
                <Card className="shadow-lg rounded-xl overflow-hidden h-full flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                  <CardContent className="text-left space-y-3 flex flex-col flex-grow">
                    <Box className="flex justify-center items-center space-x-2">
                      <span className="bg-gray-400 text-white text-xs px-2 py-2.5 rounded flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                    </Box>

                    <Typography
                      variant="h6"
                      className="font-bold text-gray-800"
                    >
                      {post.title}
                    </Typography>

                    <Typography variant="body2" className="text-gray-600">
                      {post.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentPost;
