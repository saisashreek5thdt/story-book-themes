"use client"
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/philu0rdlaeruw76llkg",
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
    router.push("/pages/page/23");
  };


  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[520px] w-[550px] justify-center">
              <div
                  className={`px-14 mb-16 py-12 flex items-center justify-center flex-col gap-3 text-xl text-justify font-medium `}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      maxHeight:"440px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                  <p>
                    Veer - Last Diwali I saw him on TV standing and talking with our soldiers at some snowy place.
                  </p>
                  <p className="py-4">
                    Dadaji- Yes, That's his greatness.He never misses a chance to be with the Armed Forces and celebrate Diwali with them.
                  </p>
                  <p className="py-2">
                    He always shows utmost faith in their morale with his presence.
                  </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* <div className="-mt-6">
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
          <div className="cursor-pointer flex justify-center items-center h-[520px] w-full md:w-[550px]">
            <div className="rounded h-full w-full" onClick={pageClickHander}>
              <Image
                src={imgURL1}

                className="bg-cover bg-white  h-full w-full object-cover"

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
