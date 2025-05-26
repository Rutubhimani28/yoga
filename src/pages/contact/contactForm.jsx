import { Box, Typography, TextField, Button, Container } from "@mui/material";
import contactImage from "../../assets/images/classes-1.jpg";
const ContactForm = () => {
  return (
    <Container maxWidth="lg" display="flex" justifyContent="space-between">
      <Box className="flex flex-col lg:flex-row w-full  items-center justify-center bg-white p-4">
        <Box className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 flex justify-center">
          <img
            src={contactImage}
            alt="Meditation"
            className="rounded-lg w-full h-auto object-cover max-h-[600px]"
          />
        </Box>

        <Box className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
          <Typography
            variant="h5"
            className="!mb-2 font-semibold text-gray-900"
          >
            Get In Touch
          </Typography>

          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Box>
              <Typography className="text-sm font-bold text-gray-600 mb-1 uppercase">
                Full Name
              </Typography>
              <TextField variant="standard" placeholder="Name" fullWidth />
            </Box>

            <Box>
              <Typography className="text-sm font-bold text-grey-600 mb-1 uppercase">
                Email Address
              </Typography>
              <TextField variant="standard" placeholder="Email" fullWidth />
            </Box>

            <Box className="md:col-span-2">
              <Typography className="text-sm font-bold text-grey-600 mb-1 uppercase">
                Subject
              </Typography>
              <TextField variant="standard" placeholder="Subject" fullWidth />
            </Box>

            <Box className="md:col-span-2">
              <Typography className="text-sm font-bold text-grey-600 mb-1 uppercase">
                Message
              </Typography>
              <TextField
                variant="standard"
                placeholder="Message"
                fullWidth
                multiline
                rows={4}
              />
            </Box>
          </Box>

          <Box className="mt-6">
            <Button className="!bg-gray-500 hover:!bg-gray-600 !text-white px-6 py-2 rounded shadow">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
