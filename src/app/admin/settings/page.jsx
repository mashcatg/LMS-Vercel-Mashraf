"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Component,
  EllipsisVertical,
  Facebook,
  File,
  FileText,
  Home,
  Instagram,
  Linkedin,
  ListFilter,
  Map,
  MoreHorizontal,
  PlusCircle,
  School,
  Twitter,
  User,
  Users,
  Youtube,
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

const Informations = () => {
  const [siteName, setSiteName] = useState("");
  const [favicon, setFavicon] = useState(null);
  const [logo, setLogo] = useState(null);
  const [faviconPreview, setFaviconPreview] = useState("");
  const [logoPreview, setLogoPreview] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });

  const handleSocialMediaChange = (platform, value) => {
    setSocialMediaLinks((prevLinks) => ({
      ...prevLinks,
      [platform]: value,
    }));
  };

  const handleFileChange = (setter, setPreview) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("site_name", siteName);
    if (favicon) formData.append("favicon", favicon);
    if (logo) formData.append("logo", logo);
    formData.append("phone_number", phoneNumber);
    formData.append("social_media_links", JSON.stringify(socialMediaLinks));

    // Handle form submission logic here, such as making an API request
    console.log({
      siteName,
      favicon,
      logo,
      phoneNumber,
      socialMediaLinks,
    });
  };

  return (
    <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Site Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Site Name */}
            {/* Input Fields Section */}
            <div className="relative mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Site Name Input */}
              <div className="relative w-full my-6">
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
                  Site Name
                </label>
                <input
                  type="text"
                  className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                  placeholder="Enter Site Name"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="relative w-full my-6">
                {/* Label for Phone Number */}
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-600">
                  Phone Number
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
            </div>

            {/* Image Uploads Section */}
            <div className="relative mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Favicon Upload */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Favicon (Small Logo)
                </label>
                <div className="flex items-center">
                  <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center shadow-inner mr-4">
                    {faviconPreview ? (
                      <img
                        src={faviconPreview}
                        alt="Favicon Preview"
                        className="w-full h-full object-cover shadow-lg"
                      />
                    ) : (
                      <span className="text-gray-400">No Preview</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="favicon-upload" className="cursor-pointer">
                      <input
                        id="favicon-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange(
                          setFavicon,
                          setFaviconPreview
                        )}
                      />
                      <div className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out">
                        Upload Favicon
                      </div>
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      JPEG or PNG, max size 2MB.
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo Upload */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo
                </label>
                <div className="flex items-center">
                  <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center shadow-inner mr-4">
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt="Logo Preview"
                        className="w-full h-full object-cover shadow-lg"
                      />
                    ) : (
                      <span className="text-gray-400">No Preview</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange(setLogo, setLogoPreview)}
                      />
                      <div className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out">
                        Upload Logo
                      </div>
                    </label>
                    <p className="mt-2 text-sm text-gray-500">
                      JPEG or PNG, max size 2MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media Links Section */}
            <div className="relative my-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Facebook Link */}
              <div className="relative w-full flex items-center">
                <Facebook className="w-6 h-6 text-primary mr-3" />
                <input
                  type="url"
                  className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                  placeholder="Facebook URL"
                  onChange={(e) => setFacebookLink(e.target.value)}
                />
              </div>

              {/* Twitter Link */}
              <div className="relative w-full flex items-center">
                <Twitter className="w-6 h-6 text-primary mr-3" />
                <input
                  type="url"
                  className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                  placeholder="Twitter URL"
                  onChange={(e) => setTwitterLink(e.target.value)}
                />
              </div>

              {/* Instagram Link */}
              <div className="relative w-full flex items-center">
                <Instagram className="w-6 h-6 text-primary mr-3" />
                <input
                  type="url"
                  className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                  placeholder="Instagram URL"
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>

              {/* YouTube Link */}
              <div className="relative w-full flex items-center">
                <Youtube className="w-6 h-6 text-primary mr-3" />
                <input
                  type="url"
                  className="border text-md h-full rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                  placeholder="YouTube URL"
                  onChange={(e) => setYouTubeLink(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit">Save Information</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default function Page() {
  return (
    <main>
      <Tabs defaultValue="informations">
        <TabsList className="mb-2">
          <TabsTrigger value="informations">Informations</TabsTrigger>
          <TabsTrigger value="batches">Batches</TabsTrigger>
          <TabsTrigger value="branches">Branches</TabsTrigger>
        </TabsList>

        <TabsContent value="informations">
          <Informations />
        </TabsContent>
      </Tabs>
    </main>
  );
}
