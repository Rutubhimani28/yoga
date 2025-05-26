import class1 from "../../assets/images/classes-1.jpg";
import class2 from "../../assets/images/classes-2.jpg";
import class3 from "../../assets/images/classes-3.jpg";
import class4 from "../../assets/images/classes-4.jpg";
import class5 from "../../assets/images/classes-5.jpg";
import class6 from "../../assets/images/classes-6.jpg";
import { Clock, Calendar } from "lucide-react";

const YogaClass = () => {
  const yogaClasses = [
    {
      id: 1,
      title: "Private & Group Lessons",
      image: class1,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
      bgColor: "from-green-400 to-green-500",
    },
    {
      id: 2,
      title: "Yoga for Pregnant",
      image: class2,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
      bgColor: "from-green-400 to-green-500",
    },
    {
      id: 3,
      title: "Yoga for Beginners",
      image: class3,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
      bgColor: "from-green-400 to-green-500",
    },
    {
      id: 4,
      title: "Yoga Barre",
      image: class4,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
      bgColor: "from-green-400 to-green-500",
    },
    {
      id: 5,
      title: "Yoga Core",
      image: class5,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
      bgColor: "from-green-400 to-green-500",
    },
    {
      id: 6,
      title: "Yoga Restore",
      image: class6,
      schedule: "MON, TUE, WED",
      time: "8:00 AM - 9:00AM",
      instructor: "JOE DOE",
      bgColor: "from-green-400 to-green-500",
    },
  ];
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Yoga Classes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect yoga class for your journey. From beginners to
            advanced practitioners, we offer a variety of classes to suit your
            needs and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yogaClasses.map((yogaClass) => (
            <div
              key={yogaClass.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden yogaClassCard">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 !-z-10"></div>

                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r  bg-[#7e7d7a] text-white px-3 py-2 rounded-lg shadow-lg z-10`}
                >
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    <span className="text-xs">👤 {yogaClass.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs mt-1">
                    <Calendar className="w-3 h-3 " />
                    <span>{yogaClass.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{yogaClass.time}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-500 transition-colors duration-300">
                  {yogaClass.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-grey" />
                    <span>{yogaClass.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-grey" />
                    <span>{yogaClass.time}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Book This Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaClass;
