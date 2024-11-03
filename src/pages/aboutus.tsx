import Navbar from "@/components/Navbar";
import React from "react";

export default function About() {
  return (
    <div className="w-full h-screen bg-blue-500">
      <Navbar />
      <h1 className="text-white text-center mt-80 text-3xl underline">
        About Page
      </h1>
    </div>
  );
}
