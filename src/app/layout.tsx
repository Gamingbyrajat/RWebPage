import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { JumpProvider } from "./context/JumpContext";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects, resume, and work",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-yellow-100">
        <ThemeProvider>
          <JumpProvider>
            <div className="h-screen">
              {/* Sidebar Navigation (Now inside Navbar) */}
              <div className="h-9/10 w-full">
                <Navbar />
                {/* Main Content */}
                <main className="flex-1 h-full">{children}</main>
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
