import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thenukan Velvelicham — Portfolio",
  description: "Developer portfolio showcasing projects, skills, and contact info.",
  openGraph: {
    title: "Thenukan Velvelicham — Portfolio",
    description: "Developer portfolio showcasing projects, skills, and contact info.",
    url: "https://thenukan-portfolio.vercel.app",
    siteName: "Thenukan Velvelicham",
    images: [
      {
        url: "/AboutPortrait.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
