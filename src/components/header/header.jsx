import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Trainer", path: "/trainer" },
  { label: "Classes", path: "/classes" },
  { label: "Schedule", path: "/schedule" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        className={`transition-all duration-300 z-50 ${
          isScrolled
            ? "!bg-white text-black shadow-md"
            : "!bg-transparent text-white"
        }`}
      >
        <Toolbar className="w-full max-w-screen-xl mx-auto flex justify-between px-4 md:px-8">
          <Typography
            variant="h6"
            className={`font-bold ${
              isScrolled ? "!text-black" : "!text-white"
            }`}
          >
            Yogabest
          </Typography>


          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>
                  <Button
                    disableRipple
                    className={`capitalize font-medium bg-transparent shadow-none transition-colors duration-200 ${
                      isScrolled
                        ? "!text-black hover:text-green-500"
                        : "!text-white hover:text-green-300"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <IconButton
              onClick={toggleDrawer}
              className={`${ isScrolled ? "text-black" : "text-white"} `}
              // sx={{ color isScrolled ? "black" : "white" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>


      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box className="w-64 p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <Button fullWidth className="justify-start">
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
