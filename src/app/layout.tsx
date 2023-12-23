import Providers from "@/components/layout/providers/Providers";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "300", "500", "900", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Created as Pet Project by Danya Oliinyk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, "h-screen relative")}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
