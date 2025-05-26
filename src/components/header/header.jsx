import { useEffect, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo2.png";

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
  const location = useLocation();
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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        className={`transition-all duration-300 z-50 ${isScrolled ? "!bg-gray-50 shadow-md" : "!bg-transparent"
          }`}
      >
        <Toolbar className="w-full max-w-screen-xl mx-auto flex justify-between px-4 md:px-8">
          <Typography
            variant="h6"
            className={`font-bold ${isScrolled ? "!text-gray-800" : "!text-white"
              }`}
          >
            <img src={logo} height={100} width={100} className={`transition-all duration-300 ${isScrolled ? "filter grayscale brightness-[1] contrast-[.5]" : "filter grayscale brightness-[10] contrast-[.5]"}`}

            />
          </Typography>

          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>
                  <Button
                    disableRipple
                    className={`capitalize font-medium bg-transparent shadow-none transition-colors duration-200 relative ${isScrolled
                      ? isActive(item.path)
                        ? "!text-gray-800 !font-bold"
                        : "!text-gray-600 hover:!text-gray-800"
                      : isActive(item.path)
                        ? "!text-white !font-bold"
                        : "!text-gray-200 hover:!text-white"
                      }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${isScrolled ? "bg-gray-800" : "bg-white"
                          }`}
                      ></span>
                    )}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <IconButton
              onClick={toggleDrawer}
              className={`${isScrolled ? "!text-black" : "!text-white"} `}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box className="w-64 p-4 space-y-4 flex flex-col justify-center items-center">
          <img
            src={logo}
            height={100}
            width={100}
            className="filter grayscale brightness-[9] contrast-[.5]"
          />
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="no-underline"
            >
              <Button
                fullWidth
                className={`justify-start text-left normal-case  px-4 py-2 mb-1 ${isActive(item.path)
                  ? "!text-gray-800 font-medium !border-b-4 !border-gray-500"
                  : "!text-gray-600 hover:!bg-gray-100"
                  }`}
              >
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
