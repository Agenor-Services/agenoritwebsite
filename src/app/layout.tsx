import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ContactModalProvider } from "@/components/ContactModalProvider";
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
  title: "AgenorIT | Intelligent Digital Foundations",
  description: "AgenorIT builds the intelligent digital foundations that allow your company to scale faster, operate smarter, and outpace the competition with AI and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[#0b0f19]`}>
        {/* Dynamic Background Elements */}
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        <div className="grid-overlay"></div>

        <div className="wrapper relative z-10">
          <ContactModalProvider>
            <Navbar />
            <main>
              {children}
            </main>
          </ContactModalProvider>
        </div>
      </body>
    </html>
  );
}
