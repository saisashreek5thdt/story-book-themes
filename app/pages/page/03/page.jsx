"use client"
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";

export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/dutpnurbiui06mdjay4d",
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
                <div className="px-14 py-12 mt-2 text-xl text-justify font-medium">
                  <p>
                  Dadaji - What is so special about the moon today? Veer - Dadaji, this morning while cleaning my room, I saw the picture of a spacecraft on the moon on the front page of a newspaper.
                  </p>
                  <p className="py-4">
                  There were also pictures of people celebrating. I want to know why this news was so important that day
                  </p>
                  <p className="py-4">
                  Dadaji - Veer, it was a very great day in the history of Space research, as well as for India. Modiji has rightly named 23 August as National Space Day. But first let me tell you a small story about the moon which I heard from my grandmother when I was young.
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
                <hr className="w-full -mt-8 h-[2px] opacity-70 bg-gray-300" />
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
                className="bg-cover bg-white h-[600px] w-[550px] "
                alt="Cover Image"
                width={400}
                height={1400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
