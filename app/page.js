"use client";

import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import CoverPage from "./_components/page/CoverPageText.js";
// import TranslateText from "../app/_components/page/api/translate3.js";
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
          {/* <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Change Language
          </button> */}
          {/* Language selection dropdown */}
          {/* {showDropdown && (
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
          )} */}
        </div>
      </div>
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
    </>
  );
}

// "use client";

// import { getCldImageUrl } from "next-cloudinary";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import CoverPage from "./_components/page/CoverPageText.js";
// import TranslateText from "../app/_components/page/api/translate3.js";

// export default function Home() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [handleLanguageChange, sethandlelanguagechange] = useState("en");
//   const [isEnglish, setIsEnglish] = useState(true);

//   const coverImg1 = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/coverImages/home/znrri581t1m0yfeg2emd",
//   });

//   const coverImg2 = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/coverImages/home/w4aby96fidb91nra9xwz",
//   });

//   const router = useRouter();

//   const pageClickHandler = (e) => {
//     e.preventDefault();
//     router.push("/pages/page/01");
//   };

//   const handleLanguageSelection = (language, isEnglishFlag) => {
//     sethandlelanguagechange(language);
//     setIsEnglish(isEnglishFlag);
//   };

//   return (
//     <>
//       {/* Language Switcher */}
//       <div className="absolute top-5 right-5">
//         <div>
//           {/* Button to toggle the dropdown visibility */}
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
//           >
//             Change Language
//           </button>

//           {/* Language selection dropdown */}
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
//           <div className="grid grid-cols-2 p-4">
//             {/* Left Image with Text */}
//             <div className="rounded-lg">
//               <Image
//                 src={coverImg2}
//                 alt="Cover Image"
//                 width={520}
//                 height={1200}
//                 className="bg-cover absolute"
//               />
//               {isEnglish ? (
//                 <CoverPage />
//               ) : (
//                 <TranslateText targetlanguage={handleLanguageChange} />
//               )}
//             </div>

//             {/* Right Image with Click Handler */}
//             <div
//               className="rounded-lg cursor-pointer"
//               onClick={pageClickHandler}
//             >
//               <Image
//                 src={coverImg1}
//                 alt="Cover Image"
//                 width={500}
//                 height={800}
//                 className="bg-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
