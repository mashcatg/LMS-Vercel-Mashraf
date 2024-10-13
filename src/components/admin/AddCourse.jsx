import React, { useState } from "react";
import { Plus, X } from "lucide-react"; // Icon for closing the sidebar
import ImageUploader from "../ui/ImageUploader";
import TextEditor from "../ui/texteditor";
import Select from "react-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

// Function to generate options for the next 48 months
const generateMonthOptions = () => {
  const options = [];
  const currentDate = new Date();

  for (let i = 0; i < 48; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + i
    );
    const monthLabel = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    options.push({ value: monthLabel, label: monthLabel });
  }

  return options;
};

const AddCourse = () => {
  const monthOptions = generateMonthOptions();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none", // Remove default border
      boxShadow: state.isFocused ? "0 0 0 2px #3b82f6" : "none", // Add a focus ring (optional)
      padding: "2px", // Adjust padding
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "4px", // Adjust dropdown indicator padding
    }),
    clearIndicator: (provided) => ({
      ...provided,
      padding: "4px", // Adjust clear indicator padding
    }),
  };
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
            Add Course
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
          <h2 className="text-lg font-semibold mb-2">Add New Course</h2>
          <p className="mb-10 text-muted-foreground">
            Add new course with all informations.
          </p>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Course Name
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Course Name"
            />
          </div>
          <div class="relative w-full  my-4">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Course Banner
            </label>
            <ImageUploader />
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Description
            </label>
            <TextEditor />
          </div>
          <div className="relative w-full  my-6">
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Fee Type
            </label>
            <select className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent">
              <option value="" disabled selected>
                Select Course Fee Type
              </option>
              <option value="installment">Installment</option>
              <option value="monthly">Monthly</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <div className="relative w-full  my-6">
            <label className="absolute z-5 -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Select Months
            </label>

            <Select
              options={monthOptions}
              isMulti
              placeholder="Applicable Months"
              className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              styles={customStyles}
              isSearchable
              isClearable
            />
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Course Fee
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Course Fee"
            />
          </div>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Discounted Fee
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter fee after discount if applicable"
            />
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="accepting-admission"
              className="text-primary border-primary focus:ring-primary focus:border-primary"
            />
            <label
              htmlFor="accepting-admission"
              className="text-sm text-gray-700 select-none"
            >
              Currently accepting Admission?
            </label>
          </div>
          <Button className="mt-4 w-full">Submit</Button>
        </div>
      </nav>
    </div>
  );
};

export default AddCourse;
