"use client"
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";

export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[520px] w-[550px] justify-center">
                <div className="px-14 py-12 mt-6 text-xl text-justify font-medium">
                  <p>
                    Ten year old Veer is a very intelligent and curious boy. He
                    and his Dadaji are great friends. They sleep in the same
                    room. At bedtime, before falling asleep.
                  </p>
                  <p className="py-4">
                    Dadaji makes up interesting stories on any topic that he
                    feels little Veer should be aware of.
                  </p>
                  <p className="py-2">
                    Veer loves to hear these storie&apos;s. Veer&apos;s school
                    was soon to hold a workshop on Space.
                  </p>
                  <div className="py-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                      unoptimized
                    />
                  </div>
                </div>
                <hr className="w-full -mt-16 h-[2px] opacity-70 bg-gray-300" />
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="cursor-pointer">
            <div className="rounded">
              <Image
                src={imgURL1}
                className="bg-cover bg-white h-[520px] w-[550px]"
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
