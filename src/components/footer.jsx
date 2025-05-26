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
      sx={{
        bgcolor: "#f9fafb",
        color: "#1f2937",
        pt: 10,
        pb: 8,

        px: { xs: 4, sm: 6, md: 10 },
        mt: 3,
      }}
    >
      <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
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
              <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                <IconButton
                  sx={{ color: "gray", "&:hover": { color: "#1877f2" } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{ color: "gray", "&:hover": { color: "#1DA1F2" } }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{ color: "gray", "&:hover": { color: "#E1306C" } }}
                >
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
                  <Box
                    component="li"
                    key={item.name}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <Box sx={{ mr: 1, color: "gray" }}>{item.icon}</Box>
                    <Link to={item?.href}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "inherit",
                          textDecoration: "none",
                          "&:hover": { color: "#2563eb" },
                          transition: "color 0.3s",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </Box>
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
                <Box key={idx} sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 1,
                      overflow: "hidden",
                      bgcolor: "grey.200",
                    }}
                  >
                    <img
                      src={blog.img}
                      alt="Yoga practice"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
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
              <address style={{ fontStyle: "normal" }}>
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

        <Divider sx={{ my: 8 }} />

        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} Yogabest. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
