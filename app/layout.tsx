import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./globals.css";
import { CustomProvider } from "rsuite";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn React Nextjs 1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
