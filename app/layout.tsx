import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const mainFont = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "music player",
  description: "Generated by nima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
