"use client";
import React, { createContext, useContext, useState } from "react";

interface JumpContextType {
  jumpTrigger: boolean;
  triggerJump: () => void;
}

const JumpContext = createContext<JumpContextType | undefined>(undefined);

export const JumpProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jumpTrigger, setJumpTrigger] = useState(false);

  const triggerJump = () => {
    setJumpTrigger(true);
    setTimeout(() => setJumpTrigger(false), 500);
  };

  return (
    <JumpContext.Provider value={{ jumpTrigger, triggerJump }}>
      {children}
    </JumpContext.Provider>
  );
};

export const useJump = () => {
  const context = useContext(JumpContext);
  if (!context) throw new Error("useJump must be used within a JumpProvider");
  return context;
};
