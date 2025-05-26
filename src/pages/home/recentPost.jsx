import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { CalendarDays, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import postFirst from "../../assets/images/image_1.jpg";
import postsecond from "../../assets/images/image_2.jpg";
import postThird from "../../assets/images/image_3.jpg";

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
    image: postsecond,
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
    title: "The Power of Daily Yoga Practice",
    desc: "Yoga is more than exercise—it's a path to self-discovery and holistic health.",
    image: postFirst,
  },
  {
    id: 2,
    date: "OCT 10, 2020",
    title: "Morning Yoga for a Fresh Start",
    desc: "Start your day with energizing yoga sequences to set a positive tone.",
    image: postsecond,
  },
  {
    id: 3,
    date: "OCT 10, 2020",
    title: "Mastering Your Breath with Yoga",
    desc: "Breath awareness in yoga leads to better emotional regulation and balance.",
    image: postThird,
  },
];

const RecentPost = () => {
  const { pathname } = useLocation();
  return (
    <Box className="py-16 bg-gray-50 mb-5 mt-5">
      <Box className="max-w-7xl mx-auto px-4 text-center">
        {pathname !== "/blog" && (
          <>
            <p className="text-grey-500 font-medium mb-2">Our Blog</p>
            <h2 className="text-3xl font-bold mb-12">RECENT POST</h2>
          </>
        )}

        <Box className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <CardContent className="text-left space-y-3">
                <Box className="flex justify-center items-center space-x-2">
                  <span className="bg-gray-500 text-white text-xs px-2 py-3 rounded flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1" /> {post.date}
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
          ))}

          {pathname === "/blog" &&
            posts1.map((post) => (
              <Card
                key={post.id}
                className="shadow-lg rounded-xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />
                <CardContent className="text-left space-y-3">
                  <Box className="flex justify-center items-center space-x-2">
                    <span className="bg-gray-500 text-white text-xs px-2 py-3  rounded flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" /> {post.date}
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
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RecentPost;
