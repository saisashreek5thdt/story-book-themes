// "use client";
// import { useState } from "react";
// import { getCldImageUrl } from "next-cloudinary";
// import Image from "next/image";
// import AudioPlayer from "../../../_components/AudioPlayer";
// import { useRouter } from "next/navigation";
// import TranslateText from "../../../_components/page/api/translate3";
// // import LanguageSwitcher from "../../../_components/LanguageSwitcher";
// import LanguageSwitcher from "../../../_components/page/LangaugeBox";

// export default function Page1() {
//   const [handleLanguageChange, setHandleLanguageChange] = useState("en");
//   const [isEnglish, setIsEnglish] = useState(true);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const imgURL1 = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
//   });

//   const router = useRouter();

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const pageClickHandler = (e) => {
//     e.preventDefault();
//     router.push("/pages/page/02");
//   };

//   return (
//     <>
//       {/* Language Switcher Component */}
//       <LanguageSwitcher
//         onLanguageChange={(language, isEnglishFlag) => {
//           setHandleLanguageChange(language);
//           setIsEnglish(isEnglishFlag);
//         }}
//       />

//       <div className="w-full min-h-screen bg-cover select-none">
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-0">
//             {/* Text Section */}
//             <div className="cursor-pointer">
//               <div className="bg-white text-slate-700 shadow-md relative">
//                 <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[360px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] sm:p-0 md:p-6 xl:p-6 lg:p-6">
//                   <div className="flex items-center justify-center flex-col gap-3 text-justify font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
//                     {isEnglish ? (
//                       <div
//                         className={`pr-2 ${
//                           isExpanded ? "overflow-auto" : "overflow-hidden"
//                         }`}
//                         style={{
//                           maxHeight: "220px",
//                           transition: "max-height 0.3s ease",
//                         }}
//                       >
//                         <p>
//                           Ten-year-old Veer is a very intelligent and curious
//                           boy. He and his Dadaji are great friends. They sleep
//                           in the same room. At bedtime, before falling asleep.
//                         </p>
//                         <p className="py-4">
//                           Dadaji makes up interesting stories on any topic that
//                           he feels little Veer should be aware of.
//                         </p>
//                         <p className="py-2">
//                           Veer loves to hear these stories. Veer&apos;s school
//                           was soon to hold a workshop on Space.
//                         </p>
//                       </div>
//                     ) : (
//                       <TranslateText
//                         targetlanguage={handleLanguageChange}
//                         className="text-black"
//                       />
//                     )}

//                     <button
//                       onClick={toggleExpand}
//                       className="text-blue-500 hover:text-blue-700 focus:outline-none"
//                     >
//                       {isExpanded ? "Read Less" : "Read More"}
//                     </button>
//                   </div>
//                   {/* AudioPlayer Component */}
//                   <AudioPlayer />
//                 </div>
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="cursor-pointer flex justify-center items-center">
//               <div
//                 className="rounded h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full max-w-[550px] xl:bg-white shadow-lg"
//                 onClick={pageClickHandler}
//               >
//                 <Image
//                   src={imgURL1}
//                   className="bg-white h-full w-full pt-0 xs:h-[100px] xs:w-[100px] sm:h-[380px] md:h-[360px] lg:h-[450px] xl:h-[500px] xl:w-[600px] object-cover"
//                   alt="Cover Image"
//                   width={800}
//                   height={1400}
//                   unoptimized
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// Page1.js
"use client";

import { useEffect, useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
import PortraitLayout from "../../../_components/PortraitLayout";

export default function Page1() {

  const pageAudio = ""

  const [isExpanded, setIsExpanded] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false); // Initialize with default false

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
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

  // Function to handle text expansion
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Function to navigate to the next page
  const pageClickNextHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/02");
  };

  const pageClickPrevHandler = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const audioSrc='https://res.cloudinary.com/dydh2rfnk/video/upload/v1737548658/page1Audio_vgvmcf.mp3'

  return (
    <div>
      {isPortrait ? (
        <PortraitLayout 
          text={"Ten-year-old Veer is a very intelligent and curious boy. He and his Dadaji are great friends. They sleep in the same room. At bedtime, before falling asleep. Dadaji makes up interesting stories on any topic that he feels little Veer should be aware of. Veer loves to hear these stories. Veer&apos;s school was soon to hold a workshop on Space."}
          audio={audioSrc}
        />
      ) : (
        <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center force-landscape">
          {/* Main Content Container */}
          <div className="flex justify-center items-center min-h-[80vh]">
            <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
              <ArrowLeft />
            </button>

            <div className="grid grid-cols-2 p-4">
              {/* Text Section */}
              <div className="cursor-pointer">
                {/* <div className="bgText  text-black"> */}
                <div className="relative w-full h-full">
                  <Image
                    src={"https://res.cloudinary.com/dydh2rfnk/image/upload/v1734600583/NBT-Chandrayaan3/assets/bgImages/yyyvwswl6q8qxvysdvek"}
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                  />
                  <div className="flex flex-col absolute items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                    <div
                      className={`xl:py-12 sm:pr-10 sm:max-h-[270px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                    >
                      <div
                        className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                          }`}
                        style={{
                          maxHeight: "320px",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                        <p>
                          Ten-year-old Veer is a very intelligent and curious boy.
                          He and his Dadaji are great friends. They sleep in the
                          same room. At bedtime, before falling asleep.
                        </p>
                        <p className="py-4">
                          Dadaji makes up interesting stories on any topic that he
                          feels little Veer should be aware of.
                        </p>
                        <p className="py-2">
                          Veer loves to hear these stories. Veer&apos;s school was
                          soon to hold a workshop on Space.
                        </p>
                      </div>
                      <button
                        onClick={toggleExpand}
                        className="text-black hover:text-cyan-700 focus:outline-none mb-10"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>

                    {/* Audio Player Section */}
                    <AudioPlayer audio={audioSrc} />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="cursor-pointer flex justify-center items-center">
                <div
                  className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white"
                >
                  <Image
                    src={imgURL1}
                    className="bg-white h-full w-full object-cover"
                    alt="Cover Image"
                    width={800}
                    height={1400}
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-white rounded-full p-2 text-black"
              onClick={pageClickNextHandler}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
