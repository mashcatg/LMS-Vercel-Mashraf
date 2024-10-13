import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and more.",
    totalStudents: 120,
    totalBatches: 10,
    totalClasses: 30,
    totalExams: 5,
  },
  {
    id: 2,
    name: "Data Science",
    description: "Data analysis and machine learning essentials.",
    totalStudents: 150,
    totalBatches: 8,
    totalClasses: 25,
    totalExams: 4,
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "Master design tools and create stunning visuals.",
    totalStudents: 80,
    totalBatches: 5,
    totalClasses: 15,
    totalExams: 3,
  },
];

export default function CourseCarousel() {
  const [currentCourse, setCurrentCourse] = useState(0);

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCourse();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:w-1/3 mx-auto p-4 rounded-lg bg-gradient-to-r from-primary to-secondary">
      {/* Course Slide */}
      <div className="z-5 absolute inset-0 bg-opacity-90 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <div className="absolute inset-0 bg-black opacity-10 z-[2] rounded-lg"></div>

      <div className="relative overflow-hidden h-64 z-10">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
              currentCourse === index
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="absolute inset-0 flex flex-col justify-center p-4 text-white">
              <h3 className="text-2xl font-bold">{course.name}</h3>
              <p className="text-sm mt-2">{course.description}</p>

              {/* Styled Course Stats */}
              <div className="flex mt-4 space-x-4">
                <div className="bg-white rounded-lg w-full p-3 flex flex-col items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {course.totalBatches}
                  </span>
                  <span className="text-xs text-gray-400">Batches</span>
                </div>
                <div className="bg-white rounded-lg w-full p-3 flex flex-col items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {course.totalStudents}
                  </span>
                  <span className="text-xs text-gray-400">Students</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        <button
          className="bg-gray-700 bg-opacity-50 p-2 rounded-full text-white"
          onClick={prevCourse}
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-gray-700 bg-opacity-50 p-2 rounded-full text-white"
          onClick={nextCourse}
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
