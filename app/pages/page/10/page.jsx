"use client"
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";

export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/jwvbo0kh5u7i7ykbliqo.png",
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
                <div className="px-14 py-5 mt-6 text-xl text-justify font-medium">
                  <p>
                    Veer - I know. I saw the satellites video on YouTube. It was
                    so interesting. Tell me Dadaji, what is so special about
                    Chandrayaan 3?
                  </p>
                  <p className="py-1">
                    Dadaji - You have asked a very good question. I will explain
                    in detail. Just then, Veer’s mother entered the room with a
                    tray with two glasses of hot milk for both of them. Dadaji
                    took a sip.
                  </p>
                  <p className="py-1">
                    Veer adjusted his pillow to be even more comfortable. The
                    milk was too hot for him. He would wait a bit to drink it.
                  </p>
                  <p className="py-1">
                    Dadaji - The landing of Chandrayaan 3 is a matter of great
                    pride for us because India is the first country to
                    successfully land on the south pole of the moon. Our
                    scientists have achieved it at a very low cost of 620
                    million dollars which is almost half the cost of a
                    Hollywood movie.
                  </p>
                </div>
                <hr className="w-full mt-[5px] h-[5px] opacity-70 bg-gray-300" />
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
