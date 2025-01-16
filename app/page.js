
"use client";

import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CoverPage from "./_components/page/CoverPageText.js";
import TranslateText from "../app/_components/page/api/translate3.js";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [handleLanguageChange, sethandlelanguagechange] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);

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

  const handleLanguageSelection = (language, isEnglishFlag) => {
    sethandlelanguagechange(language);
    setIsEnglish(isEnglishFlag);
  };

  return (
    <>
      {/* Language Switcher */}
      <div className="absolute top-5 right-5">
        <div>
          {/* Button to toggle the dropdown visibility */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Change Language
          </button>

          {/* Language selection dropdown */}
          {showDropdown && (
            <div className="mt-2 p-2 border rounded-md bg-white shadow-lg">
              <button
                onClick={() => handleLanguageSelection("en", true)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageSelection("te", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Telugu
              </button>
              <button
                onClick={() => handleLanguageSelection("ta", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Tamil
              </button>
              <button
                onClick={() => handleLanguageSelection("hi", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Hindi
              </button>
              <button
                onClick={() => handleLanguageSelection("mr", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Marathi
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full min-h-screen bg-cover select-none">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 p-4">
            {/* Left Image with Text */}
            <div className="rounded-lg">
              <Image
                src={coverImg2}
                alt="Cover Image"
                width={520}
                height={1200}
                className="bg-cover absolute"
              />
              {isEnglish ? (
                <CoverPage />
              ) : (
                <TranslateText targetlanguage={handleLanguageChange} />
              )}
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
    </>
  );
}
