import { Typography, Grid, Box } from "@mui/material";
import aboutScrollImg from "../../assets/images/about.jpg";


const YogaDetails = () => {

  const stats = [
    { value: "150", label: "YOGA CLASSES" },
    { value: "1,000", label: "YOGA CONDUCTED" },
    { value: "65", label: "YEARS OF EXPERIENCE" },
    { value: "71,650", label: "HAPPY CUSTOMERS" },
  ];

  return (
    <Box className="relative overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center">
      <Box
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-[-1]"
        sx={{
          backgroundImage: `url(${aboutScrollImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      </Box>

      <Grid
        container
        spacing={3}
        className="max-w-[1200px] px-4 w-full z-10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <Grid
            size={{ xs: 6, md: 3 }}
            key={index}
            className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            <Typography
              variant="h4"
              component="h3"
              className="text-white font-bold text-2xl md:text-4xl mb-1"
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              className="text-white uppercase tracking-wide text-sm md:text-base"
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default YogaDetails;
