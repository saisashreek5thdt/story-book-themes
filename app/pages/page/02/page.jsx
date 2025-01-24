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
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [handleLanguageChange, setHandleLanguageChange] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/f8tdav7x0vbfuxxl2mo9",
  });

  const textBg = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  });

  const audioSrc = 'https://res.cloudinary.com/dydh2rfnk/video/upload/v1737548767/Page2_gsib1m.mp3'

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
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

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickNextHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/03");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center force-landscape">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer  ">
            <div className="bg-white  text-black ">
              <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px]  md:p-6 xl:p-6 lg:p-6 ">
                <div
                  className={` xl:py-12  sm:pr-10 sm:max-h-[270px]  xl:max-h-[460px] sm:pt-6 lg:pt-10  md:pt-10 md:pl-4  flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                >
                  <div
                    className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px]  xl:w-[440px] ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      maxHeight: "330px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>
                      He was very interested in learning about India&apos;s
                      Space Research Programme. The topic constantly played on
                      his mind.
                    </p>
                    <p className="py-4">
                      One night, after completing his homework, packing his bag
                      for school, and getting his uniform ready, Veer jumped
                      into bed and snuggled against Dadaji.
                    </p>
                    <p className="py-2">
                      Veer - Dadaji, tell me a story about space, the moon, and
                      astronauts.
                    </p>
                    <p className="py-2">
                      Dadaji's eyes twinkle. He had been expecting this question
                      from Veer for quite some time now. He knew about the
                      forthcoming workshop in the boy's school, and had seen his
                      excited preparations.
                    </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none mb-10"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                  {/* <div className="-mt-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div> */}
                </div>
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center">
            <div onClick={pageClickHander} className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white">
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
      </div>
    </div>
    </>
  );
}
