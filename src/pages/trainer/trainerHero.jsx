import { Breadcrumbs, Link, Typography, Container } from "@mui/material";
import classImage from "../../assets/images/classes-7.jpg";
const TrainerHero = () => {
  return (
    <div
      className="w-full h-[70vh] md:h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${classImage})`,
      }}
    >
      <Container maxWidth="md" className="text-white text-center px-4">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          className="flex justify-center mb-3 sm:mb-4"
          sx={{ color: "white" }}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="white">Trainer</Typography>
        </Breadcrumbs>

        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-snug"
          sx={{ color: "white" }}
        >
          Best Trainers
        </Typography>
      </Container>
    </div>
  );
};

export default TrainerHero;
