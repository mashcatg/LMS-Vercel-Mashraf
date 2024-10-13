"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Component,
  EllipsisVertical,
  File,
  FileText,
  Home,
  ListFilter,
  Map,
  MoreHorizontal,
  PlusCircle,
  School,
  User,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddCourse from "@/components/admin/AddCourse";
import AddBatch from "@/components/admin/AddBatch";
import AddBranch from "@/components/admin/AddBranch";
export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

function ExamResults() {
  const examData = [
    {
      id: "1",
      examName: "Mathematics",
      totalMarks: "100",
      highestMarks: "95",
      yourMarks: "88",
      position: "5",
      date: "12/3/2024",
    },
    {
      id: "2",
      examName: "Physics",
      totalMarks: "100",
      highestMarks: "92",
      yourMarks: "85",
      position: "8",
      date: "12/3/2024",
    },
    {
      id: "3",
      examName: "Chemistry",
      totalMarks: "100",
      highestMarks: "94",
      yourMarks: "90",
      position: "3",
      date: "12/3/2024",
    },
    // Add more exam results here as needed...
  ];

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {examData.map((exam) => (
        <Card key={exam.id} className="border rounded-lg">
          {/* Exam Header */}
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Exam Details</span>
                <span className="text-sm text-muted-foreground">
                  Date: {exam.date}
                </span>
              </div>
            </CardTitle>
          </CardHeader>

          {/* Card Content */}
          <CardContent>
            {/* 2x2 Grid for Total Marks, Highest Marks, Your Marks, and Position */}
            <div className="grid grid-cols-2">
              {/* Total Marks */}
              <div className="flex flex-col items-center justify-center border-b-2 pb-2">
                <span className="text-4xl font-bold">{exam.totalMarks}</span>
                <span className="text-sm text-muted-foreground">
                  Total Marks
                </span>
              </div>

              {/* Highest Marks */}
              <div className="flex flex-col items-center justify-center border-b-2 pb-2">
                <span className="text-4xl font-bold">{exam.highestMarks}</span>
                <span className="text-sm text-muted-foreground">
                  Highest Marks
                </span>
              </div>

              {/* Your Marks */}
              <div className="flex flex-col items-center justify-center border-r-2 pt-2">
                <span className="text-4xl font-bold">{exam.yourMarks}</span>
                <span className="text-sm text-muted-foreground">
                  Your Marks
                </span>
              </div>

              {/* Position */}
              <div className="flex flex-col items-center justify-center pt-2">
                <span className="text-4xl font-bold">{exam.position}</span>
                <span className="text-sm text-muted-foreground">Position</span>
              </div>
            </div>

            {/* Full-width View Leaderboard Button */}
            <div className="flex justify-center mt-4">
              <Button variant="secondary" className="w-full">
                View Leaderboard
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}

export default function Page() {
  return (
    <main>
      <Tabs defaultValue="exam-results">
        <TabsList className="mb-2">
          <TabsTrigger value="exam-results">Exam Results</TabsTrigger>
          <TabsTrigger value="combined-results" disabled>
            Combined Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="exam-results">
          <ExamResults />
        </TabsContent>
      </Tabs>
    </main>
  );
}
