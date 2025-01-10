"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page11/ibq1kx9fqjricropqfde",
  });

  // const imgURL1 = "/images/page10_11/image 2.jpg";

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/12");
  };

  return (
      <div className="w-full min-h-screen bg-cover select-none">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-0">
            {/* Text Section */}
            <div className="cursor-pointer">
              <div className="bg-white text-slate-700 shadow-md">
                <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[360px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px]  sm:p-0 md:p-6 xl:p-6 lg:p-6">
                  <div className="flex items-center justify-center flex-col gap-3 text-justify font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
                    <div
                      className={`pr-2 ${
                        isExpanded ? "overflow-auto" : "overflow-hidden"
                      }`}
                      style={{
                        maxHeight: "220px",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                         <p>
                    Veer - I know. I saw the satellites video on youtube. It was
                    so interesting. Tell me Dadaji, what is so special about
                    Chandrayaan 3?
                  </p>
                  <p className="py-4">
                    Dadaji - You have asked a very good question. I will explain
                    in detail. Just then, Veer&apos;s mother entered the room
                    with a tray with two glasses of hot milk for both of them.
                    Dadaji took a sip.
                  </p>
                  <p className="py-4">
                    Veer adjusted his pillow to be even more comfortable. The
                    milk was too hot for him. He would wait a bit to drink it.
                  </p>
                  <p className="py-2">
                    Dadaji - The landing of Chandrayaan 3 is a matter of great
                    pride for us because India is the first country to
                    successfully land on the south pole of the moon. Our
                    scientists have achieved it at a very low cost of 620
                    million dollars which is almost half the cost of a Hollywood
                    movie.
                  </p>
                    </div>
                    <button
                      onClick={toggleExpand}
                      className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                  {/* Uncomment if needed */}
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
            <div className="cursor-pointer flex justify-center items-center">
              <div
                className="rounded h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full max-w-[550px] xl:bg-white "
                onClick={pageClickHander}
              >
                <Image
                  src={imgURL1}
                  className=" bg-white h-full w-full pt-0 xs:h-[100px] xs:w-[100px] sm:h-[380px] md:h-[360px] lg:h-[450px] xl:h-[500px] xl:w-[600px] object-cover"
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
