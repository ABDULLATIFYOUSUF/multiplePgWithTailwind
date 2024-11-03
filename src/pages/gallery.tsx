import Navbar from "@/components/Navbar";
import React from "react";

const gallery = () => {
  return (
    <div className="galleryDiv w-full h-screen">
      <Navbar />
      <h1 className="text-amber-950 text-center mt-48 text-3xl underline font-extrabold">
        Gallery Page
      </h1>
    </div>
  );
};

export default gallery;
