import { Breadcrumbs, Link, Typography, Container, Box } from "@mui/material";
import classImage from "../../assets/images/classes-7.jpg";

const ClassesHero = () => {
  return (
    <Box
      className="w-full h-[70vh] md:h-[90vh] bg-cover bg-center flex items-center main-banner relative"
      style={{
        backgroundImage: `url(${classImage})`,
      }}
    >
      <Container maxWidth="md" className="text-white text-center px-4 z-9">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          className="flex justify-center mb-3 sm:mb-4 text-white"
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="white">Classes</Typography>
        </Breadcrumbs>

        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-snug text-white"
        >
          Best Classes
        </Typography>
      </Container>
    </Box>
  );
};

export default ClassesHero;
