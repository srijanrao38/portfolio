import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Srijan S Rao — Full Stack Developer",
  description:
    "CS student at Sahyadri College. Builds full-stack web apps and AI-powered systems using React, Django, Next.js, and Python.",
  openGraph: {
    title: "Srijan S Rao — Full Stack Developer",
    description:
      "Portfolio of Srijan S Rao, full-stack developer from Mangalore.",
    url: "https://srijanrao.dev",
    type: "website",
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
      className={`${syne.variable} ${instrumentSans.variable} ${geistMono.variable}`}
    >
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  );
}
