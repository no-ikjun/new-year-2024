import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import backgroundImg from "../../public/images/background.webp";
import Head from "next/head";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "덕담 주머니 - 갑진년 새해 덕담 프로젝트",
  description: "갑진년 새해는 모두 함께 덕담을 나누며 힘차게 출발합시다!",
  keywords:
    "갑진년, 새해 덕담, 행복한 새해, 덕담 나눔, 새해 축하, 덕담 주머니, 새해 소망, 온라인 커뮤니티, 기부 프로젝트, 2024년 새해, 새해 인사",
  openGraph: {
    title: "덕담 주머니 - 갑진년 새해 덕담 프로젝트",
    description: "갑진년 새해는 따뜻한 덕담과 함께 시작하세요",
    images: ["blob:https://vercel.com/cad787c2-bdd1-4f59-af3a-63273c25f244"],
  },
};

const myFont = localFont({
  src: [
    {
      path: "./fonts/NanumMyeongjo.ttf",
      weight: "400",
    },
    {
      path: "./fonts/NanumMyeongjoBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/NanumMyeongjoExtraBold.ttf",
      weight: "900",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className={myFont.className}>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2222926756194557"
        crossOrigin="anonymous"
        async
      ></Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2222926756194557"
        crossOrigin="anonymous"
      ></Script>
      <body>
        <Image
          className={styles.background_img}
          src={backgroundImg}
          alt="img"
          fill
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
