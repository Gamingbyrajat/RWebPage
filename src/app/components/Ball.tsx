"use client";
import React, { useState, useEffect } from "react";
import { useJump } from "../context/JumpContext"; // Import Jump Context

const Ball: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [jumping, setJumping] = useState(false);
  const { jumpTrigger } = useJump();

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= window.innerWidth - 75) setDirection(-1);
        if (prev <= 10) setDirection(1);
        return prev + 5 * direction;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction]);

  // Effect to handle jumps when `jumpTrigger` updates
  useEffect(() => {
    if (jumpTrigger) {
      setJumping(true);
      setTimeout(() => setJumping(false), 500);
    }
  }, [jumpTrigger]);

  return (
    <div
      className="absolute bottom-5 text-4xl select-none pointer-events-none"
      style={{
        left: `${position}px`,
        transform: jumping ? "translateY(-75px)" : "translateY(0)",
        transition: "transform 0.3s ease-out",
      }}
    >
      😊
    </div>
  );
};

export default Ball;
