"use client";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";

export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/bf80rptamqi3qqw9szmp.png",
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
                <div className="px-14 py-9 mt-6 text-xl text-justify font-medium">
                  <p>
                    Dadaji - Thousands of years before people could not even
                    dream of space and aircrafts, ancient Indian wise men had
                    compiled the Vimaanshastra, or the science of flying. Gods
                    and kings often covered long distances on their flying
                    chariots.
                  </p>
                  <p className="py-4">
                    Veer - Yes, Dadaji. I remember! In the Ramayana too, Ravana
                    kidnapped Sita and flew in his Pushpak Vimaan. But then, why
                    did it take us so long to explore space?
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
                className="bg-cover h-[600px] w-[550px]"
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
