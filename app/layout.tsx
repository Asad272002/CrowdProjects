import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Built This -- Share Your Creations, Discover New Launches ",
  description: "I built this as I learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, inter.variable, "font-sans", outfit.variable)}
    >
      <body className={`${outfit.className}`}>
        <ClerkProvider>
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
        </body>
    </html>
  );
}
