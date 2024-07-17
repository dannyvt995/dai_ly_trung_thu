import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/lenis.css";
import "@/styles/config.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};
import { CounterStoreProvider } from '@/providers/counter-store-provider'
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Widget from "@/components/Widget";
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
            <Info />
            <Footer />
            <Widget/>
          </>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
