"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/vfnq2jupoyu5jfligple",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/05");
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer ">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[530px] w-[550px] justify-center">
                <div
                  className={`px-14 py-12 flex items-center justify-center flex-col gap-3 text-xl text-justify font-medium `}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      maxHeight: "220px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>Veer - Wow! Tell me quickly, Dadaji.</p>
                    <p className="py-4">
                      Dadaji - Once upon a time, a young princess wanted to go
                      to the moon.
                    </p>
                    <p className="py-4">
                      The king didn't know how to fulfill his daughter's foolish
                      wish. He promised a huge reward for anyone who would
                      please his daughter.
                    </p>
                    <p className="py-4">
                      Many courtiers came forward with various ideas but none
                      could please the princess.
                    </p>
                    <p className="py-4">
                      One day, a saint came and took the challenge. He asked the
                      king to bring his daughter before him.
                    </p>
                    <p className="py-4">
                      Saint - Tell me, little one, how big is the moon?
                    </p>
                    <p className="py-2">
                      Princess - It is as wide as my index finger.
                    </p>
                    {/* <div className="py-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                    />
                  </div> */}
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                  <div className="-mt-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
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
                className="bg-white h-full w-full object-cover"
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
