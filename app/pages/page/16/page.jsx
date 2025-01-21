"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import AudioPlayer from "../../../_components/AudioPlayer";
import { getCldImageUrl } from "next-cloudinary";

export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageContent, setPageContent] = useState(null); // Store fetched content
  const router = useRouter();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: "16" });
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
    router.push("/pages/page/17"); // Navigate to the next page
  };

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/ekb8fh7jbl4r5icaxeei", // Updated image URL
  });

  return (
    <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                <div
                  className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                >
                  <div
                    className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                      }`}
                    style={{
                      // maxHeight: "320px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>
                      Dadaji - No Veer. Our scientists did not sit and sulk at
                      the setback. That same day they decided to correct the
                      errors and planned Chandrayaan3.
                    </p>
                    <p className="py-2">
                      They learnt from their mistakes and made a failure-proof
                      model for the next mission and within four years succeeded
                      in their mission.
                    </p>
                    <p className="py-2">
                      We are proud of our scientists and of our leadership in
                      showing faith in the scientific community. Over 100 women
                      scientists were also involved in the mission and were in
                      the control room at the time of the launch and during the
                      landing on August 23.
                    </p>
                    <p className="py-2">
                      Prime Minister Narendra Modi met and congratulated each
                      one of them.
                    </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none mb-10"
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
          <div className="cursor-pointer flex justify-center items-center ">
            <div className=" h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" onClick={pageClickHander}>
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
  );
}
