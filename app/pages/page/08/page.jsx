"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";

export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/suuqij877k2egsskidti.png",
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
    router.push("/pages/page/09");
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
                    Dadaji - Dadaji was expecting this question. He knew that
                    Veer wanted to get into the root of the matter. He was
                    prepared to answer.
                  </p>
                  <p className="py-1">
                    Dadaji - For over fourteen hundred years, cruel invaders
                    attacked our land, ruled it, and caused great harm.
                  </p>
                  <p className="py-2">
                    They destroyed the famous universities of Nalanda,
                    Takshashila, and Vikramshila, where many of our precious
                    texts were kept. That is how we lost our ancient knowledge.
                  </p>
                  <p className="py-0">
                    Just imagine! Veer, the great mathematician Aryabhatt who
                    discovered 'zero' was an esteemed teacher at Nalanda
                    University.
                  </p>
                  <p className="py-2">
                    The Chinese scholar Hiuen Tsang studied at Nalanda
                    University and even became a teacher there, so great was its
                    name and fame.
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
