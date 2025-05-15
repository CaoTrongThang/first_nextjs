import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Node",
  description: "Note Everything You Want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //I want my red_pin image interactive, when i click on it, it should open a small model right at it and show my discord link
  return (
    <html lang="en">
      <body>
        {children}
        <img src="/red_pin.png" alt="pin" className="fixed bottom-0 right-0 w-[60px] h-[60px] object-contain mr-5 mb-5" />
      </body>
    </html>
  );
}
