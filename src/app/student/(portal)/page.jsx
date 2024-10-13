"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  DollarSign,
  Users,
  School,
  Shapes,
  Calendar,
  School2,
  Component,
  BookPlus,
  CreditCard,
} from "lucide-react";
import WelcomeCard from "@/components/student/WelcomeCard";
import CTACard from "@/components/student/CTACard";
import EnrolledCourses from "@/components/student/EnrolledCourses";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
];

export default function Home() {
  return (
    <div className="p-6 space-y-6 z-1">
      {/* Welcome Card */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
        <WelcomeCard />
        <CTACard />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card x-chunk="dashboard-01-chunk-0">
          <div className="flex flex-row justify-between items-center">
            {/* Left side with title and stats */}
            <div className="flex-1">
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">12</div>
              </CardContent>
            </div>

            {/* Right side with the Users icon */}
            <div className="h-full top-0 p-4">
              <School className="h-12 w-12 text-green-600 bg-green-100 p-2 rounded-[0.5rem]" />
            </div>
          </div>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <div className="flex flex-row justify-between items-center">
            {/* Left side with title and stats */}
            <div className="flex-1">
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Running Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">4</div>
              </CardContent>
            </div>

            {/* Right side with the Users icon */}
            <div className="h-full top-0 p-4">
              <BookPlus className="h-12 w-12 text-sky-600 bg-sky-100 p-2 rounded-[0.5rem]" />
            </div>
          </div>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <div className="flex flex-row justify-between items-center">
            {/* Left side with title and stats */}
            <div className="flex-1">
              <CardHeader className="space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Due</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">2300 BDT</div>
              </CardContent>
            </div>

            {/* Right side with the Users icon */}
            <div className="h-full top-0 p-4">
              <CreditCard className="h-12 w-12 text-orange-600 bg-orange-100 p-2 rounded-[0.5rem]" />
            </div>
          </div>
        </Card>
      </div>
      <EnrolledCourses />
    </div>
  );
}
