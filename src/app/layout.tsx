import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ticketsPath } from "@/utils/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The road to next",
  description: "Road to next application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 fixed left-0 right-0 top-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
          <div>
            <Link href="/" className="text-lg font-bold">
              Home
            </Link>
          </div>
          <div>
            <Link href={ticketsPath()} className="text-sm underline">
              Tickets
            </Link>
          </div>
        </nav>
        <main className="bg-background/20 flex min-h-screen flex-1 flex-col overflow-y-auto overflow-x-hidden px-8 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
