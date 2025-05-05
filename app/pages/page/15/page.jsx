
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

//    // const imgURL1 = getCldImageUrl({
//   //   src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
//   // });

//   const imgURL1 = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/pages/ekb8fh7jbl4r5icaxeei",
//   });

//   // const imgURL1 = "/images/page14_15/image 2.jpg";

//   const gifImgUrl = getCldImageUrl({
//     src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
//   });

//   const router = useRouter();

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const pageClickHandler = (e) => {
//     e.preventDefault();
//     router.push("/pages/page/16");
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
//                       <p>
//                       Veer nodded as he gulped down the now cold milk. He
//                       faintly remembered watching this news five years ago.
//                       Dadajı was surprised. How could Veer remember the event?
//                       He was just five back then.
//                     </p>
//                     <p className="py-4">
//                       Dadajı - Do you remember watching that landing of
//                       Chandrayaan 2? Our Prime Minister Shri Narendra Modi was
//                       also present in the operation control room to witness that
//                       historic moment. We were all so touched when Modi ji
//                       hugged and consoled the ISRO Chairman K Sivan and
//                       encouraged him to try again.
//                     </p>
//                     <p className="py-4">
//                       Veer I can imagine how disappointing it must have been
//                       for the whole team.
//                     </p>
//                     </div>
//                     <button
//                       onClick={toggleExpand}
//                       className="text-blue-500 hover:text-blue-700 focus:outline-none"
//                     >
//                       {isExpanded ? "Read Less" : "Read More"}
//                     </button>
//                   </div>
//                    {/* Uncomment if needed */}
//                   {/* <div className="-mt-2">
//                     <Image
//                       src={gifImgUrl}
//                       alt="Astronaut Gif"
//                       width={120}
//                       height={120}
//                       unoptimized
//                     />
//                   </div> */}

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
// Page1.js



"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import graphQLClient from "@/lib/graphql-client";
// import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import AudioPlayer from "../../../_components/AudioPlayer";
import { getCldImageUrl } from "next-cloudinary";
// import LanguageSwitcher from "../../../_components/page/LanguageBox";
import TranslatteText from "../../../_components/page/api/TranslateText";
import PortraitAudioPlayer from "../../../_components/PortraitAudioPlayer";
import { ArrowRight, ArrowLeft } from "lucide-react";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [pageContent, setPageContent] = useState(null); // Store fetched content
  // const [targetLanguage, setTargetLanguage] = useState("en"); // Default language is English

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/ekb8fh7jbl4r5icaxeei",
  });

  const textBg = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/bgImages/page15/fvtabwhabfv7tgatnjs9.png",
  });
  const audioSrc = '/images/page15/Page15.mp3';
  // const audioSrc = 'https://res.cloudinary.com/dydh2rfnk/video/upload/v1737550480/Page15_o47pow.mp3'

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

  // useEffect(() => {
  //   const fetchContent = async () => {
  //     try {
  //       const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: "15" });
  //       console.log("Fetched data:", response); // Debugging
  //       setPageContent(response.page);
  //     } catch (error) {
  //       console.error("Error fetching page content:", error); // Debugging
  //     }
  //   };

  //   fetchContent();
  // }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickNextHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/16");
  };

  const pageClickPrevHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/14");
  };

  // const handleLanguageChange = (language, isEnglishFlag) => {
  //   setTargetLanguage(language); // Update target language when user selects a language
  // };

  // if (!pageContent) {
  //   return <div>Loading...</div>;
  // }



  return (
    <> {/* Language Switcher Component */}
      {/* <LanguageSwitcher
        onLanguageChange={handleLanguageChange} // Update target language when user changes language
      /> */}
      <div>
        {isPortrait ? (
          <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center ">
            {/* Main Content Container */}
            <div className="flex justify-center items-center">
              <div className="grid grid-rows-2">
                {/* Image Section */}
                <div className="cursor-pointer flex justify-center items-center">
                  <div className="rounded -mt-16 h-[390px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[380px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:bg-white">
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

                {/* Text Section */}
                <div className="cursor-pointer relative">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={textBg} // Dynamically set the background image
                      layout="fill"
                      objectFit="cover"
                      alt="Background Image"
                    />
                  </div>
                  <div className="relative z-10 bgText text-black">
                    <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[380px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                      <div
                        className={`xl:py-12 sm:pr-10 max-h-[290px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                      >
                        <div
                          className={`pr-2 mt-1 mb-2 mx-4 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                            }`}
                          style={{
                            maxHeight: "250px",
                            transition: "max-height 0.3s ease",
                          }}
                        >
                          {/* <p>Veer nodded as he gulped down the now cold milk.</p>
                          <p className="py-2">
                            He faintly remembered watching this news five years ago.
                          </p>
                          <p className="py-2">
                            Dadaji was surprised. How could Veer remember the event?
                            He was just five back then.
                          </p>
                          <p className="py-2">
                            Dadaji - Do you remember watching that landing of
                            Chandrayaan 2? Our Prime Minister Shri Narendra Modi was
                            also present in the operation control room to witness that
                            historic moment. We were all so touched when Modi ji
                            hugged and consoled the ISRO Chairman K Sivan and
                            encouraged him to try again.
                          </p>
                          <p className="py-2">
                            Veer - I can imagine how disappointing it must have been
                            for the whole team.
                          </p> */}
                        </div>
                        <button
                          onClick={toggleExpand}
                          className="text-cyan-500 hover:text-cyan-700 focus:outline-none mb-6"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      </div>

                      {/* Audio Player Section */}
                      <div className="flex justify-center items-center gap-3 mb-20">
                        <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
                          <ArrowLeft />
                        </button>
                        <div className="sm:h-10 sm:mt-2 ">
                          <PortraitAudioPlayer audio={audioSrc} />
                        </div>
                        <button className="bg-white rounded-full p-2 text-black" onClick={pageClickNextHandler}>
                          <ArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
            <div className="flex justify-center items-center min-h-[80vh]">
              <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
                <ArrowLeft />
              </button>
              <div className="grid grid-cols-2 p-4">
                {/* Text Section */}
                <div className="cursor-pointer relative">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={textBg} // Dynamically set the background image
                      layout="fill"
                      objectFit="cover"
                      alt="Background Image"
                    />
                  </div>
                  <div className="relative z-10 bgText text-black">
                    <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                      <div
                        className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                      >
                        <div
                          className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                            }`}
                          style={{
                            // maxHeight: "320px",
                            transition: "max-height 0.3s ease",
                          }}
                        >
                          <p>Veer nodded as he gulped down the now cold milk.</p>
                    <p className="py-2">
                      He faintly remembered watching this news five years ago.
                    </p>
                    <p className="py-2">
                      Dadaji was surprised. How could Veer remember the event?
                      He was just five back then.
                    </p>
                    <p className="py-2">
                      Dadaji - Do you remember watching that landing of
                      Chandrayaan 2? Our Prime Minister Shri Narendra Modi was
                      also present in the operation control room to witness that
                      historic moment. We were all so touched when Modi ji
                      hugged and consoled the ISRO Chairman K Sivan and
                      encouraged him to try again.
                    </p>
                    <p className="py-2">
                      Veer - I can imagine how disappointing it must have been
                      for the whole team.
                    </p>
                          {/* <div targetLanguage={targetLanguage} />
                          <TranslatteText
                            text={pageContent.content?.text} // Pass text to TranslationFunction component
                            targetLanguage={targetLanguage} // Pass selected language to translation function
                          /> */}
                        </div>
                        <button
                          onClick={toggleExpand}
                          className=" text-blue-500 hover:text-blue-700 focus:outline-none mb-20"
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
                      <AudioPlayer audio={audioSrc} />
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="cursor-pointer flex justify-center items-center ">
                  <div className="h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white">
                    <Image
                      src={imgURL1}
                      className="bg-cover rounded-r-sm shadow-md bg-white h-full w-full object-cover"
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
    </>
  );
}