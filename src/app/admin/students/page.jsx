"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  File,
  FileText,
  Home,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import AddStudent from "@/components/admin/AddStudent";
import AddEnrollment from "@/components/admin/AddEnrollment";
export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

function Students() {
  const studentData = [
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
    {
      id: "1",
      name: "John Doe",
      number: "+8801531702054",
      institute: "University of London",
    },
  ];
  const [smsText, setSmsText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;
  const totalPages = Math.ceil(studentData.length / itemsPerPage);

  // Function to handle changing the page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter students based on the search term
  const filteredStudents = studentData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the products for the current page
  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = (format) => {
    // Logic to handle export based on format
    console.log(`Exporting as ${format}`);
  };

  return (
    <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      <Card x-chunk="dashboard-06-chunk-0" className="overflow-x-auto">
        {/* Header Section */}
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <CardTitle>Students</CardTitle>
            <CardDescription>
              Add your students and edit them as needed.
            </CardDescription>
          </div>
          <div className="flex space-x-4">
            <div class="relative w-full ">
              <label
                for="input-box"
                class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600"
              >
                Search
              </label>
              <input
                id="input-box"
                type="text"
                class="border text-md h-full rounded-md w-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Type something..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">
                  <FileText className="mr-2 w-4 h-4" />
                  Export <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleExport("Print")}>
                  Print
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport("CSV")}>
                  CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport("Excel")}>
                  Excel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        {/* Product Table */}
        <CardContent className="overflow-auto">
          <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
              <TableRow className="border-b">
                <TableHead className="p-4">Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead className="text-right">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentStudents.map((student, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  <TableCell className="p-4 font-medium text-gray-800">
                    {student.name}
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {student.number}
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">{student.institute}</Badge>
                  </TableCell>
                  <TableCell className="p-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                        >
                          <span className="sr-only">Open options</span>
                          <EllipsisVertical className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        {/* Pagination */}
        <CardFooter className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            Showing{" "}
            <strong>
              {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, studentData.length)}
            </strong>{" "}
            of <strong>{studentData.length}</strong> rows
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeft />
            </Button>

            {currentPage > 2 && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handlePageChange(1)}
              >
                1
              </Button>
            )}
            {currentPage > 3 && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handlePageChange(1)}
                disabled
              >
                ...
              </Button>
            )}

            {currentPage > 1 && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                {currentPage - 1}
              </Button>
            )}

            <Button variant="default" size="icon">
              {currentPage}
            </Button>

            {currentPage < totalPages && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                {currentPage + 1}
              </Button>
            )}
            {currentPage + 2 < totalPages && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handlePageChange(totalPages)}
              >
                ...
              </Button>
            )}
            {currentPage + 1 < totalPages && (
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </Button>
            )}

            <Button
              variant="secondary"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <AddStudent />
    </main>
  );
}


function Enrollments() {
  const enrollmentData = [
    {
      id: "1",
      index: "202402",
      name: "John Doe",
      number: "8801537926389",
      institute: "University of California",
      course: "Demo Course",
      batch: "Morning",
      due: "1200",
    },
    {
      id: "2",
      index: "202403",
      name: "Mashraf Chowdhury",
      number: "8801537926389",
      institute: "University of California",
      course: "Dami Course",
      batch: "Morning",
      due: "1200",
    },
    // More data...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEnrollments, setSelectedEnrollments] = useState([]);
  const [smsText, setSmsText] = useState(""); // Added smsText state
  const itemsPerPage = 10;
  const totalPages = Math.ceil(enrollmentData.length / itemsPerPage);

  // Handle pagination
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle select/deselect all rows
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const visibleEnrollments = enrollmentData.map((enrollment) => enrollment.id);
      setSelectedEnrollments(visibleEnrollments);
    } else {
      setSelectedEnrollments([]);
    }
  };

  // Handle individual row selection
  const handleSelectEnrollment = (id) => {
    setSelectedEnrollments((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((enrollmentId) => enrollmentId !== id) : [...prevSelected, id]
    );
  };

  // Handle sending SMS
  const handleNotice = async () => {
    console.log("Sending SMS:", smsText);
    console.log("Selected IDs:", selectedEnrollments); 


    try {
      const response = await fetch('http://localhost/lms-admin/notices/create_notice.php', {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        body: new URLSearchParams({
          notice: smsText,
          notice_type: selectedEnrollments,
        }),
      });

      const result = await response.json();
      setSmsText("");
      alert(result.message); 
    } catch (error) {
      console.error('Error sending notice:', error);
    }
  };

  return (
    <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      <Card className="overflow-x-auto">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <CardTitle>Enrollments</CardTitle>
            <CardDescription>Manage course and batch-based enrollments.</CardDescription>
          </div>
          <div className="flex space-x-4">
            <div className="relative w-full">
              <label
                htmlFor="input-box"
                className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600"
              >
                Search
              </label>
              <input
                id="input-box"
                type="text"
                className="border text-md h-full rounded-md w-full px-3 py-1"
                placeholder="Type something..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>

        {/* Enrollment Table */}
        <CardContent className="overflow-auto">
          <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <TableHeader className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
              <TableRow className="border-b">
                <TableHead>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll} 
                    checked={selectedEnrollments.length === enrollmentData.length} 
                  />
                </TableHead>
                <TableHead className="p-4">Index</TableHead>
                <TableHead className="p-4">Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Due</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {enrollmentData.map((enrollment, index) => (
                <TableRow key={index} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedEnrollments.includes(enrollment.id)} 
                      onChange={() => handleSelectEnrollment(enrollment.id)} 
                    />
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">{enrollment.index}</TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">{enrollment.name}</TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">{enrollment.number}</TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">{enrollment.institute}</TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">{enrollment.course}</TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">{enrollment.batch}</TableCell>
                  <TableCell><Badge variant="default">{enrollment.due}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, enrollmentData.length)} of {enrollmentData.length} rows
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="secondary" size="icon" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}><ChevronLeft /></Button>
            <Button variant="default" size="icon">{currentPage}</Button>
            <Button variant="secondary" size="icon" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}><ChevronRight /></Button>
          </div>
        </CardFooter>
      </Card>

      {/* SMS Sending Section */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative w-full">
              <label htmlFor="input-box" className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
                Send Message
              </label>
              <textarea
                id="input-box"
                placeholder="Type your message here..."
                value={smsText} 
                onChange={(e) => setSmsText(e.target.value)} 
                className="border text-md h-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mt-1 block w-full"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-4">
                <Button onClick={handleNotice} className="mt-2" variant="default">Send Notice</Button>
                <Button onClick={handleSendSMS} className="mt-2" variant="outline">Send SMS</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}



export default function Page() {
  return (
    <main>
      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">All Students</TabsTrigger>
          <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Students />
        </TabsContent>

        <TabsContent value="enrollments">
          <Enrollments />
        </TabsContent>
      </Tabs>
    </main>
  );
}