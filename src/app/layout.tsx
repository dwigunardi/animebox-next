import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainLayout from "@/components/MainLayout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeBox",
  description: "Generated by Next",
  icons: {
    icon: {
      url: "/favicon/favicon.ico",
    },
    shortcut: {
      url: "/favicon/favicon.ico",
    },
    apple: {
      url: "/favicon/favicon.ico",
    },
    other: {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
