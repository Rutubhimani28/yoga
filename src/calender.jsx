import React, { useState } from "react";
import dayjs from "dayjs";
import { Card, CardContent, Typography } from "@mui/material";
import classes1 from "./assets/images/classes-1.jpg";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weeks = [1, 2, 3, 4, 5];

// Example schedule data with month info
const schedule = [
    // October 2020
    { day: "Tuesday", week: 1, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Thursday", week: 1, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Friday", week: 2, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Monday", week: 2, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Saturday", week: 2, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Wednesday", week: 3, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Sunday", week: 3, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Thursday", week: 4, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Tuesday", week: 4, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },
    { day: "Saturday", week: 5, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-10" },

    // November 2020
    { day: "Saturday", week: 1, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Friday", week: 1, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Monday", week: 2, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Wednesday", week: 2, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Tuesday", week: 3, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Thursday", week: 3, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Sunday", week: 3, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Friday", week: 4, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Wednesday", week: 4, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
    { day: "Saturday", week: 5, img: classes1, title: "Yoga training", time: "7 am-8 am", month: "2020-11" },
];


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(dayjs("2020-10-01"));

    const handlePrevMonth = () => {
        setCurrentMonth(prev => prev.subtract(1, "month"));
    };

    const handleNextMonth = () => {
        setCurrentMonth(prev => prev.add(1, "month"));
    };

    const renderCellContent = (day, week) => {
        const event = schedule.find(
            item =>
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
                    <Typography variant="body2" className="text-center font-semibold">{event.title}</Typography>
                    <Typography variant="caption" className="text-green-600">{event.time}</Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="overflow-x-auto p-6">
            {/* Month Title */}
            <div className="flex justify-center items-center mb-4 text-2xl font-bold">
                {currentMonth.format("MMMM YYYY")}
            </div>

            <table className="table-auto w-full border-collapse border">
                <thead>
                    <tr>
                        {days.map(day => (
                            <th key={day} className="border !border-gray-300 p-4 text-lg font-semibold text-gray-700">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map(week => (
                        <tr key={week}>
                            {days.map(day => (
                                <td key={day} className="border !border-gray-300 h-32 align-top">
                                    {renderCellContent(day, week)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Footer Navigation */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePrevMonth}
                    className="text-blue-600 text-sm hover:underline"
                >
                    ← {currentMonth.subtract(1, "month").format("MMMM YYYY")}
                </button>
                <button
                    onClick={handleNextMonth}
                    className="text-blue-600 text-sm hover:underline"
                >
                    {currentMonth.add(1, "month").format("MMMM YYYY")} →
                </button>
            </div>
        </div>
    );
};

export default Calendar;
