import { Button } from "../ui/Button";
import { School, BookPlus, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "Web Development",
    banner:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Data Science",
    banner:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Graphic Design",
    banner:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?fit=crop&w=800&q=60",
  },
];

export default function EnrolledCourses() {
  return (
    <div className="w-full py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Your Courses</h2>
          <p className="text-gray-600">
            Explore your courses and use course materials
          </p>
        </div>
        <Button variant="ghost">
          View All Courses <ChevronRight className="ml-2" />
        </Button>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <div className="relative">
              {/* Course Banner */}
              <img
                src={course.banner}
                alt={`${course.name} banner`}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">
                {course.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {/* Open Portal Button */}

              <Link href="/student/course">
                <Button variant="secondary" size="sm" className="w-full">
                  Open Portal
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
