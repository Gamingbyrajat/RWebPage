"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full bg-gray-950  text-white font-bold text-3xl ">
      <h1>Hello Who are you !</h1>
      <Link href="/games">
        <u>Games</u>
      </Link>
    </div>
  );
}
