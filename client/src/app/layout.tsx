import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Appointnext",
  description: "Home Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-screen">{children}</div>
      </body>
    </html>
  );
}
