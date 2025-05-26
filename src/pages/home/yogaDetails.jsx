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
    <section className="relative overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <motion.div
        className="yoga-Details-img absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-[-1] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-[rgba(0,0,0,0.4)] "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] px-4 w-full z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            <h3 className="text-white font-bold text-2xl md:text-4xl mb-1">
              {stat.value}
            </h3>
            <p className="text-white uppercase tracking-wide text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default YogaDetails;
