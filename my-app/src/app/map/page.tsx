import KakaoMap from "@/app/map/_components/KakaoMap";
import type { Metadata } from "next";

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


const Map = () => {
  
  return (
    <div className="flex justify-center items-center w-full h-full">
      <KakaoMap />
    </div>
  );
};

export default Map;
