// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import { ArrowRight, ArrowLeft } from "lucide-react";
// // import { GraphQLClient } from "graphql-request";
// // import { GET_PAGE_BY_SLUG } from "@/lib/queries";

// // // Initialize GraphQL Client
// // const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT; // Add this to your .env file
// // const graphQLClient = new GraphQLClient(endpoint, {
// //   headers: {
// //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`, // Add token to .env file
// //   },
// // });
// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";
// // import graphQLClient from "@/lib/graphql-client";
// // import { GET_PAGE_BY_SLUG } from "@/lib/queries";
// // import { getCldImageUrl } from "next-cloudinary";
// // import { ArrowRight, ArrowLeft } from "lucide-react";
// // import AudioPlayer from "../../../_components/AudioPlayer";
// // import PortraitLayout from "../../../_components/PortraitLayout";
// // import TranslateText from "@/app/_components/page/api/TranslateText";

// // // Initialize GraphQL Client
// // const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT; // Add this to your .env file
// // const graphQLClient = new GraphQLClient(endpoint, {
// //   headers: {
// //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`, // Add token to .env file
// //   },
// // });

// // // GraphQL Query
// // export const GET_PAGE_BY_SLUG = `
// //   query GetPageBySlug($slug: String!) {
// //     pages(where: { slug: $slug }) {
// //       slug
// //       content {
// //         text
// //       }
// //       imageUrl
// //     }
// //   }
// // `;

// // // getStaticPaths: Generate paths for static pages
// // export async function getStaticPaths() {
// //   // Fetch all slugs from Hygraph to generate paths
// //   const response = await graphQLClient.request(`
// //     query GetAllSlugs {
// //       pages {
// //         slug
// //       }
// //     }
// //   `);

// //   const paths = response.pages.map((page) => ({
// //     params: { id: page.slug },
// //   }));

// //   return {
// //     paths,
// //     fallback: false, // Show a 404 for missing pages
// //   };
// // }

// // // getStaticProps: Fetch data for a specific slug
// // export async function getStaticProps({ params }) {
// //   const { id: slug } = params;

// //   try {
// //     const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug });
// //     return {
// //       props: {
// //         pageData: response.pages[0], // Hygraph returns an array
// //       },
// //     };
// //   } catch (error) {
// //     console.error("Error fetching page content:", error);
// //     return {
// //       notFound: true, // Show a 404 page if there's an error
// //     };
// //   }
// // }

// // // Page Component
// // export default function Page({ pageData }) {
// //   const [isExpanded, setIsExpanded] = useState(false);
// //   const [isPortrait, setIsPortrait] = useState(false);
// //   const router = useRouter();

//   useEffect(() => {
// export default function Page1() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [pageContent, setPageContent] = useState(null); // Store fetched content
//   const [slug, setSlug] = useState(1); // Initial slug value
//   const [isPortrait, setIsPortrait] = useState(false); // Check orientation
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch content based on the current slug
//     const fetchContent = async () => {
//       try {
//         const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: slug.toString() });
//         setPageContent(response.page);
//       } catch (error) {
//         console.error("Error fetching page content:", error);
//       }
//     };

//     fetchContent();
//   }, [slug]);

//   useEffect(() => {
//     // Check and handle screen orientation
//     if (typeof window !== "undefined") {
//       setIsPortrait(window.innerHeight > window.innerWidth);

// //       const handleResize = () => {
// //         setIsPortrait(window.innerHeight > window.innerWidth);
// //       };

// //       window.addEventListener("resize", handleResize);
// //       return () => window.removeEventListener("resize", handleResize);
// //     }
// //   }, []);

// //   const toggleExpand = () => setIsExpanded((prev) => !prev);
//   const toggleExpand = () => setIsExpanded((prev) => !prev);

// //   const handleNavigation = (direction) => {
// //     const currentSlug = parseInt(pageData.slug);
// //     const newSlug = direction === "next" ? currentSlug + 1 : currentSlug - 1;

