import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raditya Firman Syaputra",
  description: "Personal website of Raditya Firman Syaputra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
