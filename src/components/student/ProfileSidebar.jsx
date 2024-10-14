import React from "react";
import { Button } from "../ui/button";
import { Edit, Lock } from "lucide-react"; // Importing icons from lucide-react
import Link from "next/link";

export default function ProfileSidebar({ onClose, isClosing, user = {} }) {
  return (
    <aside
      className={`fixed z-50 right-0 top-0 w-64 h-full bg-white shadow-lg transform ${
        isClosing ? "animate-slide-out" : "animate-slide-in"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold">Profile</h2>

        {/* User Info Section */}
        <div className="my-4 text-center">
          <img
            src={user?.profilePic || "/default-avatar.png"} // Safely accessing user.profilePic
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200"
          />
          <h3 className="mt-2 font-semibold text-lg">
            {user?.name || "User Name"}
          </h3>

          {/* Designation Badge */}
          <span className="inline-block mt-1 px-4 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            {user?.designation || "Designation"}
          </span>
        </div>

        {/* Edit Profile Button */}

        <Link href="/student/edit-profile">
          <Button
            className="w-full mt-4 flex items-center justify-center"
            variant="secondary"
          >
            <Edit className="mr-2 w-4 h-4" />
            Edit Profile
          </Button>
        </Link>

        {/* Change Password Button */}

        <Link href="/student/change-password">
          <Button
            className="w-full mt-4 flex items-center justify-center"
            variant="default"
          >
            <Lock className="mr-2 w-4 h-4" />
            Change Password
          </Button>
        </Link>
      </div>
    </aside>
  );
}
