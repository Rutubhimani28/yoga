import {
  Facebook,
  Twitter,
  Instagram,
  Home,
  Mail,
  CalendarToday,
  Book,
  Chat,
} from "@mui/icons-material";
import { Box, Typography, Grid, IconButton, Divider } from "@mui/material";
import recentFirst from "../assets/images/classes-3.jpg";
import recentSecond from "../assets/images/classes-4.jpg";
import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const menuItems = [
    { name: "About", icon: <Home fontSize="small" />, href: "/about" },
    { name: "Contact", icon: <Mail fontSize="small" />, href: "/contact" },
    { name: "Classes", icon: <Book fontSize="small" />, href: "/classes" },
    {
      name: "Schedule",
      icon: <CalendarToday fontSize="small" />,
      href: "/schedule",
    },
    { name: "Blog", icon: <Chat fontSize="small" />, href: "/blog" },
  ];

  return (
    <Box
      component="footer"
      className="bg-[#f9fafb] text-[#1f2937] pt-12 pb-10 px-4 sm:px-6 md:px-10 mt-3"
    >
      <Box
        className="max-w-[1280px] mx-auto"
      >
        <Grid container spacing={6}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, lg: 3.3 }}>
              <img
                src={logo}
                width={100}
                className="filter grayscale brightness-[2] contrast-[.5]"
              />
              <Typography variant="body2" color="text.secondary">
                Discover inner peace and wellness through mindful yoga practices
                that nurture your body, mind, and soul.
              </Typography>
              <Box
                className="flex gap-2 mt-1"
              >
                <IconButton className="text-gray-500 hover:!text-[#1877f2]">
                  <Facebook />
                </IconButton>
                <IconButton className="text-gray-500 hover:!text-[#1DA1F2]">
                  <Twitter />
                </IconButton>
                <IconButton className="text-gray-500 hover:!text-[#E1306C]">
                  <Instagram />
                </IconButton>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 2.1 }}
              className="flex  flex-col items-center"
            >
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Explore
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {menuItems.map((item) => (
                  <Link to={item?.href} key={item.name}>
                    <Box
                      key={item.name}
                      className="cursor-pointer hover:text-black mb-1.5"
                    >
                      <span className="mr-1 text-gray-500 ">{item.icon}</span>

                      <span className="text-inherit no-underline hover:underline underline-offset-4 decoration-2 transition-all duration-300">
                        {item.name}
                      </span>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3.3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Recent Blog
              </Typography>
              {[
                { img: recentFirst, date: "June 15, 2023" },
                { img: recentSecond, date: "May 28, 2023" },
              ].map((blog, idx) => (
                <Box key={idx} className="flex gap-2 mb-2">
                  <Box className="w-16 h-16 rounded overflow-hidden bg-gray-200">
                    <img
                      src={blog.img}
                      alt="Yoga practice"
                      className="w-full h-full object-cover"
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" gutterBottom>
                      Yoga practices to boost happiness
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {blog.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3.3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Have a Question?
              </Typography>
              <address className="!not-italic">
                <Typography variant="body2" gutterBottom>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </Typography>
                <Typography variant="body2" gutterBottom>
                  +2 392 3939 210
                </Typography>
                <Typography variant="body2">info@yourdomain.com</Typography>
              </address>
            </Grid>
          </Grid>
        </Grid>

        <Divider className="!my-8" />

        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} Yogabest. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
