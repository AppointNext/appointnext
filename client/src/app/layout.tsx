import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Signika } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const signika = Signika({
  subsets: ["latin"],
  weight: ["400"],
});

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
      <body className={signika.className}>
        <div className="flex flex-col h-screen w-screen">{children}</div>
      </body>
    </html>
  );
}
