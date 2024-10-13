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
import AddPayment from "@/components/admin/AddPayment";
import AddExpense from "@/components/admin/AddExpense";
import { ExpensePieChart } from "@/components/admin/ExpensePieChart";
export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

function Payments() {
  const paymentData = [
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Online",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Online",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Online",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Offline",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Online",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Online",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      index: "1231",
      name: "John Doe",
      method: "Online",
      amount: 1200,
      details: "",
      time: "4:30PM 5/10/2024",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;
  const totalPages = Math.ceil(paymentData.length / itemsPerPage);

  // Function to handle changing the page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter students based on the search term
  const filteredPayments = paymentData.filter((payment) =>
    payment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the products for the current page
  const currentPayments = filteredPayments.slice(
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
            <CardTitle>Payments</CardTitle>
            <CardDescription>
              Make payments seamlessly in clicks and print invoice.
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
                <TableHead className="p-4">ID</TableHead>
                <TableHead>Index</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentPayments.map((payment, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  <TableCell className="p-4 font-medium text-gray-800">
                    {payment.id}
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {payment.index}
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {payment.name}
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {payment.method}
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">{payment.amount} BDT</Badge>
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {payment.time}
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
              {Math.min(currentPage * itemsPerPage, paymentData.length)}
            </strong>{" "}
            of <strong>{paymentData.length}</strong> rows
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
      <AddPayment />
    </main>
  );
}

function Expense() {
  const expenseData = [
    {
      id: "1",
      sector: "Room Fee",
      amount: 13000,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      sector: "Room Fee",
      amount: 13000,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      sector: "Room Fee",
      amount: 13000,
      details: "",
      time: "4:30PM 5/10/2024",
    },
    {
      id: "1",
      sector: "Room Fee",
      amount: 13000,
      details: "",
      time: "4:30PM 5/10/2024",
    },
  ];

  const expenseSectors = [
    { id: "1", sectorName: "Room Fee", monthlyExpense: 13000 },
    { id: "2", sectorName: "Printing", monthlyExpense: 2000 },
    { id: "3", sectorName: "Utilities", monthlyExpense: 5000 },
  ];

  const [newSector, setNewSector] = useState("");
  const [newExpense, setNewExpense] = useState("");
  const [sectors, setSectors] = useState(expenseSectors);

  const handleAddSector = () => {
    if (newSector.trim() !== "" && newExpense.trim() !== "") {
      const newEntry = {
        id: Date.now().toString(),
        sectorName: newSector,
        monthlyExpense: parseFloat(newExpense),
      };
      setSectors([...sectors, newEntry]);
      setNewSector("");
      setNewExpense("");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;
  const totalPages = Math.ceil(expenseData.length / itemsPerPage);

  // Function to handle changing the page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter enrollments based on the search term
  const filteredExpense = expenseData.filter((expense) =>
    expense.sector.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the enrollments for the current page
  const currentExpense = filteredExpense.slice(
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
            <CardTitle>Expenses</CardTitle>
            <CardDescription>
              Manage expenses with sectors seamlessly.
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
                <DropdownMenuItem onClick={() => handleExport("PDF")}>
                  PDF
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
                <TableHead>Sector</TableHead>
                <TableHead className="p-4">Amount</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentExpense.map((expense, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  <TableCell className="p-4 font-medium text-gray-800">
                    {expense.sector}
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    <Badge variant="default">{expense.amount}</Badge>
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {expense.details}
                  </TableCell>
                  <TableCell className="p-4 font-medium text-gray-800">
                    {expense.time}
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
              {Math.min(currentPage * itemsPerPage, expenseData.length)}
            </strong>{" "}
            of <strong>{expenseData.length}</strong> rows
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
      <div className="flex flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-6">
        <Card className="w-full md:w-[66%]">
          <CardHeader>
            <CardTitle>Expense Sectors</CardTitle>
            <CardDescription>
              Manage your monthly expense sectors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table className="w-full mb-6 border-collapse">
              <TableHeader>
                <TableRow>
                  <TableHead>Sector Name</TableHead>
                  <TableHead className="text-right">
                    Monthly Expense (BDT)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sectors.map((sector) => (
                  <TableRow key={sector.id}>
                    <TableCell>{sector.sectorName}</TableCell>
                    <TableCell className="text-right">
                      {sector.monthlyExpense.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex flex-col sm:flex-row sm:space-x-4 items-start">
              <div class="relative w-full">
                <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
                  Sector Name
                </label>
                <input
                  type="text"
                  class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                  placeholder="Enter Sector Name"
                />
              </div>
              <Button onClick={handleAddSector}>Add Sector</Button>
            </div>
          </CardContent>
        </Card>
        <ExpensePieChart />
      </div>
      <AddExpense />
    </main>
  );
}

export default function Page() {
  return (
    <main>
      <Tabs defaultValue="payments">
        <TabsList>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        <TabsContent value="payments">
          <Payments />
        </TabsContent>

        <TabsContent value="expenses">
          <Expense />
        </TabsContent>
      </Tabs>
    </main>
  );
}
