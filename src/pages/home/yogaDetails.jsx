import { Typography, Grid, Box, useTheme } from "@mui/material";
import aboutScrollImg from "../../assets/images/about.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
const YogaDetails = () => {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const stats = [
    { value: "150", label: "YOGA CLASSES" },
    { value: "1,000", label: "YOGA CONDUCTED" },
    { value: "65", label: "YEARS OF EXPERIENCE" },
    { value: "71,650", label: "HAPPY CUSTOMERS" },
  ];
  return (
    <Box
      component="section"
      className="relative overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center"
    >
      <Box
        component={motion.div}
        className="yoga-Details-img absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-[-1] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-[rgba(0,0,0,0.4)] "
      />

      <Grid
        container
        spacing={4}
        justifyContent="center"
        className="max-w-[1200px] mx-auto px-2"
      >
        {stats.map((stat, index) => (
          <Grid
            item
            size={{ xs: 6, md: 3 }}
            key={index}
            className="text-center"
          >
            <Box
              className="p-3 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] rounded-md transition-transform duration-300 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.2)]"
            >
              <Typography
                variant="h3"
                component="div"
                class="font-bold text-white mb-1 md:text-[3rem]"
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body1"
                className="text-white uppercase tracking-[1px] text-[0.875rem] md:text-[1rem] lett"
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default YogaDetails;
