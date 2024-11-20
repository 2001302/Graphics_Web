import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/navigation/main-nav"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Graphic",
  description: "3D Model Sharing and Exhibition Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
      </body>
    </html>
  )
}
