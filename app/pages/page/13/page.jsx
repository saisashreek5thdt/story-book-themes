<<<<<<< HEAD
=======

>>>>>>> 2f0de0e5d9d0807323b830440863270982cc86cb
"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/pages/f8tdav7x0vbfuxxl2mo9",
  // });

  const imgURL1 = "/images/13.jpg";
=======
import TranslateText from "../../../_components/page/api/translate3";
// import LanguageSwitcher from "../../../_components/LanguageSwitcher";
import LanguageSwitcher from "../../../_components/page/LangaugeBox";


export default function Page1() {
  const [handleLanguageChange, setHandleLanguageChange] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const imgURL1 = "/images/page13/13.jpg";
>>>>>>> 2f0de0e5d9d0807323b830440863270982cc86cb

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

<<<<<<< HEAD
  const pageClickHander = (e) => {
=======
  const pageClickHandler = (e) => {
>>>>>>> 2f0de0e5d9d0807323b830440863270982cc86cb
    e.preventDefault();
    router.push("/pages/page/14");
  };

  return (
<<<<<<< HEAD
    <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                <div
                  className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                >
                  <div
                    className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      // maxHeight: "320px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>
                    Dadaji - Ok, tell me the name of the engine of the launch
                    vehicle that made this mission successful.
                  </p>
                  <p className="py-2">
                    Veer knew the answer. He had read it somewhere just
                    recently. He answered promptly.
                  </p>
                  <p className="py-2">
=======
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
                    Dadaji - Ok, tell me the name of the engine of the launch
                    vehicle that made this mission successful.
                  </p>
                  <p className="py-4">
                    Veer knew the answer. He had read it somewhere just
                    recently. He answered promptly.
                  </p>
                  <p className="py-4">
>>>>>>> 2f0de0e5d9d0807323b830440863270982cc86cb
                    Dadaji - Shabash! It is a short form of Vikram Sarabhai, who
                    played an important role in shaping India&apos;s space
                    research and exploration endeavours. His significant
                    contributions have left a profound mark on India&apos;s
                    scientific programmes.
                  </p>
                  <p className="py-2">
                    Veer - I am so proud of our scientists. What a great
                    achievement!
                  </p>
<<<<<<< HEAD
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none mb-10"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* <div className="-mt-2">
                  <Image
                    src={gifImgUrl}
                    alt="Astronaut Gif"
                    width={120}
                    height={120}
                    unoptimized
                  />
                </div> */}
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center ">
            <div className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" onClick={pageClickHander}>
              <Image
                src={imgURL1}
                className="bg-cover bg-white h-full w-full object-cover"
                alt="Cover Image"
                width={800}
                height={1400}
                unoptimized
              />
=======
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
>>>>>>> 2f0de0e5d9d0807323b830440863270982cc86cb
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======
    </>
  );
}
>>>>>>> 2f0de0e5d9d0807323b830440863270982cc86cb
