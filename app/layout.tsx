import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Orion AI",
  description: "AI with stellar intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link rel="icon" href="/favicon.webp" />
        </head>
        <body className="bg-[#FAF5FF]">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
