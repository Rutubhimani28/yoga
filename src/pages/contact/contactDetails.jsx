import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { LocationOn, Phone, Send, Language } from "@mui/icons-material";
const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <LocationOn className="text-white" />,
      title: "Address",
      content: "198 West 21th Street,\nSuite 721 New York NY 10016",
    },
    {
      icon: <Phone className="text-white" />,
      title: "Phone",
      content: "+ 1235 2355 98",
      isGreen: true,
    },
    {
      icon: <Send className="text-white" />,
      title: "Email",
      content: "info@yoursite.com",
      isGreen: true,
    },
    {
      icon: <Language className="text-white" />,
      title: "Website",
      content: "yoursite.com",
      isGreen: true,
    },
  ];
  return (
    <Box className="bg-gray-50 py-12 mt-5">
      <Container maxWidth="lg">
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center ">
          {contactInfo.map((item, index) => (
            <Box
              key={index}
              className="flex flex-col items-center !text-gray-700"
            >
              <Box className="bg-gray-700 hover:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-200 ease-in-out transform hover:scale-105">
                {React.cloneElement(item.icon, { sx: { color: "white" } })}
              </Box>

              <Typography variant="subtitle1" className="font-semibold">
                {item.title}:
              </Typography>
              <Typography
                variant="body2"
                className={`mt-1 whitespace-pre-line text-gray-500`}
              >
                {item.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactDetails;
