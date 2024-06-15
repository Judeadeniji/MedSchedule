import { Header } from "@/components/global.header";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MedSchedule",
    template: `%s | MedSchedule`,
  },
  description: "Optimized scheduling for medical professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-full ${inter.className} text-gray-800`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
