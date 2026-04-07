import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WinStore - Shop Electronics, Fashion & More",
  description:
    "Your one-stop e-commerce destination for electronics, fashion, appliances and more. Best deals and new arrivals updated daily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
