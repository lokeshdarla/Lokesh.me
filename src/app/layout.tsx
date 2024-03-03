import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Lokesh Naga Sai",
  description:"My personal portfolio",
  keywords: [
    "React",
    "Sakkurthi Sashank",
    "Next Js",
    "SRM University AP",
    "SRM Ap",
    "Amaravati",
    "Personal Portfolio",
    "Software engineering Developer intern",
    "Full Stack Developer",
    "Frontend Development",
    "Backend Development",
    "Java",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Sakkurthi Sashank",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
