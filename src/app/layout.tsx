import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SkeletonPages } from "@/components/skeleton/index";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GFP",
  description: "Gestor de finanças pessoais",
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
          <Suspense fallback={<SkeletonPages.Layout/>}>
            <div className="flex flex-col h-full bg-gradient-to-br from-white via-sky-100 to-white">
              {children}
            </div>
            <Toaster/>
          </Suspense>
        </body>
    </html>
  );
}
