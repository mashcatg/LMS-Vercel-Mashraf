"use client"; // Necessary to enable client-side features

import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  School,
  Users,
  Wallet,
  MessageSquareWarning,
  FilePenLine,
  SquareCheck,
  FileText,
  IdCard,
  BookUser,
  CalendarCheck,
  Shapes,
  PanelsTopLeft,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname
import { SideNavbar } from "@/components/ui/sidenavbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [links, setLinks] = useState([
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/admin",
      variant: "menu_items",
    },
    {
      title: "Courses",
      icon: School,
      url: "/admin/courses",
      variant: "menu_items",
    },
    {
      title: "Students",
      icon: Users,
      url: "/admin/students",
      variant: "menu_items",
    },
    {
      title: "Finance",
      icon: Wallet,
      url: "/admin/finance",
      variant: "menu_items",
    },
    {
      title: "Notices",
      icon: MessageSquareWarning,
      url: "/admin/notices",
      variant: "menu_items",
    },
    {
      title: "Exams",
      icon: FilePenLine,
      url: "/admin/exams",
      variant: "menu_items",
    },
    {
      title: "Quizzes",
      icon: SquareCheck,
      url: "/admin/under-development",
      variant: "menu_items",
    },
    {
      title: "Notes",
      icon: FileText,
      url: "/admin/notes",
      variant: "menu_items",
    },
    {
      title: "Student Cards",
      icon: IdCard,
      url: "/admin/cards",
      variant: "menu_items",
    },
    {
      title: "Attendance",
      icon: BookUser,
      url: "/admin/attendance",
      variant: "menu_items",
    },
    {
      title: "Routine",
      icon: CalendarCheck,
      url: "/admin/routine",
      variant: "menu_items",
    },
    {
      title: "Materials",
      icon: Shapes,
      url: "/admin/materials",
      variant: "menu_items",
    },
    {
      title: "Website",
      icon: PanelsTopLeft,
      url: "/admin/customize-website",
      variant: "menu_items",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/admin/settings",
      variant: "menu_items",
    },
  ]);

  // Get the current path using usePathname from next/navigation
  const pathname = usePathname();

  // Update active link whenever the pathname changes
  useEffect(() => {
    setLinks((prevLinks) =>
      prevLinks.map((link) => ({
        ...link,
        variant: link.url === pathname ? "menu_active_item" : "menu_items",
      }))
    );
  }, [pathname]); // Depend on pathname so it updates on route changes

  return (
    <motion.div
      className="fixed flex flex-col border-r min-h-screen bg-white z-50 pt-4"
      initial={{ width: 80 }} // Initial width when collapsed
      animate={{ width: isCollapsed ? 80 : 240 }} // Expand width based on state
      transition={{ duration: 0.3 }} // Animation duration
    >
      {/* Collapse/Expand Button */}
      <div className="absolute right-[-13px] top-[28px] translate-y-[-50%] z-100">
        <Button
          variant="secondary"
          className="rounded-full p-1 w-6 h-6 flex items-center justify-center border bg-white"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Logo */}
      <div
        className={`flex items-center justify-center mb-10 ${
          !isCollapsed ? "p-4 mb-4" : ""
        }`}
      >
        <img
          src={isCollapsed ? "/ennovat-icon.ico" : "/ennovat-logo.png"}
          alt="Ennovat Logo"
          className={isCollapsed ? "w-9 mt-4" : "w-64"}
        />
      </div>

      {/* SideNavbar Component with updated links */}
      <SideNavbar isCollapsed={isCollapsed} links={links} />
    </motion.div>
  );
}
