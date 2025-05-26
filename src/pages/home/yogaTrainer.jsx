import { Box, Typography } from "@mui/material";
import trainer1 from "../../assets/images/trainer-1.jpg";
import trainer2 from "../../assets/images/trainer-2.jpg";
import trainer3 from "../../assets/images/trainer-3.jpg";
import trainer4 from "../../assets/images/trainer-4.jpg";

const trainers = [
  {
    name: "Elizabeth Nelson",
    role: "BROWN / HUAS GOLDEN",
    image: trainer1,
  },
  {
    name: "Scarlett Torres",
    role: "SPIRIT / HUAS GOLDEN",
    image: trainer2,
  },
  {
    name: "Victoria Wright",
    role: "SPIRIT / HUAS GOLDEN",
    image: trainer3,
  },
  {
    name: "Stello Perry",
    role: "SPIRIT / HUAS GOLDEN",
    image: trainer4,
  },
];

const YogaTrainer = () => {
  return (
    <Box className="bg-gray-50 py-10 px-4">
      <Box className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <Typography
          variant="h2"
          className="!text-3xl md:text-3xl font-bold text-gray-800 text-center !mb-4"
        >
          THE BEST TRAINER FOR YOU
        </Typography>

        {/* Trainers Grid */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <Box
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              {/* Image Container */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-gray-300 transition-colors group">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='36' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3E${trainer.name.charAt(
                      0
                    )}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
              <Typography
                variant="h5"
                className="text-lg font-semibold text-gray-800 mb-1"
              >
                {trainer.name}
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-500 uppercase text-sm tracking-wider"
              >
                {trainer.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default YogaTrainer;
