import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Heart } from "lucide-react";
import { Avatar } from "@mui/material";
import Roger from "../../assets/images/person_1.jpg";
const YogaWhatSays = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "After just three months of regular yoga practice, my chronic back pain has completely disappeared. The instructors at this studio have transformed my life by teaching me proper alignment and breathing techniques.The mindfulness I've gained through yoga has helped me manage stress and anxiety better than any medication. The peaceful environment and skilled teachers make every session a rejuvenating experience.",
      author: "Roger Scott",
      role: "MARKETING MANAGER",
      avatar: "/api/placeholder/60/60",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    // <div className="!bg-gray-50 py-10 px-4">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //       <div className="relative">
    //         <div className="bg-green-500 rounded-2xl p-8 text-white relative overflow-hidden">
    //           <div className="absolute inset-0 opacity-10">
    //             <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
    //             <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
    //           </div>

    //           <div className="relative z-10">
    //             <div className="mb-6">
    //               <p className="text-white text-lg leading-relaxed">
    //                 {testimonials[currentTestimonial].text}
    //               </p>
    //             </div>

    //             <div className="flex items-center space-x-4 mb-8">
    //               <div className="w-12 h-12  bg-opacity-20 rounded-full flex items-center justify-center">
    //                 {/* <Users className="w-6 h-6 text-white" /> */}
    //                 <Avatar src={Roger} />
    //               </div>
    //               <div>
    //                 <h4 className="font-semibold text-white text-lg">
    //                   {testimonials[currentTestimonial].author}
    //                 </h4>
    //                 <p className="text-green-100 text-sm tracking-wider">
    //                   {testimonials[currentTestimonial].role}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <div className="mb-8">
    //           <h2 className="text-4xl font-bold text-gray-800 mb-6">
    //             WHAT THEY ARE SAYING
    //           </h2>
    //           <p className="text-gray-600 leading-relaxed mb-8">
    //             A small river named Duden flows by their place and supplies it
    //             with the necessary regelialia. It is a paradisematic country, in
    //             which roasted parts of sentences fly into your mouth.
    //           </p>
    //         </div>

    //         <div className="space-y-6">
    //           <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    //             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
    //               <Users className="w-6 h-6 text-green-500" />
    //             </div>
    //             <div>
    //               <h3 className="font-semibold text-gray-800 mb-2">
    //                 We're Helping Senior People
    //               </h3>
    //               <p className="text-gray-600 text-sm">
    //                 Behind the word mountains, far from the countries Vokalia
    //                 and Consonantia, there live the blind texts.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    //             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
    //               <Heart className="w-6 h-6 text-green-500" />
    //             </div>
    //             <div>
    //               <h3 className="font-semibold text-gray-800 mb-2">
    //                 Have A Strong Body Life
    //               </h3>
    //               <p className="text-gray-600 text-sm">
    //                 Separated they live in Bookmarksgrove right at the coast of
    //                 the Semantics, a large language ocean.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="!bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Testimonial Card */}
          <div className="relative order-last lg:order-first">
            <div className="bg-gray-700 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 md:w-32 md:h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 md:w-24 md:h-24 border border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 bg-opacity-50 rounded-full flex items-center justify-center overflow-hidden">
                    <Avatar
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base md:text-lg">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm tracking-wider">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-first lg:order-last">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5">
                WHAT OUR YOGA STUDENTS SAY
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our yoga community shares their transformative experiences. From
                beginners to advanced practitioners, each journey is unique but
                equally inspiring.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">
                    Improved Flexibility & Strength
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Regular practice enhances muscle tone, increases
                    flexibility, and builds core strength.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">
                    Stress Relief & Mindfulness
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Yoga techniques help reduce stress and improve mental
                    clarity and focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaWhatSays;
