// "use client";
// import { useState } from "react";
// import { getCldImageUrl } from "next-cloudinary";
// import Image from "next/image";
// import AudioPlayer from "../../../_components/AudioPlayer";
// import { useRouter } from "next/navigation";
// import TranslateText from "../../../_components/page/api/translate3";

// export default function Page1() {
//   const [showDropdown, setShowDropdown] = useState(false);
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

//   const handleLanguageSelection = (language, isEnglishFlag) => {
//     setHandleLanguageChange(language);
//     setIsEnglish(isEnglishFlag);
//     setShowDropdown(false);
//   };

//   const openModal = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   return (
//     <>
//       {/* Language Switcher Icon */}
//       <div className="absolute top-5 right-5">
//         <div className="flex items-end justify-end pr-5 py-10">
//           <Image
//             src="/images/icons/lang.png"
//             alt="Language Icon"
//             width={56}
//             height={56}
//             quality={100}
//             priority={true}
//             className="w-14 h-14 animate-pulse cursor-pointer"
//             onClick={openModal}
//           />

//           {showDropdown && (
//             <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border rounded-md bg-white shadow-lg z-10">
//               {/* Header with 'Choose your language' and close icon */}
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold">Select Your Language</h2>
//                 {/* Close button */}
//                 <button
//                   onClick={() => setShowDropdown(false)}
//                   className="text-black hover:text-red-700 font-bold text-xl"
//                 >
//                   ×
//                 </button>
//               </div>

//               {/* Language options */}
//               <div className="grid grid-cols-4 gap-4">
//                 <button
//                   onClick={() => handleLanguageSelection("en", true)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   English
//                 </button>
//                 <button
//                   onClick={() => handleLanguageSelection("te", false)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   Telugu
//                 </button>
//                 <button
//                   onClick={() => handleLanguageSelection("ta", false)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   Tamil
//                 </button>
//                 <button
//                   onClick={() => handleLanguageSelection("hi", false)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   Hindi
//                 </button>
//                 <button
//                   onClick={() => handleLanguageSelection("mr", false)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   Marathi
//                 </button>
//                 <button
//                   onClick={() => handleLanguageSelection("gu", false)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   Gujarati
//                 </button>
//                 <button
//                   onClick={() => handleLanguageSelection("ml", false)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   Malayalam
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* {showDropdown && (
//   <div
//     className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 border rounded-md bg-white shadow-lg z-10 flex space-x-4"
//   >
//     <button
//       onClick={() => handleLanguageSelection("en", true)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       English
//     </button>
//     <button
//       onClick={() => handleLanguageSelection("te", false)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       Telugu
//     </button>
//     <button
//       onClick={() => handleLanguageSelection("ta", false)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       Tamil
//     </button>
//     <button
//       onClick={() => handleLanguageSelection("hi", false)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       Hindi
//     </button>
//     <button
//       onClick={() => handleLanguageSelection("mr", false)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       Marathi
//     </button>
//     <button
//       onClick={() => handleLanguageSelection("gu", false)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       Gujrati
//     </button>
//     <button
//       onClick={() => handleLanguageSelection("ml", false)}
//       className="p-2 text-center bg-[#e25a71] text-white  hover:bg-[#c4122f] transition rounded-md"
//     >
//       Malayalam
//     </button>
//   </div>
// )} */}
//         </div>
//       </div>

//       <div className="w-full min-h-screen bg-cover select-none">
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-0">
//             {/* Text Section */}
//             <div className="cursor-pointer">
//               <div className="  bg-white text-slate-700 shadow-md relative">
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
    src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/02");
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
                          Ten-year-old Veer is a very intelligent and curious
                          boy. He and his Dadaji are great friends. They sleep
                          in the same room. At bedtime, before falling asleep.
                        </p>
                        <p className="py-4">
                          Dadaji makes up interesting stories on any topic that
                          he feels little Veer should be aware of.
                        </p>
                        <p className="py-2">
                          Veer loves to hear these stories. Veer&apos;s school
                          was soon to hold a workshop on Space.
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
