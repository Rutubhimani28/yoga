import { Card, CardContent, Typography, Button } from "@mui/material";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import postFirst from "../../assets/images/image_1.jpg";
import postsecond from "../../assets/images/image_2.jpg";
import postThird from "../../assets/images/image_3.jpg";
const posts = [
  {
    id: 1,
    date: "OCT 10, 2020",
    title: "Treat Your Body Like A Temple",
    desc: "Discover how daily yoga can help you improve flexibility, strength, and inner peace.",
    image: postFirst,
  },
  {
    id: 2,
    date: "OCT 10, 2020",
    title: "Treat Your Body Like A Temple",
    desc: "Learn the benefits of morning yoga routines to energize your body and calm your mind.",
    image: postsecond,
  },
  {
    id: 3,
    date: "OCT 10, 2020",
    title: "Treat Your Body Like A Temple",
    desc: "Explore effective breathing techniques in yoga to reduce stress and increase focus.",
    image: postThird,
  },
];

const RecentPost = () => {
  return (
    <div className="py-16 bg-gray-50 mb-5 mt-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-grey-500 font-medium mb-2">Our Blog</p>
        <h2 className="text-3xl font-bold mb-12">RECENT POST</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1" /> {post.date}
                  </span>
                </div>
                <Typography variant="h6" className="font-bold text-gray-800">
                  {post.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {post.desc}
                </Typography>

                <div className="mt-4">
                  <Link to="/">
                    <Button className="!rounded-full !min-w-0 !p-2 !border-gray-500 hover:!border-grey-800">
                      <ChevronRight className="w-5 h-5 text-gray-700 hover:text-grey-600" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
