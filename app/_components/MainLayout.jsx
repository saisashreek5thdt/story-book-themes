"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";

export default function MainLayout() {
  <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center force-landscape">
    <div className="flex justify-center items-center min-h-[80vh]">
      <button
        className="bg-white rounded-full p-2 text-black"
        onClick={() => handleNavigation("prev")}
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
                  <p
                    dangerouslySetInnerHTML={{ __html: pageData.content.text }}
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
              src={imgURL}
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
        onClick={() => handleNavigation("next")}
      >
        <ArrowRight />
      </button>
    </div>
  </div>;
}