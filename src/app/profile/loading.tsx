"use client";
import React from "react";
import { FaSpinner } from "react-icons/fa"; // Importing the spinner icon

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-950">
      {/* Loading Spinner */}
      <FaSpinner className="animate-spin text-white text-5xl mb-4" />
      <h1 className="text-3xl font-bold text-white">Loading...</h1>
    </div>
  );
};

export default Home;
