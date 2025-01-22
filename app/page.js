"use client";

import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useEffect, useState } from "react";
// import CoverPage from "./_components/page/CoverPageText.js";
import PortraitCover from "../app/_components/PortraitCover.js";
export default function Home() {
  const [isPortrait, setIsPortrait] = useState(false); 
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [handleLanguageChange, sethandlelanguagechange] = useState("en");
  // const [isEnglish, setIsEnglish] = useState(true);

  const coverImg1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/coverImages/home/znrri581t1m0yfeg2emd",
  });

  const coverImg2 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/coverImages/home/w4aby96fidb91nra9xwz",
  });

  const router = useRouter();

  useEffect(() => {
    // Check for window object availability and set initial orientation
    if (typeof window !== "undefined") {
      setIsPortrait(window.innerHeight > window.innerWidth);

      const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/[id]");
  };

  // const handleLanguageSelection = (language, isEnglishFlag) => {
  //   sethandlelanguagechange(language);
  //   setIsEnglish(isEnglishFlag);
  // };

  return (
    <>
      <div>
            {isPortrait ? (
              <PortraitCover/>
            ) : (
      <div className="w-full min-h-screen bg-cover select-none">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 p-4 ">
            {/* Left Image with Text */}
            <div className="rounded-lg ">
              <Image
                src={coverImg2}
                alt="Cover Image"
                width={520}
                height={1200}
                className="bg-cover absolute"
              />
               <div className="relative p-6 flex flex-col gap-4">
                <div className="text-white text-lg text-justify font-medium py-20">
                  <p>
                    Little Veer is eager to know what is so great about the{" "}
                    <br />
                    successful landing of the Chandrayaan 3 on the moon. <br />{" "}
                    His wise Dadaji makes use of this oppurtunity to tell him
                    all.
                  </p>
                  <p className="py-3">
                    Learn from Dadaji about India&apos;s past glory, about ISRO,{" "}
                    <br />
                    about grit and determination of our scientists in the <br />
                    face of odds, and how they succeeded in their moon <br />{" "}
                    mission, above all, about our great Prime Minister <br /> Mr
                    Narendra Modi who stood behind all their efforts <br /> like
                    a rock of Gibralter!
                  </p>
                  <p className="py-3">
                    A touching story of how sheer grit and determination, <br />
                    and never losing hope makes all dreams come true.
                  </p>
                </div>
              </div>

              {/* {isEnglish ? (
                <CoverPage />
              ) : (
                <TranslateText targetlanguage={handleLanguageChange} />
              )} */}
            </div>

            {/* Right Image with Click Handler */}
            <div
              className="rounded-lg cursor-pointer"
              onClick={pageClickHandler}
            >
              <Image
                src={coverImg1}
                alt="Cover Image"
                width={500}
                height={800}
                className="bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
    </>
  );
}