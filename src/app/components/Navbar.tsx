"use client";
import React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import NavLink from "./NavLink";
import { useJump } from "../context/JumpContext";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { triggerJump } = useJump();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-900">
          <h1 className="text-xl font-bold">R-Web-Page</h1>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <NavLink href="/" onClick={triggerJump}>
            Home
          </NavLink>
          <NavLink href="/games" onClick={triggerJump}>
            Games
          </NavLink>
          <NavLink href="/uploadGame" onClick={triggerJump}>
            Upload Game
          </NavLink>
          <NavLink href="/profile" onClick={triggerJump}>
            Profile
          </NavLink>
          <button
            onClick={toggleTheme}
            className="mt-4 bg-gray-700 p-2 rounded flex items-center justify-center"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Hamburger Menu Button */}
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-700 text-white p-2 rounded"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Navbar;
