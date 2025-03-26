"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { JumpProvider } from "./context/JumpContext";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "Showcasing my projects, resume, and work",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className="antialiased bg-yellow-100">
        <ThemeProvider>
          <JumpProvider>
            <div className="h-screen">
              {/* Sidebar Navigation (Now inside Navbar) */}
              <div className="flex h-14/15 w-full">
                <Navbar
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
                {/* Main Content */}
                <main
                  className={`h-full transition-all duration-300 ${
                    isSidebarOpen ? "ml-64 w-[calc(100%-16rem)]" : "w-full"
                  }`}
                >
                  {children}
                </main>
              </div>
              {/* Footer */}
              <Footer />
            </div>
          </JumpProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
