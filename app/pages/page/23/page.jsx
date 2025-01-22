"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
import TranslateText from "../../../_components/page/api/translate3";
// import LanguageSwitcher from "../../../_components/LanguageSwitcher";
import LanguageSwitcher from "../../../_components/page/LangaugeBox";


export default function Page1() {
  const [handleLanguageChange, setHandleLanguageChange] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // const imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/pages/philu0rdlaeruw76llkg",
  // });
  const imgURL1 = "/images/23.jpg";

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/24");
  };

  return (
    <>
      {/* Language Switcher Component */}
      <LanguageSwitcher
        onLanguageChange={(language, isEnglishFlag) => {
          setHandleLanguageChange(language);
          setIsEnglish(isEnglishFlag);
        }}
      />

      <div className="w-full min-h-screen bg-cover select-none">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-0">
            {/* Text Section */}
            <div className="cursor-pointer">
              <div className="bg-white text-slate-700 shadow-md relative">
                <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[360px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] sm:p-0 md:p-6 xl:p-6 lg:p-6">
                  <div className="flex items-center justify-center flex-col gap-3 text-justify font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
                    {isEnglish ? (
                      <div
                        className={`pr-2 ${
                          isExpanded ? "overflow-auto" : "overflow-hidden"
                        }`}
                        style={{
                          maxHeight: "220px",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                         <p>
                      Dadaji - I also loved his speech when he said-
                      "Chandrayaan Maha Abhiyan is a success not only for India
                      but for the entire humanity."  
                    </p>
                    <p className="py-2">
                    It shows the world that
                      India truly believes in Vasudhaiva Kutumbakam-meaning One
                      Earth, One Family, One Future.
                    </p>
                    <p className="py-2">
                    That was the theme of
                    India's G20 Presidency held in New Delhi in September 23.
                    </p>
                      </div>
                    ) : (
                      <TranslateText
                        targetlanguage={handleLanguageChange}
                        className="text-black"
                      />
                    )}

                    <button
                      onClick={toggleExpand}
                      className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                  {/* AudioPlayer Component */}
                  <AudioPlayer />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="cursor-pointer flex justify-center items-center">
              <div
                className="rounded h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full max-w-[550px] xl:bg-white shadow-lg"
                onClick={pageClickHandler}
              >
                <Image
                  src={imgURL1}
                  className="bg-white h-full w-full pt-0 xs:h-[100px] xs:w-[100px] sm:h-[380px] md:h-[360px] lg:h-[450px] xl:h-[500px] xl:w-[600px] object-cover"
                  alt="Cover Image"
                  width={800}
                  height={1400}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
