import React, { useState } from "react";
import { Plus, X } from "lucide-react"; // Icon for closing the sidebar
import ImageUploader from "../ui/ImageUploader";
import TextEditor from "../ui/texteditor";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

const AddStudent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* Floating "Add" Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleSidebar}
          className="group relative flex h-10 w-10 items-center bg-primary text-white rounded-[0.5rem] p-4 shadow-lg transition-all duration-300 ease-in-out hover:w-[150px] overflow-hidden"
        >
          {/* Circular Plus Icon */}
          <div className="absolute left-0 flex justify-center items-center w-10 h-10 bg-primary rounded-[0.5rem]">
            <Plus className="transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Add Course Text (hidden until hover) */}
          <span className="ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Add Student
          </span>
        </button>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`overflow-y-auto fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Add New Student</h2>
          <p className="mb-10 text-muted-foreground">
            Add new student with all informations.
          </p>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Student Name
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Student Name"
            />
          </div>
          <div class="relative w-full  my-4">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Student Image
            </label>
            <ImageUploader />
          </div>
          <div className="relative w-full  my-6">
            {/* Label for Phone Number */}
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Student Number
            </label>

            {/* Flex container for +88 and input field */}
            <div className="flex items-center border rounded-md h-full w-full focus-within:ring-1 focus-within:ring-primary focus-within:border-transparent">
              {/* Country code +88 */}
              <span className="pl-3 pr-0 py-2 text-md text-gray-600 rounded-l-md">
                +88
              </span>

              {/* Input field */}
              <input
                type="text"
                className="text-md h-full w-full px-3 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="01XXX-XXXXXX"
              />
            </div>
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Date of Birth
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Student Birth Date"
            />
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Institution
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Student Institution"
            />
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Father's Name
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Father's Name"
            />
          </div>
          <div className="relative w-full  my-3">
            {/* Label for Phone Number */}
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Father's Number
            </label>

            {/* Flex container for +88 and input field */}
            <div className="flex items-center border rounded-md h-full w-full focus-within:ring-1 focus-within:ring-primary focus-within:border-transparent">
              {/* Country code +88 */}
              <span className="pl-3 pr-0 py-2 text-md text-gray-600 rounded-l-md">
                +88
              </span>

              {/* Input field */}
              <input
                type="text"
                className="text-md h-full w-full px-3 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="01XXX-XXXXXX"
              />
            </div>
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Mother's Name
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Mother's Name"
            />
          </div>
          <div className="relative w-full  my-3">
            {/* Label for Phone Number */}
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Mother's Number
            </label>

            {/* Flex container for +88 and input field */}
            <div className="flex items-center border rounded-md h-full w-full focus-within:ring-1 focus-within:ring-primary focus-within:border-transparent">
              {/* Country code +88 */}
              <span className="pl-3 pr-0 py-2 text-md text-gray-600 rounded-l-md">
                +88
              </span>

              {/* Input field */}
              <input
                type="text"
                className="text-md h-full w-full px-3 py-2 focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="01XXX-XXXXXX"
              />
            </div>
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Home Address
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Student Address"
            />
          </div>
          <div className="relative w-full  my-6">
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Course Name
            </label>
            <select className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent">
              <option value="" disabled selected>
                Select Course
              </option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <div className="relative w-full  my-6">
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Batch Name
            </label>
            <select className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent">
              <option value="" disabled selected>
                Select Batch
              </option>
              <option value="batch1">Batch 1</option>
              <option value="batch2">Batch 2</option>
              <option value="batch3">Batch 3</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Paid Amount
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Paid Amount"
            />
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Discounted Amount
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Discounted Amount"
            />
          </div>
          <Button className="mt-4 w-full">Submit</Button>
        </div>
      </nav>
    </div>
  );
};

export default AddStudent;
