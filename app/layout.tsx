import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MockProvider } from "@/components/providers/MockProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal Rekrutmen ASN/PPPK",
  description: "Prototype integrated from Stitch AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <MockProvider>
          {children}
        </MockProvider>
      </body>
    </html>
  );
}
