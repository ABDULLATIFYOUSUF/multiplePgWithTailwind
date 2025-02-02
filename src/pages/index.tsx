import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <div className="w-full h-screen bg-red-500">
      <Navbar />
      <h1 className="text-white text-center mt-80 text-3xl underline">
        Home Page
      </h1>
    </div>
  );
}

export default Home;