// //     router.push(`/pages/${newSlug.toString().padStart(2, "0")}`);
// //   };

// //   if (!pageData) {
// //     return <div>Content not available. Please try again later.</div>;
// //   }

//   // return (
//     <div>
//       {isPortrait ? (
//         <div className="w-full min-h-screen bg-cover flex flex-col items-center justify-center">
//           {/* Portrait View */}
//           <div className="grid grid-rows-2">
//             <div>
//               {/* Image Section */}
//               {pageData.imageUrl && (
//                 <Image
//                   src={pageData.imageUrl}
//                   alt="Page Cover"
//                   width={800}
//                   height={1400}
//                   className="object-cover"
//                 />
//               )}
//             </div>
//             <div>
//               {/* Content Section */}
//               <div>
//                 <div
//                   className={`overflow-hidden ${
//                     isExpanded ? "max-h-none" : "max-h-[250px]"
//                   }`}
//                 >
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: pageData.content.text,
//                     }}
//                   />
//                 </div>
//                 <button onClick={toggleExpand}>
//                   {isExpanded ? "Read Less" : "Read More"}
//                 </button>
//               </div>
//               {/* Navigation Buttons */}
//               <div>
//                 <button onClick={() => handleNavigation("prev")}>
//                   <ArrowLeft />
//                 </button>
//                 <button onClick={() => handleNavigation("next")}>
//                   <ArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         // Landscape View
//         <div className="w-full min-h-screen bg-cover flex flex-col items-center justify-center">
//           <div className="grid grid-cols-2">
//             {/* Content Section */}
//             <div>
//               <div
//                 className={`overflow-hidden ${
//                   isExpanded ? "max-h-none" : "max-h-[320px]"
//                 }`}
//               >
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: pageData.content.text,
//                   }}
//                 />
//               </div>
//               <button onClick={toggleExpand}>
//                 {isExpanded ? "Read Less" : "Read More"}
//               </button>
//             </div>
//             {/* Image Section */}
//             <div>
//               {pageData.imageUrl && (
//                 <Image
//                   src={pageData.imageUrl}
//                   alt="Page Cover"
//                   width={800}
//                   height={1400}
//                   className="object-cover"
//                 />
//               )}
//             </div>
//   // Toggle expanded text
//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   // Navigate to the previous page
//   const pageClickPrevHandler = (e) => {
//     e.preventDefault();
//     if (slug > 1) {
//       setSlug((prev) => prev - 1);
//     } 
//   };

//   router.push(`/pages/page/${slug}`);

//   // Navigate to the next page
//   const pageClickNextHandler = (e) => {
//     e.preventDefault();
//     if (slug < 27) {
//       setSlug((prev) => prev + 1);
//     }
//   };

//   if (!pageContent) {
//     return <div>Loading...</div>;
//   }

//   const imgURL1 = getCldImageUrl({
//     src: pageContent.imageUrl, // Use the image URL from the fetched content
//   });

//   return (
//     <div>
//       {isPortrait ? (
//         <PortraitLayout />
//       ) : (
//         <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center force-landscape">
//           {/* Main Content Container */}
//           <div className="flex justify-center items-center min-h-[80vh]">
//             <button
//               className="bg-white rounded-full p-2 text-black"
//               onClick={pageClickPrevHandler}
//               disabled={slug <= 1} // Disable button if slug is at the first page
//             >
//               <ArrowLeft />
//             </button>

//             <div className="grid grid-cols-2 p-4">
//               {/* Text Section */}
//               <div className="cursor-pointer">
//                 <div className="bgText text-black">
//                   <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
//                     <div
//                       className={`xl:py-12 sm:pr-10 sm:max-h-[270px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
//                     >
//                       <div
//                         className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${
//                           isExpanded ? "overflow-auto" : "overflow-hidden"
//                         }`}
//                         style={{
//                           maxHeight: "320px",
//                           transition: "max-height 0.3s ease",
//                         }}
//                       >
//                         <div targetLanguage={targetLanguage} />
//                       <TranslateText
//                         text={pageContent.content?.text} // Pass text to TranslationFunction component
//                         targetLanguage={targetLanguage} // Pass selected language to translation function
//                       />
//                       </div>
//                       <button
//                         onClick={toggleExpand}
//                         className="text-black hover:text-cyan-700 focus:outline-none mb-10"
//                       >
//                         {isExpanded ? "Read Less" : "Read More"}
//                       </button>
//                     </div>

