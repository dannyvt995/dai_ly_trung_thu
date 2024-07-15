import type { Metadata } from "next";
import "./globals.css";
import "./lenis.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};
import { CounterStoreProvider } from '@/providers/counter-store-provider'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CounterStoreProvider>
          <>
            <Navbar />
            {children}
          </>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
