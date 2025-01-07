"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";

export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/vlcgmwkjodrpiroan425.png",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const router = useRouter();

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/10");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
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
                      maxHeight: "335px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                  <p>
                    Veer was amazed. But he felt that Dadaji had started talking
                    about something else now. Getting impatient, he gently
                    returned to the topic he wanted to discuss.
                  </p>
                  <p className="py-4">
                    Veer - OK. But now we have been a free nation for more than
                    75 years. What are we doing now?
                  </p>
                  <p className="py-2">
                    Dadaji - Yes. You are right. In the last ten years, India
                    has made great progress in space exploration.
                  </p>
                  <p className="py-2">
                    We have become atmanirbhar (self-reliant) in all fields from
                    sea to space and talent to technology.
                  </p>
                  <p className="py-2">
                    India now holds the world record for sending 104 satellites
                    in just one day!
                  </p>
                </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer" onClick={pageClickHander}>
            <div className="rounded">
              <Image
                src={imgURL1}
                className="bg-cover h-[530px] w-[550px]"
                alt="Cover Image"
                width={800}
                height={1400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
