// "use client";
import React from "react";

const Home: React.FC = async () => {
  // const [test, setTest] = useState("");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  // setTimeout(() => {
  //   setTest("R-GAMES");
  //   return null;
  // }, 10);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-950">
      <h1 className="text-3xl font-bold text-white">Welcome to </h1>
      <p className="text-lg text-gray-700">Explore Games and Play.</p>
    </div>
  );
};

export default Home;
