import { useState } from "react";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import classes1 from "../../assets/images/classes-1.jpg";
import classes2 from "../../assets/images/classes-2.jpg";
import classes3 from "../../assets/images/classes-3.jpg";
import classes4 from "../../assets/images/classes-4.jpg";
import classes5 from "../../assets/images/classes-5.jpg";
import classes6 from "../../assets/images/classes-6.jpg";
import classes7 from "../../assets/images/classes-7.jpg";
import classes8 from "../../assets/images/about-2.jpg";
import classes9 from "../../assets/images/trainer-1.jpg";
import classes10 from "../../assets/images/trainer-2.jpg";
import classes11 from "../../assets/images/trainer-3.jpg";
import classes12 from "../../assets/images/trainer-4.jpg";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Button,
  Box,
} from "@mui/material";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const weeks = [1, 2, 3, 4, 5];
const schedule = [
  {
    day: "Tuesday",
    week: 1,
    img: classes1,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Thursday",
    week: 1,
    img: classes2,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Friday",
    week: 2,
    img: classes3,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Monday",
    week: 2,
    img: classes4,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Saturday",
    week: 2,
    img: classes5,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Wednesday",
    week: 3,
    img: classes6,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Sunday",
    week: 3,
    img: classes7,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Thursday",
    week: 4,
    img: classes8,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Tuesday",
    week: 4,
    img: classes9,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Saturday",
    week: 5,
    img: classes10,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-10",
  },
  {
    day: "Saturday",
    week: 1,
    img: classes11,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Friday",
    week: 1,
    img: classes12,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Monday",
    week: 2,
    img: classes1,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Wednesday",
    week: 2,
    img: classes2,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Tuesday",
    week: 3,
    img: classes3,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Thursday",
    week: 3,
    img: classes4,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Sunday",
    week: 3,
    img: classes5,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Friday",
    week: 4,
    img: classes6,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Wednesday",
    week: 4,
    img: classes7,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
  {
    day: "Saturday",
    week: 5,
    img: classes8,
    title: "Yoga training",
    time: "7 am-8 am",
    month: "2020-11",
  },
];

const CalenderYoga = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs("2020-10-01"));
  const { pathname } = useLocation();
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  const renderCellContent = (day, week) => {
    const event = schedule.find(
      (item) =>
        item.day === day &&
        item.week === week &&
        item.month === currentMonth.format("YYYY-MM")
    );

    if (!event) {
      return (
        <div className="flex justify-center items-center text-gray-400 text-xl">
          ×
        </div>
      );
    }
    return (
      <Card className="shadow !bg-gray-200">
        <CardContent className="flex flex-col items-center">
          <img
            src={event.img}
            alt="session"
            className="w-16 h-16 rounded-full object-cover mb-2"
          />
          <Typography variant="body2" className="text-center font-semibold">
            {event.title}
          </Typography>
          <Typography variant="caption" className="text-grey-600">
            {event.time}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <Box py={4} px={2}>
      <Container maxWidth="lg">
        {pathname !== "/schedule" && (
          <Typography
            variant="h5"
            align="center"
            mb={2}
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            YOGA SCHEDULE
          </Typography>
        )}
        <Box
          sx={{
            overflowX: "auto",
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                {days.map((day) => (
                  <TableCell
                    key={day}
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      border: "1px solid #ccc",
                    }}
                  >
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {weeks.map((week, i) => (
                <TableRow key={i}>
                  {days.map((day) => (
                    <TableCell
                      key={day}
                      sx={{
                        padding: 0,
                        height: 100,
                        border: "1px solid #ccc",
                      }}
                    >
                      {renderCellContent(day, week)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            onClick={handlePrevMonth}
            className=" !bg-gradient-to-r from-gray-600 to-gray-800 !text-white py-3 px-4 rounded-lg font-medium hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-4 py-2 rounded mr-2"
          >
            ← {currentMonth.subtract(1, "month").format("MMMM YYYY")}
          </Button>

          <Button
            onClick={handleNextMonth}
            className="!bg-gradient-to-r from-gray-600 to-gray-800 !text-white py-3 px-4 rounded-lg font-medium hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-4 py-2 rounded"
          >
            {currentMonth.add(1, "month").format("MMMM YYYY")} →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CalenderYoga;
