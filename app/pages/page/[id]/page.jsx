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
    } else {
      router.push("/"); // Go to the homepage if slug reaches 1
    }
  };

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
  const audioSrc = pageContent.audioUrl; // Fetch audio URL dynamically


  const imgURL1 = getCldImageUrl({
    src: pageContent.imageUrl, // Use the image URL from the fetched content
  });

  const backgroundImageUrl = getCldImageUrl({
    src: pageContent.backgroundImageUrl, // Fetch dynamic background image URL
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
              <div className="cursor-pointer relative">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={backgroundImageUrl} // Dynamically set the background image
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                  />
                </div>
                <div className="relative z-10 bgText text-black">
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
                        <div dangerouslySetInnerHTML={{ __html: pageContent.content?.text }} />
                      </div>
                      <button
                        onClick={toggleExpand}
                        className="text-black hover:text-cyan-700 focus:outline-none mb-10"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>

                    {/* Audio Player Section */}
                    <AudioPlayer 
                      audio={audioSrc}
                    />
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
