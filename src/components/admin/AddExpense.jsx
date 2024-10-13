import React, { useState } from "react";
import { Plus, X } from "lucide-react"; // Icon for closing the sidebar
import ImageUploader from "../ui/ImageUploader";
import TextEditor from "../ui/texteditor";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

const AddExpense = () => {
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
          className="group relative flex h-10 w-10 items-center bg-primary text-white rounded-[0.5rem] p-4 shadow-lg transition-all duration-300 ease-in-out hover:w-[160px] overflow-hidden"
        >
          {/* Circular Plus Icon */}
          <div className="absolute left-0 flex justify-center items-center w-10 h-10 bg-primary rounded-[0.5rem]">
            <Plus className="transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Add Course Text (hidden until hover) */}
          <span className="ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Add Expense
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
          <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
          <p className="mb-10 text-muted-foreground">
            Add expense with sector in clicks.
          </p>
          <div class="relative w-full  my-6">
            <label class="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Expense Amount
            </label>
            <input
              type="text"
              class="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Expense Amount"
            />
          </div>
          <div className="relative w-full  my-6">
            <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
              Expense Sector
            </label>
            <select className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent">
              <option value="" disabled selected>
                Select Sector
              </option>
              <option value="sector1">Sector 1</option>
              <option value="sector2">Sector 2</option>
              <option value="sector3">Sector 3</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <Button className="mt-4 w-full">Submit</Button>
        </div>
      </nav>
    </div>
  );
};

export default AddExpense;
