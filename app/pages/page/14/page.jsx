
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

//   const imgURL1 = "/images/page14/image.jpg";

//   const gifImgUrl = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
//   });

//   const router = useRouter();

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const pageClickHandler = (e) => {
//     e.preventDefault();
//     router.push("/pages/page/15");
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
//                   Dadaji - Veer, first of all you should know that Chandrayaan is
//                   the name of the Indian Lunar Exploration Program.
//                   </p>
//                   <p className="py-4">
//                   India launched Chandrayaan 2 in 2019. The lander was on the right
//               path, but unfortunately due to a small error, communication was
//               lost in the final 300 meters, and it could not make a smooth
//               landing on the surface of the moon. It crashed.
//                   </p>
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
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import AudioPlayer from "../../../_components/AudioPlayer";
import { getCldImageUrl } from "next-cloudinary";
import LanguageSwitcher from "../../../_components/page/LangaugeBox";
import TranslatteText from "../../../_components/page/api/TranslateText"; // Import translation function component



export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageContent, setPageContent] = useState(null); // Store fetched content
  const [targetLanguage, setTargetLanguage] = useState("en"); // Default language is English
  const router = useRouter();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: "13" });
        console.log("Fetched data:", response); // Debugging
        setPageContent(response.page);
      } catch (error) {
        console.error("Error fetching page content:", error); // Debugging
      }
    };

    fetchContent();
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/15"); // Updated to match the desired behavior
  };

const handleLanguageChange = (language, isEnglishFlag) => {
    setTargetLanguage(language); // Update target language when user selects a language
  }; 

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  const imgURL1 = "/images/page14/image.jpg"; // Fallback image

  return (
  <> 
   <LanguageSwitcher
          onLanguageChange={handleLanguageChange} // Update target language when user changes language
        />
  
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center sm:h-[400px] xs:w-[200px] sm:w-[400px] xl:h-[530px] xl:w-[550px] justify-center">
                <div
                  className={`xl:px-14 xl:py-12 sm:pr-0 sm:pl-6 sm:pt-2 md:pl-6 md:pt-2 md:pr-0 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      maxHeight: "320px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    {/* Render fetched content */}
                    {/* <div dangerouslySetInnerHTML={{ __html: pageContent.content?.text }} /> */}
                    <TranslatteText
                          text={pageContent.content.text} // Pass text to TranslationFunction component
                          targetLanguage={targetLanguage} // Pass selected language to translation function
                        />
                  </div>
                  <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* Audio Player */}
                <AudioPlayer audioSrc={`https://res.cloudinary.com/dydh2rfnk/video/upload/v1737550480/Page14_cyeggc.mp3`} />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center h-[520px] w-full md:w-[550px]">
            <div className="rounded h-full w-full" onClick={pageClickHandler}>
              <Image
                src={imgURL1}
                className="bg-cover bg-white sm:h-[400px] sm:w-[450px] xl:h-[530px] xl:w-[550px]"
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
