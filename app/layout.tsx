import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Books",
  description: "A digital library of your favorite books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">
        {children}
      </body>
    </html>
  );
}
