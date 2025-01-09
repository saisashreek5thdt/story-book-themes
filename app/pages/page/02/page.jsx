"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/f8tdav7x0vbfuxxl2mo9",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/03");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer  ">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center  sm:h-[400px] xs:w-[200px] sm:w-[400px]  xl:h-[530px] xl:w-[550px] justify-center">
                <div
                  className={`xl:px-14 xl:py-12 sm:pr-0 sm:pl-6 sm:pt-2  md:pl-6 md:pt-2 md:pr-0 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      maxHeight: "330px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>
                      He was very interested in learning about India&apos;s
                      Space Research Programme. The topic constantly played on
                      his mind.
                    </p>
                    <p className="py-4">
                      One night, after completing his homework, packing his bag
                      for school, and getting his uniform ready, Veer jumped
                      into bed and snuggled against Dadaji.
                    </p>
                    <p className="py-2">
                      Veer - Dadaji, tell me a story about space, the moon, and
                      astronauts.
                    </p>
                    <p className="py-2">
                      Dadaji's eyes twinkle. He had been expecting this question
                      from Veer for quite some time now. He knew about the
                      forthcoming workshop in the boy's school, and had seen his
                      excited preparations.
                    </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                  {/* <div className="-mt-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div> */}
                </div>
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center h-[530px] w-full md:w-[550px]">
            <div onClick={pageClickHander} className="rounded h-full w-full">
              <Image
                src={imgURL1}
                className="bg-cover bg-white sm:h-[400px] sm:w-[450px] xl:h-[530px] xl:w-[550px] object-cover"
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