//                     {/* Audio Player Section */}
//                     <AudioPlayer />
//                   </div>
//                 </div>
//               </div>

//               {/* Image Section */}
//               <div className="cursor-pointer flex justify-center items-center">
//                 <div className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white">
//                   <Image
//                     src={imgURL1}
//                     className="bg-white h-full w-full object-cover"
//                     alt="Cover Image"
//                     width={800}
//                     height={1400}
//                     unoptimized
//                   />
//                 </div>
//               </div>
//             </div>
//             <button
//               className="bg-white rounded-full p-2 text-black"
//               onClick={pageClickNextHandler}
//               disabled={slug >= 27} // Disable button if slug is at the last page
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import { getCldImageUrl } from "next-cloudinary";
import { ArrowRight, ArrowLeft } from "lucide-react";
import AudioPlayer from "../../../_components/AudioPlayer";
import PortraitLayout from "../../../_components/PortraitLayout";
import TranslateText from "@/app/_components/page/api/TranslateText";

export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageContent, setPageContent] = useState(null); // Store fetched content
  const [slug, setSlug] = useState(1); // Initial slug value
  const [isPortrait, setIsPortrait] = useState(false); // Check orientation
  const router = useRouter();

  useEffect(() => {
    // Fetch content based on the current slug
    const fetchContent = async () => {
      try {
        const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: slug.toString() });
        setPageContent(response.page);
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchContent();
  }, [slug]);

  useEffect(() => {
    // Check and handle screen orientation
    if (typeof window !== "undefined") {
      setIsPortrait(window.innerHeight > window.innerWidth);

      const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Toggle expanded text
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Navigate to the previous page
  const pageClickPrevHandler = (e) => {
    e.preventDefault();
    if (slug > 1) {
      setSlug((prev) => prev - 1);
    } 
  };

  router.push(`/pages/page/${slug}`);

  // Navigate to the next page
  const pageClickNextHandler = (e) => {
    e.preventDefault();
    if (slug < 27) {
      setSlug((prev) => prev + 1);
    }
  };

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  const imgURL1 = getCldImageUrl({
    src: pageContent.imageUrl, // Use the image URL from the fetched content
  });

  return (
    <div>
      {isPortrait ? (
        <PortraitLayout />
      ) : (
        <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center force-landscape">
          {/* Main Content Container */}
          <div className="flex justify-center items-center min-h-[80vh]">
            <button
              className="bg-white rounded-full p-2 text-black"
              onClick={pageClickPrevHandler}
              disabled={slug <= 1} // Disable button if slug is at the first page
            >
              <ArrowLeft />
            </button>

            <div className="grid grid-cols-2 p-4">
              {/* Text Section */}
              <div className="cursor-pointer">
                <div className="bgText text-black">
                  <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                    <div
                      className={`xl:py-12 sm:pr-10 sm:max-h-[270px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                    >
                      <div
                        className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${
                          isExpanded ? "overflow-auto" : "overflow-hidden"
                        }`}
                        style={{
                          maxHeight: "320px",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                        <div targetLanguage={targetLanguage} />
                      <TranslateText
                        text={pageContent.content?.text} // Pass text to TranslationFunction component
                        targetLanguage={targetLanguage} // Pass selected language to translation function
                      />
                      </div>
                      <button
                        onClick={toggleExpand}
                        className="text-black hover:text-cyan-700 focus:outline-none mb-10"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>

                    {/* Audio Player Section */}
                    <AudioPlayer />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="cursor-pointer flex justify-center items-center">
                <div className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white">
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
              disabled={slug >= 27} // Disable button if slug is at the last page
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}