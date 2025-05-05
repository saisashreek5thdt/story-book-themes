"use client";

import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import CoverPage from "./_components/page/CoverPageText.js";
// import TranslateText from "../app/_components/page/api/translate3.js";
export default function Home() {
  const coverImg1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/coverImages/home/znrri581t1m0yfeg2emd",
  });

  const coverImg2 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/coverImages/home/w4aby96fidb91nra9xwz",
  });

  const router = useRouter();

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/01");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-cover select-none">
        <div className="flex justify-center items-center min-h-screen flex-col">
          <div className="grid p-4">
            {/* Right Image with Click Handler */}
            <div className="rounded-lg cursor-pointer">
              <Image
                src="/images/cover/coverBG2.png"
                className="bg-cover mb-28"
                alt="Cover Image"
                width={600}
                height={1000}
              />
            </div>
          </div>
          <button
            onClick={pageClickHandler}
            className="bg-white rounded-3xl p-4   text-3xl text-pink-800 font-bold uppercase"
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}
