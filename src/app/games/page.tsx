// "use client";
import React from "react";

const Home: React.FC = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="flex flex-col justify-center h-full bg-gray-950">
      <h1 className="text-3xl font-bold text-white">Welcome to </h1>
      <p className="text-lg text-gray-500">Explore Games and Play.</p>
    </div>
  );
};

export default Home;
