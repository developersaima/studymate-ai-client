import dns from "node:dns"
dns.setServers(["8.8.8.8","8.8.1.1"])
import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/providers/Providers";
import QueryProvider from "@/providers/ReactQueryProvider";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});


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

<html 
lang="en" 
className={cn("font-sans", geist.variable)}
>


<body>

<Providers>

<QueryProvider>

<Navbar />

{children}


<Footer />
<Toaster></Toaster>

</QueryProvider>


</Providers>


</body>


</html>

);

}