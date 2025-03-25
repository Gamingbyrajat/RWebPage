"use client";
import React from "react";
import Ball from "./Ball";

const Footer: React.FC = () => {
  return (
    <footer className="relative h-1/10  bg-gray-700 flex justify-center items-center">
      <div className="absolute bottom-0 w-full h-5 bg-gray-800" />
      <Ball />
    </footer>
  );
};

export default Footer;
