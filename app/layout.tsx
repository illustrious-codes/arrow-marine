import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arrow Marine",

  description:
    "Arrow Marine provides reliable marine shipping and vessel agency services in Nigeria, supporting shipowners, charterers and traders with port operations, cargo handling, customs clearance, pilotage, mooring and other shipping services.",

  icons: "/images/arrow.png",

  openGraph: {
    type: "website",

    title: "Arrow Marine | Marine Shipping & Vessel Agency Services in Nigeria",

    description:
      "Arrow Marine provides comprehensive marine shipping and vessel agency services in Nigeria, supporting shipowners, charterers and traders with port formalities, pilotage, mooring, cargo operations, customs clearance and vessel support.",

    url: "https://arrow-marinelimited.vercel.app/",

    siteName: "Arrow Marine",

    images: [
      {
        url: "https://arrow-marinelimited.vercel.app/images/meta.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Arrow Marine | Marine Shipping & Vessel Agency Services in Nigeria",

    description:
      "Reliable marine shipping and vessel agency services in Nigeria, supporting shipowners, charterers and traders with port operations, pilotage, mooring, cargo handling, customs clearance and vessel support.",

    images: ["https://arrow-marinelimited.vercel.app/images/meta.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
