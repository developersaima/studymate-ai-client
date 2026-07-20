import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/providers/Providers";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  title: "StudyMate AI",
  description: "AI Powered Study Planner for Students",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        <Providers>

          <Navbar />

          {children}

          <Footer />

        </Providers>

      </body>

    </html>

  );
}