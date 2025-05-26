import { useState, useEffect } from "react";
import bg1 from "../../assets/images/bg_1.jpg";
import bg2 from "../../assets/images/bg_2.jpg";
import { Typography, Box } from "@mui/material";

const slides = [
  {
    title: "Welcome to Yogabest",
    description: "Your journey to wellness starts here",
    image: bg1,
  },
  {
    title: "Welcome to Yogabest",
    description: "Your journey to wellness starts here",
    image: bg2,
  },
  {
    title: "Welcome to Yogabest",
    description: "Your journey to wellness starts here",
    image: bg1,
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, length]);

  if (!Array.isArray(slides) || length === 0) return null;

  return (
    <Box
      component="section"
      className="relative w-full overflow-hidden xs:h-[70vh] md:h-[80vh]"

    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center justify-start ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          aria-hidden={index !== current}
        >
          <Box
            component="img"
            src={slide.image}
            alt={slide.title}
            draggable={false}
            className="w-full h-full object-cover select-none pointer-events-none z-[1] absolute top-0 left-0"

          />

          <Box
            className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-10"

          />

          <Box
            className="relative z-10 max-w-[550px] ml-3 md:ml-10 text-white pl-3 sm:pl-6 md:pl-10"
          >
            <Typography
              variant="h3"
              component="h1"
              className="slider-herosection-title font-bold mb-2"
            >
              {slide.title}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="slider-herosection-description mb-4"
            >
              {slide.description}
            </Typography>
          </Box>
        </Box>
      ))}

      <Box
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-30"
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full border-0 cursor-pointer transition-colors duration-300 p-0 ${index === current ? 'bg-[#4a4e43]' : 'bg-[rgba(255,255,255,0.5)]'}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
