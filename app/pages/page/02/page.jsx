"use client"
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";

export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/f8tdav7x0vbfuxxl2mo9",
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
              <div className="flex flex-col items-center h-[600px] w-[550px] justify-center">
                <div className="px-14 py-12 mt-6 text-xl text-justify font-medium">
                  <p>
                    He was very interested in learning about India&apos;s Space Research Programme. The topic constantly played on his mind.
                  </p>
                  <p className="py-4">
                  One night, after completing his homework, packing his bag for school, and getting his uniform ready, Veer jumped into bed and snuggled against Dadaji.
                  </p>
                  <p className="py-2">
                    {/* Veer loves to hear these storie&apos;s. Veer&apos;s school
                    was soon to hold a workshop on Space. */}
                  </p>
                  <div className="py-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <hr className="w-full mt-[5px] h-[2px] opacity-70 bg-gray-300" />
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
                className="bg-cover bg-white h-[600px] w-[550px]"
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
