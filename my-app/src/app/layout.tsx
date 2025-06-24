import "@/app/globals.css";
import MainContainer from "@/components/layout/MainContainer";
import TQProvider from "@/components/providers/TQProvider";
import type { Metadata } from "next";
import Script from "next/script";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "MapSnap",
  description:
    "한손으로 보는 내 주변 맛집, 데이트, 일상생활 등 다양한 장소를 한눈에 찾아보세요.",
  openGraph: {
    title: "MapSnap",
    description:
      "한손으로 보는 내 주변 맛집, 데이트, 일상생활 등 다양한 장소를 한눈에 찾아보세요.",
    url: "https://holo-psi.vercel.app/map",
  },
};


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body>
        <TQProvider>
          <MainContainer>{children}</MainContainer>
        </TQProvider>
      </body>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
      />
    </html>
  );
};

export default RootLayout;