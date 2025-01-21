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



"use client";
import { useState, useEffect } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
import TranslateText from "../../../_components/page/api/translate3";

export default function Page1() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [handleLanguageChange, setHandleLanguageChange] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageContent, setPageContent] = useState(null);

  // const imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/pages/ekb8fh7jbl4r5icaxeei",
  // });
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page11/ibq1kx9fqjricropqfde",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: "15" });
        console.log("Fetched data:", response); // Debugging
        setPageContent(response.page);
      } catch (error) {
        console.error("Error fetching page content:", error); // Debugging
      }
    };
    fetchContent();
  }, []);

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/17");
  };

  const handleLanguageSelection = (language, isEnglishFlag) => {
    setHandleLanguageChange(language);
    setIsEnglish(isEnglishFlag);
    setShowDropdown(false);
  };

  const openModal = () => {
    setShowDropdown(true);
  };

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Language Switcher Icon */}
      <div className="absolute top-5 right-5">
        <div className="flex items-end justify-end pr-5 py-10">
          <Image
            src="/images/icons/lang.png"
            alt="Language Icon"
            width={56}
            height={56}
            quality={100}
            priority={true}
            className="w-14 h-14 animate-pulse cursor-pointer"
            onClick={openModal}
          />

          {showDropdown && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border rounded-md bg-white shadow-lg z-10">
              {/* Header with 'Choose your language' and close icon */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Select Your Language</h2>
                <button
                  onClick={() => setShowDropdown(false)}
                  className="text-black hover:text-red-700 font-bold text-xl"
                >
                  ×
                </button>
              </div>

              {/* Language options */}
              <div className="grid grid-cols-4 gap-4">
                <button
                  onClick={() => handleLanguageSelection("en", true)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelection("te", false)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  Telugu
                </button>
                <button
                  onClick={() => handleLanguageSelection("ta", false)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  Tamil
                </button>
                <button
                  onClick={() => handleLanguageSelection("hi", false)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  Hindi
                </button>
                <button
                  onClick={() => handleLanguageSelection("mr", false)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  Marathi
                </button>
                <button
                  onClick={() => handleLanguageSelection("gu", false)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  Gujarati
                </button>
                <button
                  onClick={() => handleLanguageSelection("ml", false)}
                  className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
                >
                  Malayalam
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="grid grid-cols-2 p-4">
            {/* Text Section */}
            <div className="cursor-pointer">
              <div className=" bg-white text-slate-700">
                <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                  <div
                    className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                  >
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
                      <div dangerouslySetInnerHTML={{ __html: pageContent.content?.text }} />
                                          </div>
                                        ) : (
                                          <TranslateText
                                            targetlanguage={handleLanguageChange}
                                            className="text-black"
                                          />
                                        )}
                  
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
                  <AudioPlayer />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="cursor-pointer flex justify-center items-center ">
              <div
                className="h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white"
                onClick={pageClickHandler}
              >
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
        </div>
      </div>
    </>
  );
}
