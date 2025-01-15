"use client";
import { useState, useEffect } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AudioPlayer from "../../../_components/AudioPlayer";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";

export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageContent, setPageContent] = useState(null); // Store fetched content
  const imgURL1 = "/image/13.jpg";
  const router = useRouter();

  // Fetch content from Hygraph
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { Page } = await graphQLClient.request(GET_PAGE_BY_SLUG, {
          slug: "13", // Replace with dynamic slug if needed
        });
        setPageContent(Page);
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchContent();
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/14");
  };

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  return (
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
                    <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
                  </div>
                  <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* Audio Player */}
                <AudioPlayer />
              </div>
            </div>
          </div>
 {/* Image Section */}
 <div className="cursor-pointer flex justify-center items-center h-[520px] w-full md:w-[550px]">
            <div className="rounded h-full w-full" onClick={pageClickHander}>
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
  );
}
