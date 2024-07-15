
import type { Metadata } from "next";
import s from "./page.module.css";
import BannerPage from "@/components/BannerPage";
export const metadata: Metadata = {
  title: "Trang chủ - Nhà phân phối bánh trung thu 2024",
  description: "Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt",
};


export default function Home() {
 
  return (
    <main className={s.main}>
      <h1>Home</h1>
      <BannerPage/>
    </main>
  );
}
