import "./globals.css";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "New App for Todo List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          {children}
          <SpeedInsights />
        </Theme>
      </body>
    </html>
  );
}
