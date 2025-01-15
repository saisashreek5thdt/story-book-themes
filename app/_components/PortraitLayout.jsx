"use client";
import {
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import PortraitAudioPlayer from "./PortraitAudioPlayer";
import { useRouter } from "next/navigation";

export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  });

  const router = useRouter();

  // Function to handle text expansion
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Function to navigate to the next page
  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/02");
  };

  return (
    <>
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
            <div className="cursor-pointer overflow-hidden">
              <div className="bgText opacity-75 text-white">
                <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[380px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                  <div
                    className={`xl:py-12 sm:pr-10 max-h-[290px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                  >
                    <div
                      className={`pr-2 mt-1 mb-2 mx-4 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${
                        isExpanded ? "overflow-auto" : "overflow-hidden"
                      }`}
                      style={{
                        maxHeight: "250px",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p>
                        Ten-year-old Veer is a very intelligent and curious boy.
                        He and his Dadaji are great friends. They sleep in the
                        same room. At bedtime, before falling asleep.
                      </p>
                      <p className="py-4">
                        Dadaji makes up interesting stories on any topic that he
                        feels little Veer should be aware of.
                      </p>
                      <p className="py-2">
                        Veer loves to hear these stories. Veer&apos;s school was
                        soon to hold a workshop on Space.
                      </p>
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
                    <button className="bg-white rounded-full p-2 text-black">
                      <ArrowLeft />
                    </button>
                    <div className="sm:h-10 sm:mt-2 ">
                      <PortraitAudioPlayer />
                    </div>
                    <button className="bg-white rounded-full p-2 text-black" onClick={pageClickHandler}>
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
