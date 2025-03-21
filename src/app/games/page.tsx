import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-3 h-screen bg-amber-300 text-center text-black font-bold text-3xl items-center justify-center">
      <h1>Hello Who are you !</h1>
      <Link href="/">
        <u>Home</u>
      </Link>
    </div>
  );
}

export default page;
