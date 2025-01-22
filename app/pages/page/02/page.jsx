// "use client";
// import { useState } from "react";
// import { getCldImageUrl } from "next-cloudinary";
// import Image from "next/image";
// import AudioPlayer from "../../../_components/AudioPlayer";
// import { useRouter } from "next/navigation";
// // import page1 from "./_components/page/page1Text"
// import TranslateText from "../../../_components/page/api/translate3";

// export default function Page1() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [handleLanguageChange, setHandleLanguageChange] = useState("en");
//   const [isEnglish, setIsEnglish] = useState(true);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const imgURL1 = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/pages/f8tdav7x0vbfuxxl2mo9",
//   });

//   const gifImgUrl = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
//   });

//   const router = useRouter();

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const pageClickHandler = (e) => {
//     e.preventDefault();
//     router.push("/pages/page/03");
//   };

//   const handleLanguageSelection = (language, isEnglishFlag) => {
//     setHandleLanguageChange(language);
//     setIsEnglish(isEnglishFlag);
//   };

//   return (
//     <>
//       {/* Language Switcher */}
//       <div className="absolute top-5 right-5">
//         <div>
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
//           >
//             Change Language
//           </button>
//           {showDropdown && (
//             <div className="mt-2 p-2 border rounded-md bg-white shadow-lg">
//               <button
//                 onClick={() => handleLanguageSelection("en", true)}
//                 className="block p-2 w-full text-left text-black hover:bg-gray-100"
//               >
//                 English
//               </button>
//               <button
//                 onClick={() => handleLanguageSelection("te", false)}
//                 className="block p-2 w-full text-left text-black hover:bg-gray-100"
//               >
//                 Telugu
//               </button>
//               <button
//                 onClick={() => handleLanguageSelection("ta", false)}
//                 className="block p-2 w-full text-left text-black hover:bg-gray-100"
//               >
//                 Tamil
//               </button>
//               <button
//                 onClick={() => handleLanguageSelection("hi", false)}
//                 className="block p-2 w-full text-left text-black hover:bg-gray-100"
//               >
//                 Hindi
//               </button>
//               <button
//                 onClick={() => handleLanguageSelection("mr", false)}
//                 className="block p-2 w-full text-left text-black hover:bg-gray-100"
//               >
//                 Marathi
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="w-full min-h-screen bg-cover select-none">
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-0">
//             {/* Text Section */}
//             <div className="cursor-pointer">
//               <div className="bg-white text-slate-700 shadow-md">
//                 <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[360px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] sm:p-0 md:p-6 xl:p-6 lg:p-6">
//                   <div
//                     className="flex items-center justify-center flex-col gap-3 text-justify font-medium text-sm sm:text-base lg:text-lg xl:text-xl"
//                   >
//                     <div
//                       className={`pr-2 ${
//                         isExpanded ? "overflow-auto" : "overflow-hidden"
//                       }`}
//                       style={{
//                         maxHeight: "220px",
//                         transition: "max-height 0.3s ease",
//                       }}
//                     >
//                      <p>
//                       He was very interested in learning about India&apos;s
//                       Space Research Programme. The topic constantly played on
//                       his mind.
//                     </p>
//                     <p className="py-4">
//                       One night, after completing his homework, packing his bag
//                       for school, and getting his uniform ready, Veer jumped
//                       into bed and snuggled against Dadaji.
//                     </p>
//                     <p className="py-4">
//                       Veer - Dadaji, tell me a story about space, the moon, and
//                       astronauts.
//                     </p>
//                     <p className="py-2">
//                       Dadaji's eyes twinkle. He had been expecting this question
//                       from Veer for quite some time now. He knew about the
//                       forthcoming workshop in the boy's school and had seen his
//                       excited preparations.
//                     </p>
//                     </div>
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
//                   className=" bg-white h-full w-full pt-0 xs:h-[100px] xs:w-[100px] sm:h-[380px] md:h-[360px] lg:h-[450px] xl:h-[500px] xl:w-[600px] object-cover"
//                   alt="Cover Image"
//                   width={800}
//                   height={1400}
//                   unoptimized
//                 />
//                 {isEnglish ? (
//                   <div> Your English content is hare </div>
//                 ) : (
//                   <TranslateText targetlanguage={handleLanguageChange} />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/f8tdav7x0vbfuxxl2mo9",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/03");
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
                          He was very interested in learning about India&apos;s
                          Space Research Programme. The topic constantly played
                          on his mind.
                        </p>
                        <p className="py-4">
                          One night, after completing his homework, packing his
                          bag for school, and getting his uniform ready, Veer
                          jumped into bed and snuggled against Dadaji.
                        </p>
                        <p className="py-2">
                          Veer - Dadaji, tell me a story about space, the moon,
                          and astronauts.
                        </p>
                        <p className="py-2">
                          Dadaji's eyes twinkle. He had been expecting this
                          question from Veer for quite some time now. He knew
                          about the forthcoming workshop in the boy's school,
                          and had seen his excited preparations.
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
                  <AudioPlayer audioSrc={`https://res.cloudinary.com/dydh2rfnk/video/upload/v1737548767/Page2_gsib1m.mp3`} />
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
